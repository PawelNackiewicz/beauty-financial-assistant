import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { RemoveButton } from "@/components/button/RemoveButton";
import { AddServiceButton } from "@/app/badanie/components/AddServiceButton";

type Service = {
    serviceName?: string
}

type FormData = {
    services: Service[];
};

export const AllServices = () => {
    const { register, control, handleSubmit, reset, watch } = useForm<FormData>({
        defaultValues: {
            services: [{ serviceName: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "services"
        }
    );

    const onSubmit = (data: any) => console.log("data", data);

    return (
        <div>
            <Typography variant="h1">Wymień wszystkie usługi salonu</Typography>
            <form className="flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
                <ul className="w-full flex flex-col justify-center">
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id} className="w-full flex gap-2 items-center">
                                <input
                                    className="border border-primary rounded-lg w-full"
                                    defaultValue={`${item.serviceName}`}
                                    {...register(`services.${index}.serviceName`)}
                                />
                                <RemoveButton onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>
                <AddServiceButton onClick={() => {
                    append({ serviceName: "" });
                }} />
            </form>
        </div>
    )
};