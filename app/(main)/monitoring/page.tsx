"use client";
import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

import { subtitle } from "@/components/primitives";
import TabsComponent from "@/components/tabs-component";
import CardCharts from "@/components/card-charts";
import GenericLineChart from "@/components/charts/line-charts";

const MonitoringPage = () => {
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
      <div className="">
        <h1 className={subtitle()}>Plataforma de Monitoramento</h1>
      </div>
      <TabsComponent
        items={[
          {
            name: "Monitoramento de recursos",
            key: "general",
            content: (
              <>
                <h3 className="flex flex-row items-center font-semibold text-lg my-2 mb-4 ">
                  Resumo
                </h3>
                <Card>
                  <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
                    # de visualizações de recursos e tabelas
                  </CardHeader>
                  <Divider />
                  <CardBody className="flex flex-row gap-4 justify-evenly py-20">
                    <div className="flex flex-row justify-center items-center gap-40">
                      <div className="flex flex-col gap-2 text-center">
                        <p className="text-5xl font-bold">4</p>
                        <p className="block text-sm font-bold text-gray-800">
                          Total
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <p className="text-5xl font-bold">3</p>
                        <p className="block text-sm font-bold text-gray-800">
                          Materializados
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center font-medium">
                      Grafico com o número de visualizações de recursos e
                      tabelas
                    </div>
                  </CardBody>
                </Card>
                <Divider className="my-5 " />
                <CardCharts title={"Saúde das visualizações de recursos"}>
                  <GenericLineChart
                    data={queryLatencyData}
                    title="% de visualizações de recursos abaixo do limite de frescura"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="% de visualizações de recursos com falha com materialização"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
                    yLabel="Count"
                  />
                </CardCharts>
              </>
            ),
          },
          {
            name: "Monitoramento SLO",
            key: "slo",
            content: (
              <>
                <CardCharts
                  title={"Recurso de atendimento ao SLO de confiabilidade"}
                >
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Proporção de queries contra SLO de confiabilidade"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <div className="flex flex-col gap-2 text-center justify-center">
                    <p className="text-5xl font-bold">100%</p>
                    <p className="block text-sm font-bold text-gray-800">
                      SLO de confiabilidade (30 dias)
                    </p>
                  </div>
                </CardCharts>
                <CardCharts title={"Recurso de atendimento ao SLO de latência"}>
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Proporção de consultas por status de latência do SLO"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <div className="flex flex-col gap-2 text-center justify-center">
                    <p className="text-5xl font-bold">100%</p>
                    <p className="block text-sm font-bold text-gray-800">
                      SLO de latência (30 dias)
                    </p>
                  </div>
                </CardCharts>
              </>
            ),
          },
          {
            name: "Monitoramento de recurso do servidor",
            key: "server",
            content: (
              <>
                <CardCharts title={"Requisições de serviço online"}>
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Queries por segundo"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="Porcentagem de erro de requisições HTTP por status"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
                    yLabel="Count"
                  />
                </CardCharts>
                <GenericLineChart
                  data={rowCountData}
                  title="Latência do Servidor de Recursos"
                  xLabel="Time (Local)"
                  yFormat={(d) =>
                    `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                  }
                  yLabel="Count"
                />
              </>
            ),
          },
          {
            name: "Monitoramento da nuvem",
            key: "cloud",
            content: (
              <>
                <CardCharts title={"Capacidade de serviço online"}>
                  <GenericLineChart
                    data={queryLatencyData}
                    title="Utilização de requisições simultaneas"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="Online Serving pod count by status"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
                    yLabel="Count"
                  />
                </CardCharts>
                <CardCharts title={"Monitoramento do Banco de Dados"}>
                  <GenericLineChart
                    data={queryLatencyData}
                    title="DB serving query latency"
                    xLabel="Time (Local)"
                    yFormat={(d) => `${d} qps`}
                    yLabel="Queries (qps)"
                  />
                  <GenericLineChart
                    data={rowCountData}
                    title="DB serving QPS"
                    xLabel="Time (Local)"
                    yFormat={(d) =>
                      `${Math.floor(d / 3600)}h ${Math.floor((d % 3600) / 60)}m ${d % 60}s`
                    }
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

export default MonitoringPage;
