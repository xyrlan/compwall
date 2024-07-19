import { Pyramid } from "lucide-react";
import React from "react";

import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";

import { columns, rows } from "./fake-data";

const ServicesPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Serviços de recurso</h1>
        <p>
          Serviços de recursos agrupam recursos de visualizações de recursos
          juntos para treinamento e entrega.
        </p>
      </div>
      <TableComponent
        isHref
        columns={columns}
        icon={<Pyramid size={15} />}
        placeholder="Pesquisar serviços"
        rows={rows}
      />
    </div>
  );
};

export default ServicesPage;
