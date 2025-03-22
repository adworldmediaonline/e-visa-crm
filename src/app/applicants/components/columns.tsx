'use client';

import { ColumnDef } from '@tanstack/react-table';

import { labels, lastExitStepUrls, priorities, statuses } from '../data/data';
// import { Task } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Applicants } from '@/lib/type';

export const columns: ColumnDef<Applicants>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const timestamp = row.getValue('createdAt');
      if (!timestamp) return <div className="w-[120px]">-</div>;

      // Format the date
      const date = new Date(timestamp as string);
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      return <div className="w-[120px]">{formattedDate}</div>;
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'applicationType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('applicationType')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'emailId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('emailId')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'contactNo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('contactNo')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'passportType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Passport Type" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue('passportType')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // test
  // {
  //   accessorKey: 'title',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find(label => label.value === row.original.label);
  //     console.log(label);
  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue('title')}
  //         </span>
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: 'paymentStatus',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('paymentStatus')
      );

      if (!status) {
        return null;
      }
      // const statusVariant = status?.label?.toLowerCase()
      //   ? status?.label?.toLowerCase()
      //   : 'default';
      {
      }
      return (
        <div className="flex w-[100px] items-center">
          {status.value === 'incomplete' && (
            <Badge
              variant="incomplete"
              className="capitalize cursor-pointer"
              title="form not completed"
            >
              {status.value}
            </Badge>
          )}
          {status.value === 'pendingPayment' && (
            <Badge
              variant="pendingPayment"
              className="capitalize cursor-pointer"
              title="Payment not completed"
            >
              {status.value}
            </Badge>
          )}
          {status.value === 'pending' && (
            <Badge
              variant="pending"
              className="capitalize cursor-pointer"
              title="Payment Completed"
            >
              {status.value}
            </Badge>
          )}
          {status.value === 'visaSent' && (
            <Badge
              variant="visaSent"
              className="capitalize cursor-pointer"
              title="Visa Sent Successfully"
            >
              {status.value}
            </Badge>
          )}
          {status.value === 'underProcess' && (
            <Badge
              variant="underProcess"
              className="capitalize cursor-pointer"
              title="Visa is under process"
            >
              {status.value}
            </Badge>
          )}
          {status.value === 'verify' && (
            <Badge
              variant="verify"
              className="capitalize cursor-pointer"
              title="Visa is verify"
            >
              {status.value}
            </Badge>
          )}

          <DataTableRowActions row={row} href="/applicants" eyeOpen={false} />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'lastExitStepUrl',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="lastExitStepUrl" />
    ),
    cell: ({ row }) => {
      const lastExitStepUrl = lastExitStepUrls.find(
        lastExitStepUrl =>
          lastExitStepUrl.value === row.getValue('lastExitStepUrl')
      );

      if (!lastExitStepUrl) {
        return null;
      }

      return (
        <div className="flex items-center">
          {lastExitStepUrl.icon && (
            <lastExitStepUrl.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{lastExitStepUrl.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions row={row} href="/applicants" eyeOpen={true} />
    ),
  },
];
