'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../../../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../../../applicants/components/data-table-row-actions';
import { SrilankaTouristIndividualType } from '@/lib/type';

export const columns: ColumnDef<SrilankaTouristIndividualType>[] = [
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
    accessorKey: 'familyNameIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Family Name" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('familyNameIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'nationalityIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nationality" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('nationalityIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'covidVaccinatedIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Covid Vaccinated" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('covidVaccinatedIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'occupationIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Occupation" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('occupationIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'mobileIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('mobileIndividualTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'passportNumberIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Passport Number" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {row.getValue('passportNumberIndividualTourist')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'emailIndividualTourist',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('emailIndividualTourist')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        href="/srilanka/tourist/individual/"
        eyeOpen={true}
      />
    ),
  },
];
