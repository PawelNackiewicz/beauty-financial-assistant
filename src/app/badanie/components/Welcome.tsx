import { Button } from "../../../components/button/Button";
import { Typography } from "../../../components/typography/Typography";
import { useResearch } from "../ResearchContext";

export const Welcome = () => {
    const { goNext } = useResearch()

    return (
        <div className="flex flex-col items-end">
            <Typography variant="body1">Przygotuj sie do badania</Typography>
            <Button className="self-end mt-10" label="Dalej" onClick={goNext} />
        </div>
    )
};