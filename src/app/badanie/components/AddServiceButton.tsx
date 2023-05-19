import React, { FC } from 'react';
import { Button } from '../../../components/button/Button';

interface AddServiceButtonProps {
    onClick: () => void
}

export const AddServiceButton: FC<AddServiceButtonProps> = ({ onClick }) => {
    return (
        <Button
            label="Dodaj usługe"
            icon={<PlusIcon />}
            variant="outlined"
            className="p-0 m-0 border-0"
            onClick={onClick}
        />
    )
};


const PlusIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1665 15.8333V10.8333H4.1665V9.16663H9.1665V4.16663H10.8332V9.16663H15.8332V10.8333H10.8332V15.8333H9.1665Z" fill="#034C8C" />
        </svg>

    )
}