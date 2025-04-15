import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { ArrowRight } from "lucide-react";

import {
  materializationColumns,
  materializationData,
  materializationRows,
} from "../../fake-data";

import TableComponent from "@/components/table-component";
import OverviewCardComponent from "@/components/overview-card-component";

const MaterializationCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <OverviewCardComponent data={materializationData} />
      <Card>
        <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
          Trabalhos de materialização
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          <TableComponent
            columns={materializationColumns}
            icon={<ArrowRight size={15} />}
            placeholder="Pesquisar"
            rows={materializationRows}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default MaterializationCards;
