"use client";
import { subtitle } from '@/components/primitives';
import TableComponent from '@/components/table-component';
import React from 'react'
import { columns, rows } from './fake-data';
import { Group } from 'lucide-react';

const EntitiesPage = () => {
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Entidades</h1>
        <p>Entidades são as chaves primárias para suas funcionalidades.</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar entidades' icon={<Group size={15} />}/>
    </div>
  )
}

export default EntitiesPage