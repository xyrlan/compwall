import OverviewCardComponent from '@/components/overview-card-component'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { materializationColumns, materializationData, materializationRows } from '../../fake-data'
import TableComponent from '@/components/table-component';
import { ArrowRight } from 'lucide-react';

const MaterializationCards = () => {
  return (
    <div className='flex flex-col gap-4'>
      <OverviewCardComponent data={materializationData} />
      <Card>
        <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
          Trabalhos de materialização
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          <TableComponent rows={materializationRows} columns={materializationColumns} placeholder='Pesquisar' icon={<ArrowRight size={15} />} />
        </CardBody>
      </Card>
    </div>
  )
}

export default MaterializationCards