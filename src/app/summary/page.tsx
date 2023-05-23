import { Button } from "@/components/button/Button"
import { Chart } from "../badanie/components/Summary"
import { calculeteServiceCost } from "@/utils/calculeteServiceCost"

export default function Page() {
    const customerCount = 100
    const services = [{ serviceName: 'Usługa A' }]
    const fixedCosts = [{ costName: 'Koszt stały A', costCount: 1000 }]
    const depreciationCosts = [{ costName: 'Koszt zmienny A', costCount: 1000, servicesCount: 10 }]
    const serviceCosts = [
        {
            serviceName: 'Usługa A', costs: [
                { costName: 'Koszt Usługi A', costCount: 500, servicesCount: 100, productCountPerService: 5 },
                { costName: '2. Koszt Usługi A', costCount: 1000, servicesCount: 10, productCountPerService: 1 },
            ]
        }
    ]

    return (
        <div className="flex w-full h-full items-center flex-col justify-center">
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                    <p>Liczba klientow</p>
                    <p>{customerCount}</p>
                </div>
                <div className="flex gap-2">
                    <p>Usługi</p>
                    {
                        services.map(e => <p key={e.serviceName}>{e.serviceName}</p>)
                    }
                </div>
                <div className="flex gap-2">
                    <p>Koszty stałe</p>
                    {
                        fixedCosts.map(e => <div key={e.costName} className="flex gap-2">
                            <p>{e.costName}</p>
                            <p>{e.costCount}</p>
                        </div>)
                    }
                </div>
                <div className="flex gap-2">
                    <p>Koszty amortyzacji</p>
                    {
                        depreciationCosts.map(e => <div key={e.costName} className="flex gap-2">
                            <p>{e.costName}</p>
                            <p>{e.costCount}</p>
                        </div>)
                    }
                </div>
                <div className="flex gap-2">
                    <p>Koszty usług</p>
                    {
                        serviceCosts.map(e => <div key={e.serviceName} className="flex flex-col gap-2">
                            <p>{e.serviceName}</p>
                            {e.costs.map(e => <div className="flex gap-2" key={e.costName}>
                                <p>{e.costName}</p>
                                <p>{e.costCount}</p>
                            </div>)}
                            <Chart costs={e.costs} />
                        </div>)
                    }
                    <p className="bold">Koszt: {calculeteServiceCost(serviceCosts[0].costs, depreciationCosts, fixedCosts, customerCount, services[0].serviceName)}</p>
                </div>
                <Button className="mt-10" label="generuj raport" />
            </div>
        </div>
    )
}