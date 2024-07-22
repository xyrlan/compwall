import { Pyramid } from "lucide-react";
import React from "react";

import { subtitle } from "@/components/primitives";
import TableComponent from "@/components/table-component";

const DatasetsPage = () => {
  const rows: any = [];
  const columns = [
    { key: "dataset", label: "Dataset" },
    { key: "tags", label: "Tags" },
    { key: "onlineServing", label: "Serviço Online" },
    { key: "featureViews", label: "Visualizações de Funcionalidades" },
    { key: "lastUpdatedBy", label: "Última Atualização Por" },
    { key: "lastUpdated", label: "Última Atualização" },
    { key: "owner", label: "Proprietário" },
    { key: "created", label: "Criado" },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Datasets</h1>
        <p>
          Serviços de recursos agrupam recursos de visualizações de recursos
          juntos para treinamento e entrega.
        </p>
      </div>
      <TableComponent
        columns={columns}
        icon={<Pyramid size={15} />}
        placeholder="Pesquisar Datasets"
        rows={rows}
      />
    </div>
  );
};

export default DatasetsPage;
