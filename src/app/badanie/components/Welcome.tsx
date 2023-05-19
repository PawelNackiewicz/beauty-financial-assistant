import { Button } from "../../../components/button/Button";
import { Typography } from "../../../components/typography/Typography";
import Image from "next/image";
import { useResearch } from "../ResearchContext";

export const Welcome = () => {
    const { goNext } = useResearch()

    return (
        <>
            <Typography variant="body1">Cześć jestem Alex i poprowadzę Cię przez całe badanie.</Typography>
            <Image src='/panda.svg' alt="panda" width={400} height={400} />
            <Button className="self-end" label="Dalej" onClick={goNext} />
        </>
    )
};