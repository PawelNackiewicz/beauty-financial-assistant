export interface Service {
    serviceName?: string
}

export interface Cost {
    costName?: string,
    costCount?: number
}

export interface ServiceCost {
    serviceName: string,
    costs: Cost[]
}