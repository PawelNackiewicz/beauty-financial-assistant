import { ButtonHTMLAttributes, FC } from 'react';

interface RemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void
}

export const RemoveButton: FC<RemoveButtonProps> = ({ onClick, ...rest }) => {
    return <button onClick={onClick} {...rest}>
        <MinusIcon />
    </button>
};

const MinusIcon = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 13.75V16.25H21.25V13.75H8.75ZM15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25Z" fill="#333333" />
        </svg>
    )
}