import { useResearch } from "../ResearchContext";

export const Summary = () => {
    const { depreciationCosts, fixedCosts, serviceCosts, services, customerCount } = useResearch()

    return (
        <div>
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
                    serviceCosts.map(e => <div key={e.serviceName} className="flex gap-2">
                        <p>{e.serviceName}</p>
                        {e.costs.map(e => <div className="flex gap-2" key={e.costName}>
                            <p>{e.costName}</p>
                            <p>{e.costCount}</p>
                        </div>)}
                    </div>)
                }
            </div>
        </div>
    )
};