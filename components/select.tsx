"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";


export type SelectData = {
  label: string;
  placeholder: string;
  options: Array<{ value: string }>;
};

export default function SelectComponent({ selectData }: { selectData: SelectData }) {
  return (
      <Select
        items={selectData.options}
        placeholder={selectData.placeholder}
        defaultSelectedKeys={[selectData.options[0].value]}
       color="default"
       className="min-w-[250px]"
      >
        {(option: any) => <SelectItem key={option.value}>{option.value}</SelectItem>}
      </Select>
  );
}
