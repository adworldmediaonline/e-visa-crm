'use client';

import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { lastExitStepUrls, priorities, statuses } from '../data/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { CrossIcon } from 'lucide-react';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Filter applicants by User Id..."
          value={(table.getColumn('_id')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('_id')?.setFilterValue(event.target.value)
          }
          className="h-8 w-full sm:w-[250px]"
        />
        {table.getColumn('paymentStatus') && (
          <DataTableFacetedFilter
            column={table.getColumn('paymentStatus')}
            title="Payment Status"
            options={statuses}
          />
        )}

        {table.getColumn('lastExitStepUrl') && (
          <DataTableFacetedFilter
            column={table.getColumn('lastExitStepUrl')}
            title="Last Exit Step"
            options={lastExitStepUrls}
          />
        )}
        {isFiltered && (
          <Button
            variant="checkBtn"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <CrossIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
