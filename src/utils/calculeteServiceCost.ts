import { ServiceDetails } from "@/types"

export const calculeteServiceCost = ({ serviceCosts, depreciationCosts, fixedCosts, customerCount }: ServiceDetails) => {
    const fixedCost = fixedCosts.reduce((acc, e) => {
        if (e.costCount) acc += e.costCount / customerCount
        return acc
    }, 0)
    const depreciationCost = depreciationCosts.reduce((acc, e) => {
        if (e.costCount && e.servicesCount) acc += e.costCount / e.servicesCount
        return acc
    }, 0)
    const serviceCost = serviceCosts.reduce((acc, e) => {
        if (e.costCount && e.servicesCount && e.productCountPerService) acc += (e.costCount / e.servicesCount) * e.productCountPerService
        return acc
    }, 0)
    const total = fixedCost + depreciationCost + serviceCost
    return {
        fixedCost,
        depreciationCost,
        serviceCost,
        total
    }
}