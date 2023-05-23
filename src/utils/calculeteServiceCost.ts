import { Cost } from "@/types"

export const calculeteServiceCost = (serviceCosts: Cost[], depreciationCosts: Cost[], fixedCosts: Cost[], customerCount: number, serviceName: string) => {
    let total = 0
    fixedCosts.forEach(e => {
        if (e.costCount) total += e.costCount / customerCount
    })
    depreciationCosts.forEach(e => {
        if (e.costCount && e.servicesCount) total += e.costCount / e.servicesCount
    })
    serviceCosts.forEach(e => {
        if (e.costCount && e.servicesCount && e.productCountPerService) total += (e.costCount / e.servicesCount) * e.productCountPerService
    })
    return total
}