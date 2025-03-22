'use client';

import { Row } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { labels } from '../data/data';
// import { applicantsSchema } from '../data/schema';
import { Dot, Eye, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { Applicants } from '@/lib/type';
import UpdatePaymentStatus from '../update-payment-status';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  href: string;
  eyeOpen: boolean;
}

export function DataTableRowActions<TData>({
  row,
  href,
  eyeOpen,
}: DataTableRowActionsProps<TData>) {
  const applicants: any = row.original;

  return (
    <div className="flex">
      {eyeOpen && (
        <Link href={`${href}/${applicants._id}`}>
          <Eye />
        </Link>
      )}
      {!eyeOpen && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              disabled={
                applicants.paymentStatus === 'pendingPayment' ||
                applicants.paymentStatus === 'incomplete'
              }
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem>
              <UpdatePaymentStatus
                text="Verify"
                userId={applicants._id}
                paymentStatusText="verify"
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UpdatePaymentStatus
                text="Under Process"
                userId={applicants._id}
                paymentStatusText="underProcess"
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UpdatePaymentStatus
                text="Visa Sent"
                userId={applicants._id}
                paymentStatusText="visaSent"
              />
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Favorite</DropdownMenuItem> */}
            <DropdownMenuSeparator />
            {/* <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={applicants.label}>
              {labels.map(label => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
