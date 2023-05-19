import { useForm, useFieldArray } from "react-hook-form";
import { Typography } from "@/components/typography/Typography";
import { RemoveButton } from "@/components/button/RemoveButton";
import { AddServiceButton } from "./AddServiceButton";
import { Button } from "../../../components/button/Button";
import { useResearch } from "../ResearchContext";
import { Cost } from "../../../types";

type FormData = {
    depreciationCosts: Cost[];
};

export const DepreciationCosts = () => {
    const { goNext, setDepreciationCosts } = useResearch()
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            depreciationCosts: [{ costName: "", costCount: 0 }]
        }
    });
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "depreciationCosts"
        }
    );

    const onSubmit = (data: FormData) => {
        setDepreciationCosts(data.depreciationCosts)
        goNext()
    }

    return (
        <div>
            <Typography variant="h1">Wymień wszystkie koszty amortyzacji</Typography>
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
                                    {...register(`depreciationCosts.${index}.costName`, { required: true })}
                                />
                                <input
                                    className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm col-span-3"
                                    defaultValue={`${item.costCount}`}
                                    {...register(`depreciationCosts.${index}.costCount`, { required: true })}
                                />
                                <RemoveButton className="justify-self-end" onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>

                {errors && errors.depreciationCosts && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}

                <AddServiceButton
                    onClick={() => {
                        append({ costName: "", costCount: 0 });
                    }}
                />
                <Button type="submit" className="self-end mt-10" label="Dalej" onClick={handleSubmit(onSubmit)} />

            </form>
        </div>
    )
};