import { Button } from "@/components/button/Button";
import { useResearch } from "../ResearchContext";
import React, { FC, PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Cost } from "@/types";


export const Summary = () => {
    const { depreciationCosts, fixedCosts, serviceCosts, services, customerCount } = useResearch()

    return (
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
            </div>
            <Button className="mt-10" label="generuj raport" />
        </div>
    )
};

interface ChartProps {
    costs: Cost[]
}

const Chart: FC<ChartProps> = ({ costs }) => {
    const data = costs.map(e => ({ name: e.costName, value: parseInt(e.costCount?.toString() || '') }))
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <PieChart width={400} height={200} >
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}