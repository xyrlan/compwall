"use client";
import React from "react";
import { Code } from "lucide-react";

import { columns, rows } from "./fake-data";

import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";

const TransformationsPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Transformações</h1>
        <p>
          Transformações definem a lógica para transformar dados brutos em
          características.
        </p>
      </div>
      <TableComponent
        isHref
        columns={columns}
        icon={<Code size={15} />}
        placeholder="Pesquisar transformações"
        rows={rows}
      />
    </div>
  );
};

export default TransformationsPage;
