import { FC } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ChartProps {
    items: { name: string, value: number }[]
}

export const Chart: FC<ChartProps> = ({ items }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={200} >
                <Pie
                    data={items}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                >
                    {items.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}