'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { BusinessGroup } from '@/lib/type';

export const columns: ColumnDef<BusinessGroup>[] = [
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
    accessorKey: 'emailBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('emailBusinessGroup')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'countryBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('countryBusinessGroup')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('mobileBusinessGroup')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneBusinessGroupOfSrilankaCompany',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address in Srilanka" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneBusinessGroupOfSrilankaCompany')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneBusinessGroup')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'purposeOfVisitBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purpose of visit" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('purposeOfVisitBusinessGroup')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'faxNumberBusinessGroup',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fax Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('faxNumberBusinessGroup')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        href="/srilanka/business/group/"
        eyeOpen={true}
      />
    ),
  },
];
