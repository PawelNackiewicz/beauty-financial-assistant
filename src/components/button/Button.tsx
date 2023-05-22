'use client'
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    variant?: 'contained' | 'outlined'
    onClick?: () => void,
    className?: string,
    icon?: ReactNode
}

export const Button: FC<ButtonProps> = ({
    color = 'primary',
    label,
    variant = 'contained',
    onClick,
    className,
    icon,
    ...rest
}) => {
    return (
        <button type='button' className={twMerge(clsx('flex gap-2 items-center rounded-lg px-6 py-2 hover:bg-accent active:bg-accent focus:outline-none focus:ring focus:ring-accent transition ease-in-out duration-500', `${variant === 'contained' ? `bg-primary text-white ` : `bg-transparent border-2 border-primary text-primary`}`, className))} onClick={onClick} {...rest}>
            {label}
            {icon}
        </button>
    )
};