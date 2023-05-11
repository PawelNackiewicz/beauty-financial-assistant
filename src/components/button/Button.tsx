'use client'
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

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
        <button type='button' className={clsx(className, 'flex gap-2 items-center rounded-lg px-6 py-2', `${variant === 'contained' ? `bg-primary text-white` : `bg-transparent border-2 border-primary text-primary`}`)} onClick={onClick} {...rest}>
            {label}
            {icon}
        </button>
    )
};