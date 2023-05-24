import { Chart } from "@/components/chart/Chart"
import { Typography } from "@/components/typography/Typography"
import { ServiceDetails } from "@/types"
import { calculeteServiceCost } from "@/utils/calculeteServiceCost"
import { FC } from "react"

interface ReportProps {
    services: ServiceDetails[]
}

export const Report: FC<ReportProps> = ({ services }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Typography variant="h1">Raport końcowy</Typography>
            {
                services.map(service => <ReportSection service={service} />)
            }
        </div>
    )
}

interface ReportSectionProps {
    service: ServiceDetails
}

const ReportSection: FC<ReportSectionProps> = ({ service }) => {
    const { depreciationCost, fixedCost, serviceCost, total } = calculeteServiceCost(service)

    return (
        <div className="mt-10 border-t pt-2">
            <Typography variant="h3">{service.serviceName} - Koszt zabiegu: {total} zł</Typography>
            <div className="w-96 h-96">
                <Typography variant="body1">Koszty stałe: {fixedCost} zł</Typography>
                <Typography variant="body1">Koszty amortyzacji: {depreciationCost} zł</Typography>
                <Typography variant="body1">Koszty zabiegu: {serviceCost} zł</Typography>
                <Chart items={[
                    {
                        name: 'Koszty amortyzacji', value: depreciationCost
                    },
                    {
                        name: 'Koszty stale', value: fixedCost
                    },
                    {
                        name: 'Koszty produktów', value: serviceCost
                    },
                ]}
                />
            </div>
        </div>
    )
}