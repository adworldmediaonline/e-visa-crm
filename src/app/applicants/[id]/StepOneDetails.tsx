import FieldMain from '@/components/common/FieldMain';
import { ApplicantsFormData } from '@/lib/type';
import { cn } from '@/lib/utils';
import FieldMainDate from '../../../components/common/FieldMainDate';

interface StepOneDetailsProps {
  data: ApplicantsFormData;
}

export default function StepOneDetails({ data }: StepOneDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="detail-title">E-Visa Step-one Details</h3>
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
          <FieldMain
            fieldName="Application Type"
            fieldData={data?.applicationType}
          />
          <FieldMain
            fieldName="Application Type"
            fieldData={data?.paymentStatus}
          />

          <FieldMain
            fieldName="Nationality Region"
            fieldData={data?.nationalityRegion}
          />
          <FieldMain fieldName="Passport Type" fieldData={data?.passportType} />
          <FieldMain
            fieldName="Port Of Arrival"
            fieldData={data?.portOfArrival}
          />
          <FieldMainDate
            fieldName="Date of Birth"
            fieldData={data?.dateOfBirth}
          />
          <FieldMain fieldName="Email Id" fieldData={data?.emailId} />
          <FieldMain fieldName="Re-Email Id" fieldData={data?.reEmailId} />
        </div>

        <div>
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white  px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>

          <FieldMain fieldName="Visa Service" fieldData={data?.visaService} />

          <FieldMain
            fieldName="e-Business Visa"
            fieldData={data?.eBusinessVisa}
          />
          <FieldMain
            fieldName="e-Conference Visa"
            fieldData={data?.eConferenceVisa}
          />
          <FieldMain
            fieldName="e-MedicalAttendant Visa"
            fieldData={data?.eMedicalAttendantVisa}
          />
          <FieldMain
            fieldName="e-Medical Visa"
            fieldData={data?.eMedicalVisa}
          />
          <FieldMain
            fieldName="e-Tourist Visa"
            fieldData={data?.eTouristVisa}
          />
          <FieldMain
            fieldName="e-Tourist Visa 1Year"
            fieldData={data?.eTouristVisa1Year}
          />
          <FieldMain
            fieldName="e-Tourist Visa 5Years"
            fieldData={data?.eTouristVisa5Years}
          />
          <FieldMain
            fieldName="e-Tourist Visa 30Days"
            fieldData={data?.eTouristVisa30Days}
          />

          <FieldMainDate
            fieldName="Expected Date Of Arrival"
            fieldData={data?.expectedDateOfArrival}
          />
        </div>
      </div>
    </div>
  );
}
