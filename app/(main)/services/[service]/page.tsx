"use client";
import { usePathname } from "next/navigation";
import React from "react";

import { columns, data, rows } from "../fake-data";

import ServiceMaterializationCards from "./components/materialization-cards";

import BreadcrumbsComponent from "@/components/bread-crumbs";
import OverviewCardComponent from "@/components/overview-card-component";
import TabsComponent from "@/components/tabs-component";
import CardCharts from "@/components/card-charts";
import GenericLineChart from "@/components/charts/line-charts";

const ServicePage = () => {
  const pathname = usePathname();
  const queryLatencyData = React.useMemo(
    () => [
      {
        label: "50.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 4 },
          { x: new Date("2024-07-19T15:30:00"), y: 5 },
          { x: new Date("2024-07-19T15:40:00"), y: 6 },
          { x: new Date("2024-07-19T15:50:00"), y: 4 },
          { x: new Date("2024-07-19T16:00:00"), y: 5 },
          // Add more data points as needed
        ],
      },
      {
        label: "90.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 6 },
          { x: new Date("2024-07-19T15:30:00"), y: 7 },
          { x: new Date("2024-07-19T15:40:00"), y: 8 },
          { x: new Date("2024-07-19T15:50:00"), y: 7 },
          { x: new Date("2024-07-19T16:00:00"), y: 6 },
          // Add more data points as needed
        ],
      },
      {
        label: "95.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 8 },
          { x: new Date("2024-07-19T15:30:00"), y: 9 },
          { x: new Date("2024-07-19T15:40:00"), y: 10 },
          { x: new Date("2024-07-19T15:50:00"), y: 9 },
          { x: new Date("2024-07-19T16:00:00"), y: 8 },
          // Add more data points as needed
        ],
      },
      {
        label: "99.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 12 },
          { x: new Date("2024-07-19T15:30:00"), y: 14 },
          { x: new Date("2024-07-19T15:40:00"), y: 16 },
          { x: new Date("2024-07-19T15:50:00"), y: 15 },
          { x: new Date("2024-07-19T16:00:00"), y: 14 },
          // Add more data points as needed
        ],
      },
    ],
    [],
  );

  const rowCountData = React.useMemo(
    () => [
      {
        label: "50.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.5 },
          { x: new Date("2024-07-19T15:30:00"), y: 0.6 },
          { x: new Date("2024-07-19T15:40:00"), y: 0.5 },
          { x: new Date("2024-07-19T15:50:00"), y: 0.7 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.6 },
          // Add more data points as needed
        ],
      },
      {
        label: "90.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.7 },
          { x: new Date("2024-07-19T15:30:00"), y: 0.8 },
          { x: new Date("2024-07-19T15:40:00"), y: 0.7 },
          { x: new Date("2024-07-19T15:50:00"), y: 0.9 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.8 },
          // Add more data points as needed
        ],
      },
      {
        label: "95.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.85 },
          { x: new Date("2024-07-19T15:30:00"), y: 0.87 },
          { x: new Date("2024-07-19T15:40:00"), y: 0.85 },
          { x: new Date("2024-07-19T15:50:00"), y: 0.9 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.87 },
          // Add more data points as needed
        ],
      },
      {
        label: "99.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.9 },
          { x: new Date("2024-07-19T15:30:00"), y: 0.95 },
          { x: new Date("2024-07-19T15:40:00"), y: 0.92 },
          { x: new Date("2024-07-19T15:50:00"), y: 0.93 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.95 },
          // Add more data points as needed
        ],
      },
    ],
    [],
  );

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent
        items={[
          { name: "Serviços de recurso", href: "/services" },
          { name: pathname.split("/")[2], href: "/" },
        ]}
      />
      <TabsComponent
        items={[
          {
            name: "Visão Geral",
            key: "general",
            content: (
              <OverviewCardComponent
                columns={columns}
                data={data}
                rows={rows}
              />
            ),
          },
          {
            name: "Pipeline",
            key: "pipeline",
            content: (
              <div>Conterá um data flow como no exemplo da primeira pagina</div>
            ),
          },
          {
            name: "Materialização",
            key: "materialization",
            content: <ServiceMaterializationCards />,
          },
          {
            name: "Monitoramento",
            key: "monitoring",
            content: (
              <>
                <CardCharts title="get-features">
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Consultas de Recursos Online"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="Taxa de Sucesso Online"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
                    yLabel="Count"
                  />
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Distribuição de Latência de Consulta Online"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} ms`}
                    yLabel="time (ms)"
                  />
                </CardCharts>
                <CardCharts title="Online Store Latency">
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Latência do Banco de Dados"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} ms`}
                    yLabel="Latency (ms)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="Tamanho da resposta do Banco de Dados"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d}`}
                    yLabel="Count"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="QPS por visualização de recurso do Banco de Dados"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d}`}
                    yLabel="Count"
                  />
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Contagem de linhas do Banco de Dados"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} ms`}
                    yLabel="Latency (ms)"
                  />
                </CardCharts>
              </>
            ),
          },
          {
            name: "Dataset",
            key: "dataset",
            content: <div>Conteudo do dataset</div>,
          },
        ]}
      />
    </section>
  );
};

export default ServicePage;
