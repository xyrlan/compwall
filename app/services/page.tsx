import { subtitle } from '@/components/primitives'
import TableComponent from '@/components/table-component'
import { Pyramid } from 'lucide-react'
import React from 'react'
import { columns, rows } from './fake-data'

const ServicesPage = () => {
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Serviços de recurso</h1>
        <p>Serviços de recursos agrupam recursos de visualizações de recursos juntos para treinamento e entrega.</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar serviços' icon={<Pyramid size={15} />} isHref />
    </div>
  )
}

export default ServicesPage