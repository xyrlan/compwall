"use client";
import { subtitle } from '@/components/primitives';
import TableComponent from '@/components/table-component';
import React from 'react'
import { columns, rows } from './fake-data';
import { Code } from 'lucide-react';


const TransformationsPage = () => {
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Transformações</h1>
        <p>Transformações definem a lógica para transformar dados brutos em características.</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar transformações' icon={<Code size={15} />} isHref />
    </div>
  )
}

export default TransformationsPage