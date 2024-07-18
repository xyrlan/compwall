"use client";
import { subtitle } from '@/components/primitives';
import TableComponent from '@/components/table-component';
import React from 'react'
import { Layers3 } from 'lucide-react';
import { columns, rows } from './fake-data';


const FeaturesPage = () => {
  return (
    <div>
      <div className='mb-10'>
        <h1 className={subtitle()}>Visualizações de recursos e tabelas</h1>
        <p>As Visualizações de Recursos definem como as transformações são executadas nas entradas da fonte de dados para criar valores de recursos.</p>
        <p>As Tabelas de Recursos permitem a ingestão de recursos existentes diretamente no Armazenamento de Recursos.</p>
      </div>
      <TableComponent rows={rows} columns={columns} placeholder='Pesquisar recursos' icon={<Layers3 size={15} />} />
    </div>
  )
}

export default FeaturesPage