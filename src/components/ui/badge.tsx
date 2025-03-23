import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80',
        secondary:
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        destructive:
          'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80',
        outline: 'text-slate-950 dark:text-slate-50',
        completed:
          'border-transparent bg-green-500 text-slate-50 hover:bg-green-500/80 dark:bg-green-900 dark:text-slate-50 dark:hover:bg-green-900/80',
        notFound:
          'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80',
        incomplete:
          'border-transparent bg-[#FF0000] text-slate-50 hover:bg-[#FF0000]/80',
        pendingPayment:
          'border-transparent bg-[#FFA500] text-slate-50 hover:bg-[#FFA500]/80',
        pending:
          'border-transparent bg-[#FFFF00] text-slate-50 hover:bg-[#FFFF00]/80',
        paid: 'border-transparent bg-[#38A169] text-slate-50 hover:bg-[#38A169]/80',
        underProcess:
          'border-transparent bg-[#90EE90] text-slate-50 hover:bg-[#90EE90]/80',
        verify:
          'border-transparent bg-[#ADD8E6] text-slate-50 hover:bg-[#ADD8E6]/80',
        visaSent:
          'border-transparent bg-[#008000] text-slate-50 hover:bg-[#008000]/80',
        newStatus:
          'border-transparent bg-blue-500 text-slate-50 hover:bg-blue-500/80 dark:bg-blue-900 dark:text-slate-50 dark:hover:bg-blue-900/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
