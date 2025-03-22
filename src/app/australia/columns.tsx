'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../applicants/components/data-table-column-header';
import { DataTableRowActions } from '../applicants/components/data-table-row-actions';
import {
  AustraliaVisaEntries,
  AustraliaVisaEntriesPersonalDetails,
} from '@/lib/type';

export const columns: ColumnDef<AustraliaVisaEntries>[] = [
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
    accessorKey: 'personalDetails',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Full Name" />
    ),
    cell: ({ row }) => {
      const personalDetails: AustraliaVisaEntriesPersonalDetails =
        row.getValue('personalDetails');
      return <div className="w-[80px]">{personalDetails?.givenName}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'personalDetails',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      const personalDetails: AustraliaVisaEntriesPersonalDetails =
        row.getValue('personalDetails');
      return <div className="w-[80px]">{personalDetails?.emailAddress}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'personalDetails',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => {
      const personalDetails: AustraliaVisaEntriesPersonalDetails =
        row.getValue('personalDetails');
      return (
        <div className="w-[80px]">
          {personalDetails?.countryTerritoryOfBirth}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'personalDetails',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Martial Status" />
    ),
    cell: ({ row }) => {
      const personalDetails: AustraliaVisaEntriesPersonalDetails =
        row.getValue('personalDetails');
      return <div className="w-[80px]">{personalDetails?.maritalStatus}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions row={row} href="/australia/" eyeOpen={true} />
    ),
  },
];
