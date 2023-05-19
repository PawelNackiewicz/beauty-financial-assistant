import { Cost, Service } from '@/types';
import React, { SetStateAction, createContext, useContext, useState } from 'react';

interface ResearchContextType {
    services: Service[],
    setServices: React.Dispatch<SetStateAction<Service[]>>,
    customerCount: number | undefined,
    setCustomerCount: React.Dispatch<SetStateAction<number | undefined>>
    fixedCosts: Cost[],
    setFixedCosts: React.Dispatch<SetStateAction<Cost[]>>
    depreciationCosts: Cost[],
    setDepreciationCosts: React.Dispatch<SetStateAction<Cost[]>>

    currentStep: number,
    goNext: () => void,
    goBack: () => void
}

const ResearchContext = createContext<ResearchContextType | undefined>(undefined)

export function ResearchProvider({
    children
}: { children: React.ReactNode }) {
    const [services, setServices] = useState<Service[]>([])
    const [currentStep, setCurrentStep] = useState(1)
    const [customerCount, setCustomerCount] = useState<number | undefined>(undefined)
    const [fixedCosts, setFixedCosts] = useState<Cost[]>([])
    const [depreciationCosts, setDepreciationCosts] = useState<Cost[]>([])

    const goNext = () => {
        setCurrentStep(currentStep + 1)
    }

    const goBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    return (
        <ResearchContext.Provider
            value={{
                services,
                setServices,
                customerCount,
                setCustomerCount,
                fixedCosts,
                setFixedCosts,
                depreciationCosts,
                setDepreciationCosts,

                currentStep,
                goNext,
                goBack
            }}
        >
            {children}
        </ResearchContext.Provider>
    )
}

export function useResearch() {
    const context = useContext(ResearchContext)
    if (!context)
        throw new Error(
            'useResearch must be used within the ResearchProvider'
        )
    return context
}