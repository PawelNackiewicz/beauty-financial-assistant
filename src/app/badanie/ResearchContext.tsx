import { Cost, Service, ServiceCost } from '@/types';
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
    serviceCosts: ServiceCost[],
    updateServiceCost: (serviceName: string, costs: Cost[]) => void,

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
    const [serviceCosts, setServiceCosts] = useState<ServiceCost[]>([])

    const goNext = () => {
        setCurrentStep(currentStep + 1)
    }

    const goBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    const updateServiceCost = (serviceName: string, costs: Cost[]) => {
        const updatedData = [...serviceCosts]
        const index = updatedData.findIndex(e => e.serviceName === serviceName)
        if (index !== -1) {
            updatedData[index] = { ...updatedData[index], costs }
            setServiceCosts(updatedData)
        }
        setServiceCosts([...serviceCosts, { serviceName, costs }])
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
                serviceCosts,
                updateServiceCost,

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