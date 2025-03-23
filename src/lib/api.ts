export const baseUrl = 'https://visa-backend-v2.vercel.app';
// export const baseUrl = 'http://localhost:8090';

export const apiEndpoints = {
  FIRST_STEP_VISA_REQUEST_FORM: '/visa/viewVisaRequestForm',
  VISA_PAYMENT_STATUS: '/visa/paymentStatus/',
  TURKEY_VISA_APPLICATION: '/turkeyvisa/turkeyVisaApplication',
  AUSTRALIA_VISA_APPLICATION: '/australiavisa/australiaVisaApplication',
  SENDING_PENDING_EMAILS_INDIA_VISA:
    '/visa/viewVisaRequestFormSendPendingEmail',
  SRILANKA_VISA_TOURISM_INDIVIDUAL: '/slvisa/touristIndividual',
  SRILANKA_VISA_TOURISM_GROUP: '/slvisa/touristGroups',
  SRILANKA_VISA_TOURISM_THIRD_PARTY: '/slvisa/touristThirdParty',
  SRILANKA_VISA_BUSINESS_INDIVIDUAL: '/slvisa/businessIndividual',
  SRILANKA_VISA_BUSINESS_GROUP: '/slvisa/businessGroups',
  SRILANKA_VISA_BUSINESS_THIRD_PARTY: '/slvisa/businessThirdParty',
};

export async function fetchData(endpoint: string) {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    next: { revalidate: 3 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function fetchDataById(endpoint: string, id: string) {
  const res = await fetch(`${baseUrl}${endpoint}/${id}`, {
    next: { revalidate: 3 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
