"use client";
import BreadcrumbsComponent from '@/components/bread-crumbs'
import OverviewCardComponent from '@/components/overview-card-component';
import TabsComponent from '@/components/tabs-component';
import { usePathname } from 'next/navigation';
import React from 'react'
import { columns, data, rows } from '../fake-data';

const FeaturePage = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent items={[{ name: "Visualizações de recursos", href: "/features" }, { name: pathname.split("/")[2], href: "/" }]} />
      <TabsComponent items={[{ name: "Visão Geral", key: "general", content: <OverviewCardComponent columns={columns} rows={rows} data={data} /> }, { name: "Pipeline", key: "pipeline", content: <div>Conterá um data flow como no exemplo da primeira pagina</div> }, { name: "Materialização", key: "materialization", content: <div>Visualizações de recursos</div> }]} />
    </section>
  )
}

export default FeaturePage