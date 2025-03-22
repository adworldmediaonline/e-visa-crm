import React from 'react';
import TabsContainer from './TabsContainer';
import { GroupTourist } from '@/lib/type';
import { apiEndpoints, fetchDataById } from '@/lib/api';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: GroupTourist = await fetchDataById(
    apiEndpoints.SRILANKA_VISA_TOURISM_GROUP,
    id
  );

  return (
    <div>
      <div className="py-3 text-2xl font-bold text-center">
        Full Detail Page
      </div>

      <TabsContainer data={data} />
    </div>
  );
}
