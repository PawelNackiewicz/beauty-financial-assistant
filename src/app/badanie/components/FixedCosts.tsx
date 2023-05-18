import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { RemoveButton } from "@/components/button/RemoveButton";
import { AddServiceButton } from "./AddServiceButton";

type Cost = {
    costName?: string,
    costCount?: number
}

type FormData = {
    fixedCosts: Cost[];
};

export const FixedCosts = () => {
    const { register, control, handleSubmit, reset, watch } = useForm<FormData>({
        defaultValues: {
            fixedCosts: [{ costName: "", costCount: 0 }]
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
                <div className="w-full grid grid-cols-12 gap-2">
                    <Typography variant="body2" className="col-span-8">Nazwa</Typography>
                    <Typography variant="body2" className="col-span-3">Kwota</Typography>
                </div>
                <ul className="w-full flex flex-col justify-center gap-1">
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id} className="w-full grid grid-cols-12 gap-2">
                                <input
                                    className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm col-span-8"
                                    defaultValue={`${item.costName}`}
                                    {...register(`fixedCosts.${index}.costName`)}
                                />
                                <input
                                    className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm col-span-3"
                                    defaultValue={`${item.costCount}`}
                                    {...register(`fixedCosts.${index}.costCount`)}
                                />
                                <RemoveButton className="justify-self-end" onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>
                <AddServiceButton
                    onClick={() => {
                        append({ costName: "", costCount: 0 });
                    }}
                />
            </form>
        </div>
    )
};