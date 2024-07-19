"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Pyramid } from "lucide-react";

import BreadcrumbsComponent from "@/components/bread-crumbs";
import OverviewCardComponent from "@/components/overview-card-component";
import TabsComponent from "@/components/tabs-component";
import TableComponent from "@/components/table-component";

import {
  columns,
  data,
  featureViewColumns,
  featureViewRows,
  rows,
} from "../fake-data";

const TransformationPage = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <BreadcrumbsComponent
        items={[
          { name: "Transformações", href: "/transformations" },
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
            content: (
              <TableComponent
                columns={featureViewColumns}
                icon={<Pyramid size={15} />}
                placeholder="Pesquisar entidades"
                rows={featureViewRows}
              />
            ),
          },
        ]}
      />
    </section>
  );
};

export default TransformationPage;
