import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { Input } from "@/components/form/input/Input";
import { RemoveButton } from "@/components/button/RemoveButton";
import { Button } from "@/components/button/Button";

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
                                    name={`test[${index}].serviceName`}
                                    defaultValue={`${item.serviceName}`}
                                    register={{ ...register(`services.${index}.serviceName`) }}
                                />
                                <RemoveButton onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>
                <Button
                    label="Dodaj usługe"
                    icon={<PlusIcon />}
                    variant="outlined"
                    className="p-0 m-0"
                    onClick={() => {
                        append({ serviceName: "" });
                    }}
                />
            </form>
        </div>
    )
};

const PlusIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1665 15.8333V10.8333H4.1665V9.16663H9.1665V4.16663H10.8332V9.16663H15.8332V10.8333H10.8332V15.8333H9.1665Z" fill="#034C8C" />
        </svg>

    )
}