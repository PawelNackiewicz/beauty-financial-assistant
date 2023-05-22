'use client'
import { Welcome } from "./components/Welcome";
import { AllServices } from "./components/AllServices";
import { CustomerCount } from "./components/CustomerCount";
import { BackButton } from "../../components/button/BackButton";
import { FixedCosts } from "./components/FixedCosts";
import { ResearchProvider, useResearch } from "./ResearchContext";
import { DepreciationCosts } from "./components/DepreciationCosts";
import { ServiceCosts } from "./components/ServiceCosts";
import { Summary } from "./components/Summary";

export default function Page() {
    return (
        <ResearchProvider>
            <ReaserchWrapper />
        </ResearchProvider>
    )
}

const steps = {
    1: Welcome,
    2: AllServices,
    3: CustomerCount,
    4: FixedCosts,
    5: DepreciationCosts,
    6: ServiceCosts,
    7: Summary
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