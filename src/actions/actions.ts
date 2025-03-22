'use server';

import { apiEndpoints, baseUrl } from '@/lib/api';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function sendPendingEmails() {
  const response = await fetch(
    `${baseUrl}${apiEndpoints.SENDING_PENDING_EMAILS_INDIA_VISA}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }
  );

  const results = await response.json();

  revalidatePath('/applicants');
  return results;
}
export async function paymentStatusAction(
  userId: string,
  paymentStatusText: string
) {
  try {
    const response = await fetch(
      `${baseUrl}${apiEndpoints.VISA_PAYMENT_STATUS}${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentStatus: paymentStatusText }),
      }
    );
    console.log(`${baseUrl}${apiEndpoints.VISA_PAYMENT_STATUS}${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const results = await response.json();
    console.log(results);
    revalidatePath('/applicants');
    return results;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
