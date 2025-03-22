'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../applicants/components/data-table-row-actions';
import { TurkeyVisaEntries } from '@/lib/type';

export const columns: ColumnDef<TurkeyVisaEntries>[] = [
  {
    accessorKey: '_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="UserID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('_id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'contactDetailsFullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('contactDetailsFullName')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'contactDetailsEmail',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('contactDetailsEmail')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'contactDetailsContactNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('contactDetailsContactNumber')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'countryCitizenship',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country Citizenship" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('countryCitizenship')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'arrivalDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Arrival Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('arrivalDate')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'visaDuration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Visa Duration" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('visaDuration')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions row={row} href="/turkey/" eyeOpen={true} />
    ),
  },
];
