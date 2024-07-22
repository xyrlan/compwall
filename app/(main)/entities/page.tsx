"use client";
import React from "react";
import { Group } from "lucide-react";

import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";

import { columns, rows } from "./fake-data";

const EntitiesPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Entidades</h1>
        <p>Entidades são as chaves primárias para suas funcionalidades.</p>
      </div>
      <TableComponent
        columns={columns}
        icon={<Group size={15} />}
        placeholder="Pesquisar entidades"
        rows={rows}
      />
    </div>
  );
};

export default EntitiesPage;
