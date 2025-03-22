'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { BusinessIndividual, GroupTourist } from '@/lib/type';

export const columns: ColumnDef<BusinessIndividual>[] = [
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
    accessorKey: 'emailBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('emailBusinessIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'countryOfBirthBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('countryOfBirthBusinessIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('mobileBusinessIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneBusinessIndividualTouristOfSrilankaCompany',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address in Srilanka" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue(
          'addressLineOneBusinessIndividualTouristOfSrilankaCompany'
        )}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'addressLineOneBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('addressLineOneBusinessIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'purposeDescriptionBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Purpose of visit" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('purposeDescriptionBusinessIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'occupationBusinessIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Occupation" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('occupationBusinessIndividualTourist')}
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
        href="/srilanka/business/individual/"
        eyeOpen={true}
      />
    ),
  },
];
