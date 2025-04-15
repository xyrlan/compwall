"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Layers3 } from "lucide-react"
import { columns, data, rows, serviceColumns, serviceRows } from "../fake-data";
import MaterializationCards from "./components/materialization-cards";
import BreadcrumbsComponent from "@/components/bread-crumbs";
import OverviewCardComponent from "@/components/overview-card-component";
import TabsComponent from "@/components/tabs-component";
import TableComponent from "@/components/table-component";
import CardCharts from "@/components/card-charts";
import GenericLineChart from "@/components/charts/line-charts";

const FeaturePage = () => {
  const pathname = usePathname();
  const writeRateData = React.useMemo(
    () => [
      {
        label: "Online Store Write Rate",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0 },
          { x: new Date("2024-07-19T15:23:00"), y: 0 },
        ],
      },
    ],
    [],
  );

  const featureFreshnessData = React.useMemo(
    () => [
      {
        label: "Online Serving Feature Freshness",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 3600 },
          { x: new Date("2024-07-19T16:00:00"), y: 7200 },
          { x: new Date("2024-07-19T20:00:00"), y: 86400 },
          { x: new Date("2024-07-19T22:00:00"), y: 0 },
          { x: new Date("2024-07-20T06:00:00"), y: 43200 },
          { x: new Date("2024-07-20T14:00:00"), y: 86400 },
        ],
      },
    ],
    [],
  );

  const queryLatencyData = React.useMemo(
    () => [
      {
        label: "50.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 2 },
          { x: new Date("2024-07-19T16:00:00"), y: 3 },
          // ... add more data points
        ],
      },
      {
        label: "90.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 6 },
          { x: new Date("2024-07-19T16:00:00"), y: 7 },
          // ... add more data points
        ],
      },
      {
        label: "95.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 8 },
          { x: new Date("2024-07-19T16:00:00"), y: 9 },
          // ... add more data points
        ],
      },
      {
        label: "99.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 12 },
          { x: new Date("2024-07-19T16:00:00"), y: 14 },
          // ... add more data points
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
          { x: new Date("2024-07-19T16:00:00"), y: 0.6 },
          // ... add more data points
        ],
      },
      {
        label: "90.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.7 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.8 },
          // ... add more data points
        ],
      },
      {
        label: "95.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.85 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.87 },
          // ... add more data points
        ],
      },
      {
        label: "99.0 percentile",
        data: [
          { x: new Date("2024-07-19T15:22:00"), y: 0.9 },
          { x: new Date("2024-07-19T16:00:00"), y: 0.95 },
          // ... add more data points
        ],
      },
    ],
    [],
  );

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent
        items={[
          { name: "Visualizações de recursos", href: "/features" },
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
            content: <MaterializationCards />,
          },
          {
            name: "Serviços de recurso",
            key: "services",
            content: (
              <TableComponent
                columns={serviceColumns}
                icon={<Layers3 size={15} />}
                placeholder="Pesquisar serviços"
                rows={serviceRows}
              />
            ),
          },
          {
            name: "Monitoramento",
            key: "monitoring",
            content: (
              <>
                <CardCharts title="Servindo">
                  <GenericLineChart
                    data={writeRateData}
                    title="Online Store Write Rate"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} wps`}
                    yLabel="Write per Second (wps)"
                  />
                  <GenericLineChart
                    data={featureFreshnessData}
                    title="Online Serving Feature Freshness"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
                    yLabel="Freshness"
                  />
                </CardCharts>
                <CardCharts title="Metricas do NoSQL(HBase)">
                  <GenericLineChart
                    data={queryLatencyData}
                    title="NoSQL Serving Query Latency (HBase)"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} ms`}
                    yLabel="Latency (ms)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="NoSQL Row Count (HBase)"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d}`}
                    yLabel="Count"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="Stream Messaging"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d}`}
                    yLabel="Count"
                  />
                </CardCharts>
              </>
            ),
          },
        ]}
      />
    </section>
  );
};

export default FeaturePage;
