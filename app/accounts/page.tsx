import React from "react";
import { User } from "lucide-react";

import { subtitle } from "@/components/primitives";
import TabsComponent from "@/components/tabs-component";
import TableComponent from "@/components/table-component";

import { columns, rows } from "./fake-data";

const AccountsPage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className={subtitle()}>Contas & Acesso</h1>
      </div>
      <TabsComponent
        items={[
          {
            name: `Usuários (${rows.length})`,
            key: "users",
            content: (
              <TableComponent
                columns={columns}
                icon={<User size={15} />}
                placeholder="Pesquisar usuários"
                rows={rows}
              />
            ),
          },
          {
            name: "Contas de serviço",
            key: "service-accounts",
            content: "conteúdo do serviço de contas",
          },
          { name: "Grupos", key: "groups", content: "conteúdo do grupos" },
        ]}
      />
    </div>
  );
};

export default AccountsPage;
