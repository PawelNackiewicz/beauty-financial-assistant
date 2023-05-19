import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { RemoveButton } from "@/components/button/RemoveButton";
import { AddServiceButton } from "@/app/badanie/components/AddServiceButton";
import { Button } from "../../../components/button/Button";
import { useResearch } from "../ResearchContext";
import { Service } from "@/types";

type FormData = {
    services: Service[];
};

export const AllServices = () => {
    const { goNext, setServices } = useResearch()
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
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

    const onSubmit = (data: FormData) => {
        setServices(data.services)
        goNext()
    }

    return (
        <div>
            <Typography variant="h1">Wymień wszystkie usługi salonu</Typography>
            <form className="flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
                <ul className="w-full flex flex-col justify-center gap-1">
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id} className="w-full flex gap-2 items-center">
                                <input
                                    className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm"
                                    defaultValue={`${item.serviceName}`}
                                    {...register(`services.${index}.serviceName`, { required: true })}
                                />
                                <RemoveButton onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>
                {errors && errors.services && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}

                <AddServiceButton onClick={() => {
                    append({ serviceName: "" });
                }} />

                <Button type="submit" className="self-end mt-10" label="Dalej" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
};