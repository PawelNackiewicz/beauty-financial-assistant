'use client'
import { Button } from "@/components/button/Button";
import { useResearch } from "../ResearchContext";
import React from 'react';
import { Typography } from "@/components/typography/Typography";


export const Summary = () => {
    const { depreciationCosts, fixedCosts, serviceCosts, services, customerCount } = useResearch()

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
                <Button className="mt-10" label="Generuj raport" />
            </div>
        </div>
    )
}