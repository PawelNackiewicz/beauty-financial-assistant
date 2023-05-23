export interface Service {
    serviceName?: string
}

export interface Cost {
    costName?: string,
    costCount?: number,
    servicesCount?: number,
    productCountPerService?: number
}

export interface ServiceCost {
    serviceName: string,
    costs: Cost[]
}