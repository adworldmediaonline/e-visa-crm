'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { GroupTourist } from '@/lib/type';

export const columns: ColumnDef<GroupTourist>[] = [
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
    accessorKey: 'emailGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('emailGroupTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'countryGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('countryGroupTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('mobileGroupTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressInSrilankaGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address in Srilanka" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressInSrilankaGroupTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneGroupTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'purposeOfVisitGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purpose of visit" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('purposeOfVisitGroupTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'faxNumberGroupTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fax Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('faxNumberGroupTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        href="/srilanka/tourist/group/"
        eyeOpen={true}
      />
    ),
  },
];
