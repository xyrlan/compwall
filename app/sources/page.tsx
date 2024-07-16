import { subtitle } from '@/components/primitives'
import SearchInput from '@/components/search-input'
import TableComponent from '@/components/table-component';
import React from 'react'

const SourcesPage = () => {
  const columns = [
    { key: "dataSource", label: "Fonte de Dados" },
    { key: "tags", label: "Tags" },
    { key: "type", label: "Tipo" },
    { key: "batchSource", label: "Fonte de Lote" },
    { key: "streamSource", label: "Fonte de Fluxo" },
    { key: "featureViews", label: "Visualizações de Funcionalidades" },
    { key: "featureServices", label: "Serviços de Funcionalidades" },
    { key: "lastUpdatedBy", label: "Última Atualização Por" },
    { key: "lastUpdated", label: "Última Atualização" },
    { key: "owner", label: "Proprietário" },
    { key: "created", label: "Criado" }
  ];
  
  const rows = [
    {
      key: "1",
      dataSource: "transactions_batch",
      tags: "0",
      type: "Batch",
      batchSource: "File",
      streamSource: "n/a",
      featureViews: "1",
      featureServices: "2",
      lastUpdatedBy: "mahesh@tecton.ai",
      lastUpdated: "2024-04-01 22:30",
      owner: "n/a",
      created: "2024-04-01 22:30"
    },
    {
      key: "2",
      dataSource: "transactions_stream",
      tags: "0",
      type: "Stream",
      batchSource: "File",
      streamSource: "Push",
      featureViews: "1",
      featureServices: "2",
      lastUpdatedBy: "mahesh@tecton.ai",
      lastUpdated: "2024-04-01 22:30",
      owner: "n/a",
      created: "2024-04-01 22:30"
    },
    {
      key: "3",
      dataSource: "users",
      tags: "0",
      type: "Batch",
      batchSource: "File",
      streamSource: "n/a",
      featureViews: "1",
      featureServices: "1",
      lastUpdatedBy: "mahesh@tecton.ai",
      lastUpdated: "2024-04-01 22:30",
      owner: "n/a",
      created: "2024-04-01 22:30"
    }
  ];

  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Fontes de dados</h1>
        <p>As fontes de dados definem como a HookZ se conecta a dados em lote e streaming</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar fontes de dados'/>
    </div>
  )
}

export default SourcesPage