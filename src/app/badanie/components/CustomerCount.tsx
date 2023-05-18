'use-client'
import { useForm } from "react-hook-form";
import { Button } from "@/components/button/Button";
import { Input } from "@/components/form/input/Input";
import { Typography } from "@/components/typography/Typography"

export interface FormInputs {
    customerCount?: number
};

export const CustomerCount = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };
    return (
        <div className="max-w-xl">
            <Typography variant="h1">Podaj średnią ilość klientów</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <Input fieldId="customerCount" type="number" label="Liczba klientów" register={register} required errors={errors.customerCount} />
            </form>
        </div>
    )
};