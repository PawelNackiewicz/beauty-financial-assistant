import { FC } from "react";
import Image from "next/image";
import { Typography } from "../../../components/typography/Typography";

interface SideBoxProps {
    text: string
}

export const SideBox: FC<SideBoxProps> = ({ text }) => {
    return (
        <div className="flex w-full items-center flex-col p-10">
            <Typography variant="body1" className="text-center">{text}</Typography>
            <Image src='/panda.svg' alt="panda" width={400} height={400} />
        </div>
    )
};