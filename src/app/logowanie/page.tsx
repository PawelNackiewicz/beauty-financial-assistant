'use client'
import { Button } from "@/components/button/Button";
import { Input } from "@/components/form/input/Input";
import { Typography } from "@/components/typography/Typography"
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export interface LoginFormInputs {
    login?: string
    password?: string
};

export default function Page() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormInputs>();
    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);
        signIn()
    };

    return (
        <div className="max-w-xl">
            <Typography variant="body2" className="text-center">Zaloguj się</Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <Input fieldId="login" label="Login" register={register} required errors={errors.login} />
                <Input fieldId="password" label="Hasło" register={register} type="password" required errors={errors.password} />
                <Button type="submit" label="Zaloguj" />
            </form>
        </div>
    )
}
