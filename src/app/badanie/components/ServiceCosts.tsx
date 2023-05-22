import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "../../../components/button/Button";
import { Typography } from "../../../components/typography/Typography";
import { Cost, Service } from "../../../types";
import { useResearch } from "../ResearchContext";
import { AddServiceButton } from "./AddServiceButton";
import { RemoveButton } from "../../../components/button/RemoveButton";
import { useSteps } from "@/hooks/useSteps";
import { FC, useState } from "react";

export const ServiceCosts = () => {
    const { services, goBack, goNext } = useResearch()
    const [step, setStep] = useState(0)

    const goNextService = () => {
        setStep(prev => prev + 1)
    }

    const goBackService = () => {
        if (step > 0) setStep(prev => prev - 1)
    }

    return (
        <div>
            <SingleServiceCosts service={services[step]} goBack={step === 0 ? goBack : goBackService} goNext={step === services.length - 1 ? goNext : goNextService} />
        </div>
    )
};


type FormData = {
    serviceCosts: Cost[];
};

interface SingleServiceCostsProps {
    service: Service,
    goNext: () => void,
    goBack: () => void
}

const SingleServiceCosts: FC<SingleServiceCostsProps> = ({ service, goBack, goNext }) => {
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
    const { updateServiceCost } = useResearch()

    const onSubmit = (data: FormData) => {
        updateServiceCost(service.serviceName || '', data.serviceCosts)
        goNext()
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