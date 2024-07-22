"use client";
import { usePathname } from "next/navigation";
import React from "react";

import BreadcrumbsComponent from "@/components/bread-crumbs";
import OverviewCardComponent from "@/components/overview-card-component";
import TabsComponent from "@/components/tabs-component";

import { columns, data, rows } from "../fake-data";

const DataSourcePage = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent
        items={[
          { name: "Fontes de Dados", href: "/sources" },
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
            name: "Visualizações de recursos",
            key: "resources",
            content: <div>Visualizações de recursos</div>,
          },
        ]}
      />
    </section>
  );
};

export default DataSourcePage;
