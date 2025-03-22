import { apiEndpoints, fetchDataById } from '@/lib/api';
import TabsContainer from './TabsContainer';
import { ApplicantsFormData } from '@/lib/type';

export default async function ApplicantsView({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const data: ApplicantsFormData = await fetchDataById(
    apiEndpoints.FIRST_STEP_VISA_REQUEST_FORM,
    id
  );

  return (
    <div className="space-y-8 text-red-500">
      <TabsContainer data={data} />
    </div>
  );
}
