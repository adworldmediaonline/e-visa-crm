'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { ThirdPartyTourist } from '@/lib/type';

export const columns: ColumnDef<ThirdPartyTourist>[] = [
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
    accessorKey: 'emailThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('emailThirdPartyTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'familyNameTypeOfThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Family Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('familyNameTypeOfThirdPartyTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('mobileThirdPartyTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressInSrilankaThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address in Srilanka" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressInSrilankaThirdPartyTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneThirdPartyTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'purposeOfVisitThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purpose of visit" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('purposeOfVisitThirdPartyTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'faxNumberThirdPartyTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fax Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('faxNumberThirdPartyTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        href="/srilanka/tourist/third-party/"
        eyeOpen={true}
      />
    ),
  },
];
