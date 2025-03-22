import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export default function FieldMainDate({
  fieldName,
  fieldData,
  className,
}: {
  fieldName: string;
  fieldData: string;
  className?: string;
}) {
  return (
    <>
      {fieldData && (
        <div className={cn('feildmain', className)}>
          <h2 className="feildclass">{fieldName}</h2>
          <p className="px-4 text-[16px]">
            {format(new Date(fieldData), 'dd/MM/yyyy')}
          </p>
        </div>
      )}
    </>
  );
}
