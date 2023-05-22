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
import { SideBox } from "./components/SideBox";

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

const sideBoxLabels = [
    'Siema',
    'Wypisz wszystkie usługi jakie masz w salonie, dla których chcesz wykonać badanie kosztów',
    'Policz ile klientów miałeś przez ostatni czas (np rok) i podziel przez liczbę miesięcy. Wprowadź średnią ilość klientów w miesiącu. Jeśli chcesz obliczyć dokładne koszty z ostatniego miesiąca wprowadź klientów z ostatniego miesiąca',
    'Koszty stałe to wszystkie koszty, które ponosić opłacając np najem lokalu, ZUS etc',
    'Koszty amortyzacji to...',
    'Koszty usługi to...',
    'Gratulacje, to było ostatnie pytanie!'
]

const ReaserchWrapper = () => {
    const { currentStep, goBack } = useResearch();
    const CurrentStep = steps[currentStep as keyof typeof steps]
    return (
        <div className="flex w-full h-full items-center">
            <div className="basis-2/5">
                <SideBox text={sideBoxLabels[currentStep - 1]} />
            </div>
            <div className="flex flex-col basis-3/5 items-center bg-gray-100 h-full justify-center">
                <div>
                    {currentStep > 1 && <BackButton onClick={goBack} />}
                    <div className="my-10">
                        <CurrentStep />
                    </div>
                </div>
            </div>
        </div>
    )
}