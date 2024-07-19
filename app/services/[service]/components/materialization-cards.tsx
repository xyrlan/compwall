import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import MaterializationTable from './materialization-table';
import { materializationTableColumns, materializationTableRows } from '../../fake-data';

const ServiceMaterializationCards = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className="flex flex-row items-center font-medium bg-gray-200 py-4 px-4 rounded-t-xl">
          Estado de atendimento
        </div>
        <Divider />
        <div className="flex flex-col gap-4">
          <MaterializationTable rows={materializationTableRows} columns={materializationTableColumns} />
        </div>
      </div>
    </div>
  )
}

export default ServiceMaterializationCards