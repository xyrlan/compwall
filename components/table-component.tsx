"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


type Column = {
  key: string;
  label: string;
};

type Row = {
  key: string;
  [key: string]: any;
};

export default function TableComponent({ rows, columns, placeholder, icon, isHref }: { rows: Row[], columns: Column[], placeholder?: string, icon?: React.ReactNode, isHref?: boolean }) {
  const [filterValue, setFilterValue] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: columns[0]?.key || "",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(columns.map(col => col.key)));
  const pathname = usePathname();

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredRows = [...rows];

    if (hasSearchFilter) {
      filteredRows = filteredRows.filter((row) =>
        Object.values(row).some(val =>
          String(val).toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    }

    return filteredRows;
  }, [rows, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((row: any, columnKey: any) => {
    const cellValue = getKeyValue(row, columnKey);
    if (columnKey === columns[0].key) { // assumindo que a primeira coluna deve ser o link
      return (
        <Link href={isHref ? `/${pathname.split("/")[1]}/${row[columnKey]}` : "#"} className="flex items-center gap-2">
          {icon}
          <p className="text-blue-600 font-semibold hover:underline">{cellValue}</p>
        </Link>
      );
    }
    return cellValue;
  }, [columns]);
  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value: any) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder={placeholder}
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {rows.length} items</span>
          <label className="flex items-center text-default-400 text-small gap-2">
            Linhas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, rows.length, onRowsPerPageChange, onSearchChange]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={page <= 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={page >= pages} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [page, pages]);

  return (
    <Table
      aria-label="Example table with dynamic content"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      sortDescriptor={sortDescriptor as any}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor as any}

    >
      {columns &&
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align="start"
              allowsSorting
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
      }
      <TableBody emptyContent={
        <div className='flex flex-col items-center justify-center gap-4'>
          <h3 className="font-bold text-xl text-stone-950">Nenhum resultado encontrado</h3>
          <p className="max-w-sm">Nenhum(a) {columns[0].label} corresponde aos critérios de pesquisa.</p>
        </div>
      } items={sortedItems ? sortedItems : []}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
