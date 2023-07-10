import { Chart } from "@/components/chart/Chart"
import { Typography } from "@/components/typography/Typography"
import { Cost, ServiceDetails } from "@/types"
import { calculeteServiceCost } from "@/utils/calculeteServiceCost"
import { FC, useMemo, useState } from "react"
import React from "react"
import { useTable, useSortBy } from 'react-table'
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
                <CustomerList />
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

export const CustomerList = () => {

    const data = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1',
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            //@ts-ignore
            columns,
            data,
        },
        useSortBy
    )
    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
};
