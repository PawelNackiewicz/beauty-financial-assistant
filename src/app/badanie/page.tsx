'use client'
import { Button } from "../..//components/button/Button";
import { Welcome } from "./components/Welcome";
import { AllServices } from "./components/AllServices";
import { Sec } from "./components/Sec";
import { BackButton } from "@/components/button/BackButton";
import { useSteps } from "../../hooks/useSteps";

export default function Page() {
    return (
        <ReaserchWrapper />
    )
}

const steps = [
    { name: 'Step1', component: <Welcome /> },
    { name: 'Step2', component: <AllServices /> },
    { name: 'Step3', component: <Sec /> },
] as const;

const ReaserchWrapper = () => {
    const { currentStep, handlePrevStep, handleNextStep, currentStepIndex } = useSteps(steps);
    return (
        <div className="flex flex-col">
            {currentStepIndex > 0 && <BackButton onClick={handlePrevStep} />}
            {currentStep.component}
            <Button className="self-end" label="Dalej" onClick={handleNextStep} />
        </div>
    )
}