import { Button } from "../../../components/button/Button";
import { Typography } from "../../../components/typography/Typography";
import Image from "next/image";
import { useResearch } from "../ResearchContext";

export const Welcome = () => {
    const { goNext } = useResearch()

    return (
        <>
            <Typography variant="body1">Przygotuj sie do badania</Typography>
            <Button className="self-end" label="Dalej" onClick={goNext} />
        </>
    )
};