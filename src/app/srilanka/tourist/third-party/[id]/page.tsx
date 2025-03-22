import React from 'react';
import TabsContainer from './TabsContainer';
import { ThirdPartyTourist } from '@/lib/type';
import { apiEndpoints, fetchDataById } from '@/lib/api';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: ThirdPartyTourist = await fetchDataById(
    apiEndpoints.SRILANKA_VISA_TOURISM_THIRD_PARTY,
    id
  );
  return (
    <div>
      <TabsContainer data={data} />
    </div>
  );
}
