"use client";
import BreadcrumbsComponent from '@/components/bread-crumbs'
import OverviewCardComponent from '@/components/overview-card-component';
import TabsComponent from '@/components/tabs-component';
import { usePathname } from 'next/navigation';
import React from 'react'
import { columns, data, featureViewColumns, featureViewRows, rows } from '../fake-data';
import TableComponent from '@/components/table-component';
import { Pyramid } from 'lucide-react';

const TransformationPage = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent items={[{ name: "Transformações", href: "/transformations" }, { name: pathname.split("/")[2], href: "/" }]} />
      <TabsComponent items={[{ name: "Visão Geral", key: "general", content: <OverviewCardComponent columns={columns} rows={rows} data={data} /> }, { name: "Visualizações de recursos", key: "resources", content:  <TableComponent rows={featureViewRows} columns={featureViewColumns} placeholder='Pesquisar entidades' icon={<Pyramid size={15} />} />}]} />
    </section>
  )
}

export default TransformationPage