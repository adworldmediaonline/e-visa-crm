'use client';

import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterQuery: string;
}

export function DataTableToolbar<TData>({
  table,
  filterQuery,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  console.log(table.getColumn(filterQuery)?.getFilterValue());
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter applicants by email..."
          value={
            (table.getColumn(filterQuery)?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn(filterQuery)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}
