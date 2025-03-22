import { cn } from '@/lib/utils';

export default function FieldMain({
  children,
  fieldName,
  fieldData,
  className,
}: {
  children?: React.ReactNode;
  fieldName?: string;
  fieldData?: string | boolean | number;
  className?: string;
}) {
  return (
    <>
      {fieldData ? (
        <div className={cn('feildmain', className)}>
          <h2 className="feildclass">{fieldName}</h2>
          <p className="px-4 text-[16px]">{fieldData}</p>
        </div>
      ) : (
        children
      )}
    </>
  );
}
