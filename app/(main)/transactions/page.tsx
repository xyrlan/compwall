"use client";
import React from "react";
import { ArrowRightLeft } from "lucide-react";
import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";
import { columns, rows } from "./fake-data";


const TransactionsPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Transações financeiras</h1>
      </div>
      <TableComponent
        columns={columns}
        icon={<ArrowRightLeft size={15} />}
        placeholder="Pesquisar transações"
        rows={rows}
      />
    </div>
  );
};

export default TransactionsPage;
