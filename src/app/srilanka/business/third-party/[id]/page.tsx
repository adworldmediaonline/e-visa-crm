import React from 'react';

import { ThirdPartyBusiness } from '@/lib/type';
import { apiEndpoints, fetchDataById } from '@/lib/api';
import TabsContainer from './TabsContainer';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: ThirdPartyBusiness = await fetchDataById(
    apiEndpoints.SRILANKA_VISA_BUSINESS_THIRD_PARTY,
    id
  );
  return (
    <div>
      <TabsContainer data={data} />
    </div>
  );
}
