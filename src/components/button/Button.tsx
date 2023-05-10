'use client'
import React, { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'primary' | 'secondary' | 'success' | 'error',
    label: string,
    variant?: 'contained' | 'outlined'
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    color = 'primary',
    label,
    variant = 'contained',
    onClick,
    ...rest
}) => {
    return (
        <button type='button' className={clsx('rounded-lg px-6 py-2', `${variant === 'contained' ? `bg-${color} text-white` : `bg-transparent border-2 border-${color} text-${color}`}`)} onClick={onClick} {...rest}>
            {label}
        </button>
    )
};