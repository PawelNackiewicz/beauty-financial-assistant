import { ButtonHTMLAttributes, FC } from 'react';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
}

export const BackButton: FC<BackButtonProps> = ({ onClick, ...rest }) => {
    return <button className='flex gap-2 items-center' onClick={onClick} {...rest}>
        <LeftArrow />
        <p>Cofnij</p>
    </button>
};

const LeftArrow = () => {
    return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM20 7L1 7V9L20 9V7Z" fill="#333333" />
        </svg>
    )
}