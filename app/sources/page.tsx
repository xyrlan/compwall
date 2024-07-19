"use client";
import { subtitle } from '@/components/primitives'
import TableComponent from '@/components/table-component';
import React from 'react'
import { columns, rows } from './fake-data';
import { Waypoints } from 'lucide-react';

const SourcesPage = () => {
  
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Fontes de dados</h1>
        <p>As fontes de dados definem como a HookZ se conecta a dados em lote e streaming</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar fontes de dados' icon={<Waypoints size={15} />} isHref />
    </div>
  )
}

export default SourcesPage