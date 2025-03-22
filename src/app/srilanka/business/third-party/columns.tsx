'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { ThirdPartyBusiness } from '@/lib/type';

export const columns: ColumnDef<ThirdPartyBusiness>[] = [
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
    accessorKey: 'emailApplicantThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('emailApplicantThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'givenNameTypeOfThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Given Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('givenNameTypeOfThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileApplicantThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('mobileApplicantThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneSriLankanThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address in Srilanka" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneSriLankanThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneApplicantThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneApplicantThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'purposeOfVisitThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purpose of visit" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('purposeOfVisitThirdPartyBusiness')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'faxNumberApplicantThirdPartyBusiness',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fax Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('faxNumberApplicantThirdPartyBusiness')}
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
        href="/srilanka/business/third-party/"
        eyeOpen={true}
      />
    ),
  },
];
