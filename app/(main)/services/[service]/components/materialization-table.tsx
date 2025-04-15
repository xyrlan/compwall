import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/react";

const ProcessingTimeline = ({ range }: any) => {
  const [startYear, endYear] = range.split("-").map(Number);
  const currentYear = new Date().getFullYear();
  const totalYears = endYear - startYear;
  const currentProgress = ((currentYear - startYear) / totalYears) * 100;

  return (
    <div className="relative w-full h-1 ">
      <div className="absolute right-0 top-0 h-3 bg-teal-500 w-2/3" />
    </div>
  );
};

const MaterializationTable = ({ rows, columns }: any) => {
  return (
    <Table
      aria-label="Example table with custom cells"
      className="rounded-xl"
      radius="none"
    >
      <TableHeader>
        {columns.map((column: any) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row: any) => (
          <TableRow key={row.key}>
            <TableCell>{row.featureView}</TableCell>
            <TableCell>
              <ProcessingTimeline range={row.processingTimeline} />
            </TableCell>
            <TableCell>{row.lastProcessed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MaterializationTable;
