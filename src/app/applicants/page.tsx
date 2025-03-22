import { Metadata } from 'next';
import { DataTable } from './components/data-table';

import { apiEndpoints, fetchData } from '@/lib/api';
import { Applicants } from '@/lib/type';
import { columns } from './components/columns';
import SendPendingEmails from './sending-pending-emails';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Applicants',
  description: 'Applicants',
};

export default async function TaskPage() {
  const { data }: { data: Applicants[] } = await fetchData(
    apiEndpoints.FIRST_STEP_VISA_REQUEST_FORM
  );
  console.log('data', data);

  return (
    <>
      <div className="hidden bg-#f0ffff h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your applicants.
            </p>
          </div>
          <SendPendingEmails />
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <DataTable data={data} columns={columns} />
        </Suspense>
      </div>
    </>
  );
}
