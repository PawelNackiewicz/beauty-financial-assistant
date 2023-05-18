import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { RemoveButton } from "@/components/button/RemoveButton";
import { AddServiceButton } from "./AddServiceButton";

type Cost = {
    cost?: string
}

type FormData = {
    fixedCosts: Cost[];
};

export const FixedCosts = () => {
    const { register, control, handleSubmit, reset, watch } = useForm<FormData>({
        defaultValues: {
            fixedCosts: [{ cost: "" }]
        }
    });
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "fixedCosts"
        }
    );

    const onSubmit = (data: any) => console.log("data", data);

    return (
        <div>
            <Typography variant="h1">Wymień wszystkie koszty stałe</Typography>
            <form className="flex flex-col items-end" onSubmit={handleSubmit(onSubmit)}>
                <ul className="w-full flex flex-col justify-center">
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id} className="w-full flex gap-2 items-center">
                                <input
                                    className="border border-primary rounded-lg w-full"
                                    name={`test[${index}].cost`}
                                    defaultValue={`${item.cost}`}
                                    register={{ ...register(`services.${index}.cost`) }}
                                />
                                <RemoveButton onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>
                <AddServiceButton
                    onClick={() => {
                        append({ cost: "" });
                    }}
                />
            </form>
        </div>
    )
};