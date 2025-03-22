import FieldMain from '@/components/common/FieldMain';
import { Step6Form } from '@/lib/type';
import Image from 'next/image';

interface StepSixDetailsProps {
  data: Step6Form;
}
export default function StepSixDetails({ data }: StepSixDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="detail-title">E-Visa Step-Six Details</h3>
      </div>

      <div className="md:grid grid-cols-2 gap-4 p-4">
        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <FieldMain fieldName="Id" fieldData={data?._id} />
          <FieldMain fieldName="Form Id" fieldData={data?.formId} />
          <div className="feildmain">
            <h2 className="feildclass">Profile Picture</h2>
            <div className="feildvalue">
              <Image
                src={data?.profilePicture ?? ''}
                alt="Profile picture"
                width={200}
                height={200}
              />
            </div>
          </div>
          {data?.passport?.length > 0 && (
            <div className="feildmain">
              <h2 className="feildclass">Passport</h2>
              <div className="feildvalue space-y-4">
                {data?.passport?.map((e, i) => (
                  <Image
                    src={e ?? ''}
                    key={i}
                    alt={`passport ${i}`}
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white  px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>

          {data?.businessCard?.length > 0 && (
            <div className="feildmain">
              <h2 className="feildclass">Business Card</h2>
              <div className="feildvalue space-y-4">
                {data?.businessCard?.map((e, i) => (
                  <Image
                    src={e ?? ''}
                    key={i}
                    alt={`passport ${i}`}
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            </div>
          )}
          {data?.eMedicalCard?.length > 0 && (
            <div className="feildmain">
              <h2 className="feildclass">e-Medical Card</h2>
              <div className="feildvalue space-y-4">
                {data?.eMedicalCard?.map((e, i) => (
                  <Image
                    src={e ?? ''}
                    key={i}
                    alt={`passport ${i}`}
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
