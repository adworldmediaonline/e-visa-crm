'use client';

import { sendPendingEmails } from '@/actions/actions';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';

export default function SendPendingEmails() {
  const [isPending, startTransition] = useTransition();

  function onSendEmails() {
    startTransition(() => {
      sendPendingEmails();
    });
  }

  return (
    <>
      <Button
        onClick={() => {
          onSendEmails();
        }}
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin w-4 h-4" /> Sending
          </>
        ) : (
          'Send Pending Emails'
        )}
      </Button>
    </>
  );
}
