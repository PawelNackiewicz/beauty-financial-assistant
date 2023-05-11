import { Typography } from "../../../components/typography/Typography";
import Image from "next/image";

export const Welcome = () => {
    return (
        <>
            <Typography variant="body1">Cześć jestem Alex i poprowadzę Cię przez całe badanie.</Typography>
            <Image src='/panda.svg' alt="panda" width={400} height={400} />
        </>
    )
};