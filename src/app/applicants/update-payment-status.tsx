'use client';

import { paymentStatusAction } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';

export default function UpdatePaymentStatus({
  userId,
  text,
  paymentStatusText,
}: {
  userId: string;
  text: string;
  paymentStatusText: string;
}) {
  const [isPending, startTransition] = useTransition();
  // const updatePaymentStatusWithId = paymentStatus.bind(null, userId);
  function updatePayment() {
    startTransition(() => {
      paymentStatusAction(userId, paymentStatusText);
    });
  }

  return (
    <>
      <Button
        size={'sm'}
        className="py-1 px-3"
        onClick={() => {
          updatePayment();
        }}
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin w-4 h-4" /> Updating
          </>
        ) : (
          text
        )}
      </Button>
    </>
  );
}
