import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { usePathname } from "next/navigation";

interface Column {
  key: string;
  label: string;
}

interface Row {
  key: string;
  [key: string]: string; // permite campos dinâmicos
}

interface FileConfig {
  [key: string]: string;
}

interface OverviewCardComponentProps {
  columns?: Column[];
  rows?: Row[];
  data: any[];
}

const OverviewCardComponent: React.FC<OverviewCardComponentProps> = ({
  columns,
  rows,
  data,
}) => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  const renderRowData = (label: string, value: string) => (
    <div key={label} className="flex justify-between">
      <label className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  );

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {rows && columns && (
        <>
          {rows
            .filter((row) => row.slug === slug)
            .map((row) => (
              <Card key={row.key}>
                <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
                  {row.title} - {row.slug}
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-col gap-4">
                  {columns.map((column) =>
                    renderRowData(column.label, row[column.key]),
                  )}
                </CardBody>
              </Card>
            ))}
          <Card>
            <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
              Tags
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-4">
              Nenhuma tag configurada para{" "}
              {rows.filter((row) => row.slug === slug)[0].slug}
            </CardBody>
          </Card>
        </>
      )}
      {data.map((config, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center font-medium bg-gray-200">
            {config.title}
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-4">
            {Object.keys(config).map(
              (key) =>
                key !== "title" &&
                renderRowData(key.replace(/_/g, " "), config[key]),
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default OverviewCardComponent;
