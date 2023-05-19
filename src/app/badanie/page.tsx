'use client'
import { Button } from "../..//components/button/Button";
import { Welcome } from "./components/Welcome";
import { AllServices } from "./components/AllServices";
import { CustomerCount } from "./components/CustomerCount";
import { BackButton } from "../../components/button/BackButton";
import { useSteps } from "../../hooks/useSteps";
import { FixedCosts } from "./components/FixedCosts";
import { ResearchProvider, useResearch } from "./ResearchContext";
import { DepreciationCosts } from "./components/DepreciationCosts";

export default function Page() {
    return (
        <ResearchProvider>
            <ReaserchWrapper />
        </ResearchProvider>
    )
}

const stepss = [
    { name: 'Step1', component: <Welcome /> },
    { name: 'Step2', component: <AllServices /> },
    { name: 'Step3', component: <CustomerCount /> },
    { name: 'Step4', component: <FixedCosts /> },
    // { name: 'Step5', component: <DepreciationCosts /> }, // koszty amortyzacji
    // { name: 'Step6', component: <MaterialCosts /> }, // koszty materiałow kazdego zabiegu
    // { name: 'Step7', component: <TrainingCosts /> }, // koszty szkolen
    // { name: 'Step8', component: <End /> }, // koniec
] as const;


const steps = {
    1: Welcome,
    2: AllServices,
    3: CustomerCount,
    4: FixedCosts,
    5: DepreciationCosts
}

const ReaserchWrapper = () => {
    const { currentStep, goBack } = useResearch();
    const CurrentStep = steps[currentStep as keyof typeof steps]
    return (
        <div className="flex flex-col">
            {currentStep > 0 && <BackButton onClick={goBack} />}
            <div className="my-10">
                <CurrentStep />
            </div>
        </div>
    )
}