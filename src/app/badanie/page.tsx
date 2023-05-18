'use client'
import { Button } from "../..//components/button/Button";
import { Welcome } from "./components/Welcome";
import { AllServices } from "./components/AllServices";
import { CustomerCount } from "./components/CustomerCount";
import { BackButton } from "../../components/button/BackButton";
import { useSteps } from "../../hooks/useSteps";
import { FixedCosts } from "./components/FixedCosts";

export default function Page() {
    return (
        <ReaserchWrapper />
    )
}

const steps = [
    { name: 'Step1', component: <Welcome /> },
    { name: 'Step2', component: <AllServices /> },
    { name: 'Step3', component: <CustomerCount /> },
    { name: 'Step4', component: <FixedCosts /> },
    // { name: 'Step5', component: <DepreciationCosts /> }, // koszty amortyzacji
    // { name: 'Step6', component: <MaterialCosts /> }, // koszty materiałow kazdego zabiegu
    // { name: 'Step7', component: <TrainingCosts /> }, // koszty szkolen
    // { name: 'Step8', component: <End /> }, // koniec
] as const;

const ReaserchWrapper = () => {
    const { currentStep, handlePrevStep, handleNextStep, currentStepIndex } = useSteps(steps);
    return (
        <div className="flex flex-col">
            {currentStepIndex > 0 && <BackButton onClick={handlePrevStep} />}
            <div className="my-10">
                {currentStep.component}
            </div>
            <Button className="self-end" label="Dalej" onClick={handleNextStep} />
        </div>
    )
}