'use client'
import { Button } from "@/components/button/Button"
import { calculeteServiceCost } from "@/utils/calculeteServiceCost"
import { Typography } from "@/components/typography/Typography"
import { ServiceDetails } from "@/types"
import { FC, useState } from "react"
import { Chart } from "@/components/chart/Chart"
import { Report } from "../badanie/components/Report"

export default function Page() {
    const customerCount = 100
    const services = [{ serviceName: 'Usługa A' }, { serviceName: 'Usługa B' }]
    const fixedCosts = [
        { costName: 'Koszt stały A', costCount: 1000 },
        { costName: 'Koszt stały B', costCount: 1000 },
        { costName: 'Koszt stały C', costCount: 1000 }
    ]
    const depreciationCosts = [
        { costName: 'Koszt zmienny A', costCount: 1000, servicesCount: 10 },
        { costName: 'Koszt zmienny B', costCount: 1000, servicesCount: 10 },
        { costName: 'Koszt zmienny C', costCount: 1000, servicesCount: 10 }
    ]
    const serviceCosts = [
        {
            serviceName: 'Usługa A', costs: [
                { costName: 'Koszt Usługi A', costCount: 500, servicesCount: 100, productCountPerService: 5 },
                { costName: '2. Koszt Usługi A', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '3. Koszt Usługi A', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '4. Koszt Usługi A', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '5. Koszt Usługi A', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
            ]
        },
        {
            serviceName: 'Usługa B', costs: [
                { costName: 'Koszt Usługi B', costCount: 500, servicesCount: 100, productCountPerService: 5 },
                { costName: '2. Koszt Usługi B', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '3. Koszt Usługi B', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '4. Koszt Usługi B', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
                { costName: '5. Koszt Usługi B', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
            ]
        }
    ]

    const [showReport, setShowReport] = useState(false)

    const servicesToReport: ServiceDetails[] = [
        {
            serviceName: services[0].serviceName,
            customerCount,
            depreciationCosts,
            fixedCosts,
            serviceCosts: serviceCosts[0].costs
        },
        {
            serviceName: services[1].serviceName,
            customerCount,
            depreciationCosts,
            fixedCosts,
            serviceCosts: serviceCosts[1].costs
        },
    ]

    if (showReport) return <Report services={servicesToReport} />

    return (
        <div className="flex w-full h-full items-center flex-col justify-center">
            <div className="flex flex-col items-center gap-2">
                <Typography variant="h1">Podsumowanie</Typography>
                <div className="flex gap-2">
                    <Typography variant="body2">Liczba klientow:</Typography>
                    <Typography variant="body2">{customerCount}</Typography>
                </div>
                <div className="flex gap-2">
                    <Typography variant="body2">Usługi:</Typography>
                    {
                        services.map(e => <Typography variant="body2" key={e.serviceName}>{e.serviceName}</Typography>)
                    }
                </div>
                <Typography variant="h3" className="mt-10">Koszty stałe:</Typography>
                <div className="grid grid-cols-12 gap-2">
                    <p className="text-xs col-span-8">Nazwa</p>
                    <p className="text-xs col-span-4">Koszt</p>
                    {
                        fixedCosts.map(e =>
                            <>
                                <Typography variant="body2" className="col-span-8">{e.costName}</Typography>
                                <Typography variant="body2" className="col-span-4">{e.costCount}</Typography>
                            </>
                        )
                    }
                </div>
                <Typography variant="h3" className="mt-10">Koszty amortyzacji:</Typography>
                <div className="grid grid-cols-12 gap-2">
                    <p className="text-xs col-span-6">Nazwa</p>
                    <p className="text-xs col-span-3">Koszt</p>
                    <p className="text-xs col-span-3">Ilość sztuk</p>
                    {
                        depreciationCosts.map(e =>
                            <>
                                <Typography variant="body2" className="col-span-6">{e.costName}</Typography>
                                <Typography variant="body2" className="col-span-3">{e.costCount}</Typography>
                                <Typography variant="body2" className="col-span-3">{e.servicesCount}</Typography>
                            </>
                        )
                    }
                </div>
                <Typography variant="body2" className="mt-10">Koszty usług:</Typography>
                {
                    serviceCosts.map(e =>
                        <div key={e.serviceName} className="flex flex-col gap-2">
                            <Typography variant="h3">{e.serviceName}</Typography>
                            <div className="grid grid-cols-12 gap-2">
                                <p className="text-xs col-span-5">Nazwa</p>
                                <p className="text-xs col-span-3">Koszt</p>
                                <p className="text-xs col-span-2">Ilość sztuk</p>
                                <p className="text-xs col-span-2">Ilość sztuk do zabiegu</p>
                            </div>
                            {e.costs.map(e =>
                                <div className="grid grid-cols-12 gap-2" key={e.costName}>
                                    <Typography variant="body2" className="col-span-5">{e.costName}</Typography>
                                    <Typography variant="body2" className="col-span-3">{e.costCount}</Typography>
                                    <Typography variant="body2" className="col-span-2">{e.servicesCount}</Typography>
                                    <Typography variant="body2" className="col-span-2">{e.productCountPerService}</Typography>
                                </div>
                            )}
                        </div>
                    )
                }
                <Button className="mt-10" label="generuj raport" onClick={() => setShowReport(true)} />
            </div>
        </div>
    )
}