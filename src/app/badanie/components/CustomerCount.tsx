'use-client'
import { useForm } from "react-hook-form";
import { Input } from "../../../components/form/input/Input";
import { Typography } from "../../../components/typography/Typography"
import { Button } from "../../../components/button/Button";
import { useResearch } from "../ResearchContext";

export interface FormInputs {
    customerCount?: number
};

export const CustomerCount = () => {
    const { goNext, setCustomerCount } = useResearch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => {
        setCustomerCount(data.customerCount)
        goNext()
    };
    return (
        <div className="max-w-xl">
            <Typography variant="h1">Podaj średnią ilość klientów</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <Input fieldId="customerCount" type="number" label="Liczba klientów" register={register} required errors={errors.customerCount} />
                <Button type="submit" className="self-end mt-10" label="Dalej" onClick={handleSubmit(onSubmit)} />
            </form>
        </div>
    )
};