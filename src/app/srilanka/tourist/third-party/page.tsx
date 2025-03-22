import { DataTable } from '@/components/ui/data-table';
import { apiEndpoints, fetchData } from '@/lib/api';
import { ThirdPartyTourist } from '@/lib/type';
import React, { Suspense } from 'react';
import { columns } from './columns';

export default async function Page() {
  const data: ThirdPartyTourist[] = await fetchData(
    apiEndpoints.SRILANKA_VISA_TOURISM_THIRD_PARTY
  );

  return (
    <div className="hidden bg-#f0ffff h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your applicants.
          </p>
        </div>
      </div>
      {
        <Suspense fallback={<h1>Loading</h1>}>
          <DataTable
            data={data}
            columns={columns}
            filterQuery="emailThirdPartyTourist"
          />
        </Suspense>
      }
    </div>
  );
}
