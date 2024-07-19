"use client";
import BreadcrumbsComponent from '@/components/bread-crumbs'
import OverviewCardComponent from '@/components/overview-card-component';
import TabsComponent from '@/components/tabs-component';
import { usePathname } from 'next/navigation';
import React from 'react'
import { columns, data, materializationData, rows, serviceColumns, serviceRows } from '../fake-data';
import MaterializationCards from './components/materialization-cards';
import TableComponent from '@/components/table-component';
import { Layers3 } from 'lucide-react';
import CardCharts from '@/components/card-charts';
import GenericLineChart from '@/components/charts/line-charts';

const FeaturePage = () => {
  const pathname = usePathname();
  const writeRateData = React.useMemo(
    () => [
      {
        label: 'Online Store Write Rate',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 0 },
          { x: new Date('2024-07-19T15:23:00'), y: 0 },
        ],
      },
    ],
    []
  );

  const featureFreshnessData = React.useMemo(
    () => [
      {
        label: 'Online Serving Feature Freshness',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 3600 },
          { x: new Date('2024-07-19T16:00:00'), y: 7200 },
          { x: new Date('2024-07-19T20:00:00'), y: 86400 },
          { x: new Date('2024-07-19T22:00:00'), y: 0 },
          { x: new Date('2024-07-20T06:00:00'), y: 43200 },
          { x: new Date('2024-07-20T14:00:00'), y: 86400 },
        ],
      },
    ],
    []
  );

  const queryLatencyData = React.useMemo(
    () => [
      {
        label: '50.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 2 },
          { x: new Date('2024-07-19T16:00:00'), y: 3 },
          // ... add more data points
        ],
      },
      {
        label: '90.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 6 },
          { x: new Date('2024-07-19T16:00:00'), y: 7 },
          // ... add more data points
        ],
      },
      {
        label: '95.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 8 },
          { x: new Date('2024-07-19T16:00:00'), y: 9 },
          // ... add more data points
        ],
      },
      {
        label: '99.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 12 },
          { x: new Date('2024-07-19T16:00:00'), y: 14 },
          // ... add more data points
        ],
      },
    ],
    []
  );

  const rowCountData = React.useMemo(
    () => [
      {
        label: '50.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 0.5 },
          { x: new Date('2024-07-19T16:00:00'), y: 0.6 },
          // ... add more data points
        ],
      },
      {
        label: '90.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 0.7 },
          { x: new Date('2024-07-19T16:00:00'), y: 0.8 },
          // ... add more data points
        ],
      },
      {
        label: '95.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 0.85 },
          { x: new Date('2024-07-19T16:00:00'), y: 0.87 },
          // ... add more data points
        ],
      },
      {
        label: '99.0 percentile',
        data: [
          { x: new Date('2024-07-19T15:22:00'), y: 0.9 },
          { x: new Date('2024-07-19T16:00:00'), y: 0.95 },
          // ... add more data points
        ],
      },
    ],
    []
  );

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent items={[{ name: "Visualizações de recursos", href: "/features" }, { name: pathname.split("/")[2], href: "/" }]} />
      <TabsComponent items={[{ name: "Visão Geral", key: "general", content: <OverviewCardComponent columns={columns} rows={rows} data={data} /> }, { name: "Pipeline", key: "pipeline", content: <div>Conterá um data flow como no exemplo da primeira pagina</div> }, { name: "Materialização", key: "materialization", content: <MaterializationCards /> }, { name: "Serviços de recurso", key: "services", content: <TableComponent rows={serviceRows} columns={serviceColumns} placeholder='Pesquisar serviços' icon={<Layers3 size={15} />} /> }, {
        name: "Monitoramento", key: "monitoring", content: <><CardCharts title='Servindo'>
          <GenericLineChart
            data={writeRateData}
            title="Online Store Write Rate"
            xLabel="Time (Local)"
            yLabel="Write per Second (wps)"
            yFormat={(d) => `${d} wps`}
          />
          <GenericLineChart
            data={featureFreshnessData}
            title="Online Serving Feature Freshness"
            xLabel="Time (Local)"
            yLabel="Freshness"
            yFormat={(d) => `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`}
          />
        </CardCharts>
          <CardCharts title='Metricas do DynamoDB'>
            <GenericLineChart
              data={queryLatencyData}
              title="DynamoDB Serving Query Latency"
              xLabel="Time (Local)"
              yLabel="Latency (ms)"
              yFormat={(d) => `${d} ms`}
            />
            <GenericLineChart
              data={rowCountData}
              title="DynamoDB Row Count"
              xLabel="Time (Local)"
              yLabel="Count"
              yFormat={(d) => `${d}`}
            />
          </CardCharts>
        </>
      }]} />
    </section>
  )
}

export default FeaturePage