"use client";
import React from "react";
import { Waypoints } from "lucide-react";

import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";

import { columns, rows } from "./fake-data";

const SourcesPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Fontes de dados</h1>
        <p>
          As fontes de dados definem como a HookZ se conecta a dados em lote e
          streaming
        </p>
      </div>
      <TableComponent
        isHref
        columns={columns}
        icon={<Waypoints size={15} />}
        placeholder="Pesquisar fontes de dados"
        rows={rows}
      />
    </div>
  );
};

export default SourcesPage;
