import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../../components/button/Button";
import { Typography } from "../../../components/typography/Typography";
import { Cost, Service } from "../../../types";
import { useResearch } from "../ResearchContext";
import { AddServiceButton } from "./AddServiceButton";
import { RemoveButton } from "../../../components/button/RemoveButton";

export const ServiceCosts = () => {
    const { services, goNext } = useResearch()

    return (
        <div>
            {services.map((e, i) => <SingleServiceCosts key={`${e.serviceName}_${i}`} service={e} />)}

            <Button type="submit" className="self-end mt-10" label="Dalej" onClick={goNext} />

        </div>
    )
};


type FormData = {
    serviceCosts: Cost[];
};

interface SingleServiceCostsProps {
    service: Service
}

const SingleServiceCosts = ({ service }: SingleServiceCostsProps) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            serviceCosts: [{ costName: "", costCount: 0 }]
        }
    });
    const { fields, append, remove } = useFieldArray(
        {
            control,
            name: "serviceCosts"
        }
    );

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div>
            <Typography variant="h1">Podaj wszystkie koszty dla zabiegu: {service.serviceName}</Typography>
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
                                    {...register(`serviceCosts.${index}.costName`, { required: true })}
                                />
                                <input
                                    className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm col-span-3"
                                    defaultValue={`${item.costCount}`}
                                    {...register(`serviceCosts.${index}.costCount`, { required: true })}
                                />
                                <RemoveButton className="justify-self-end" onClick={() => remove(index)} />
                            </li>
                        );
                    })}
                </ul>

                {errors && errors.serviceCosts && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}

                <AddServiceButton
                    onClick={() => {
                        append({ costName: "", costCount: 0 });
                    }}
                />
                <Button type="submit" className="self-end mt-10" label="Dalej" onClick={handleSubmit(onSubmit)} />

            </form>
        </div>
    )
} 