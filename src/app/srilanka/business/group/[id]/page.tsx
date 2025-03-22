import React from 'react';
import { BusinessGroup } from '@/lib/type';
import { apiEndpoints, fetchDataById } from '@/lib/api';
import TabsContainer from './TabContainer';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: BusinessGroup = await fetchDataById(
    apiEndpoints.SRILANKA_VISA_BUSINESS_GROUP,
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
