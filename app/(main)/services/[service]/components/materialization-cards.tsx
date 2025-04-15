import React from "react";
import { Divider } from "@heroui/react";

import {
  materializationTableColumns,
  materializationTableRows,
} from "../../fake-data";

import MaterializationTable from "./materialization-table";

const ServiceMaterializationCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex flex-row items-center font-medium bg-gray-200 py-4 px-4 rounded-t-xl">
          Estado de atendimento
        </div>
        <Divider />
        <div className="flex flex-col gap-4">
          <MaterializationTable
            columns={materializationTableColumns}
            rows={materializationTableRows}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceMaterializationCards;
