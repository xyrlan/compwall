import { subtitle } from '@/components/primitives'
import TableComponent from '@/components/table-component'
import TabsComponent from '@/components/tabs-component'
import { User } from 'lucide-react'
import React from 'react'
import { columns, rows } from './fake-data'

const PermissionsPage = () => {
 
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Permissões</h1>
      </div>
      <TabsComponent items={[{ name: `Usuários (${rows.length})`, key: "users", content: <TableComponent rows={rows} columns={columns} placeholder='Pesquisar usuários' icon={<User size={15} />} /> }, { name: "Contas de serviço", key: "service-accounts", content: "conteúdo do serviço de contas" }, { name: "Grupos", key: "groups", content: "conteúdo do grupos" }]} />
    </div>
  )
}

export default PermissionsPage