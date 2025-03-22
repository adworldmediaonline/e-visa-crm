import FieldMain from '@/components/common/FieldMain';
import FieldMainDate from '@/components/common/FieldMainDate';
import { Step2Form } from '@/lib/type';

interface StepTwoDetailsProps {
  data: Step2Form;
}
export default function StepTwoDetails({ data }: StepTwoDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="text-black font-semibold text-xl m-4 pb-2 border-b-2 border-[#ffaa17]">
          E-Visa Step-Two Details :
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <FieldMain fieldName="_id" fieldData={data?._id} />
          <FieldMain fieldName="formId" fieldData={data?.formId} />
          <FieldMain fieldName="firstName" fieldData={data?.firstName} />
          <FieldMain fieldName="lastName" fieldData={data?.lastName} />

          <FieldMain
            fieldName="Changed Name"
            fieldData={
              data?.changedName == false ? 'name not changed' : 'name changed'
            }
          />

          <FieldMain fieldName="Previous Name" />

          <FieldMain>
            {data?.previousName && data?.previousLastName && (
              <div className="feildmain">
                <h2 className="feildclass">Previous Name</h2>
                <p className="px-4 text-[14px] space-x-1">
                  <span>{data?.previousName}</span>
                  <span>{data?.previousLastName}</span>
                </p>
              </div>
            )}
            {data?.previousName && (
              <div className="feildmain">
                <h2 className="feildclass">Previous Name</h2>
                <p className="px-4 text-[14px] space-x-1">
                  <span>{data?.previousName}</span>
                  <span>{data?.previousLastName}</span>
                </p>
              </div>
            )}
            {data?.previousLastName && (
              <div className="feildmain">
                <h2 className="feildclass">Previous Name</h2>
                <p className="px-4 text-[14px] space-x-1">
                  <span>{data?.previousName}</span>
                  <span>{data?.previousLastName}</span>
                </p>
              </div>
            )}
          </FieldMain>

          <FieldMain fieldName="Gender" fieldData={data?.gender} />
          <FieldMainDate
            fieldName="Date Of Birth"
            fieldData={data?.dateOfBirth}
          />

          <FieldMain
            fieldName="Town/City Of Birth"
            fieldData={data?.townCityOfBirth}
          />
          <FieldMain
            fieldName="Country Region Of Birth"
            fieldData={data?.countryRegionOfBirth}
          />
          <FieldMain
            fieldName="Citizenship Nationa ID"
            fieldData={data?.citizenshipNationalID}
          />
          <FieldMain fieldName="Religion" fieldData={data?.religion} />
          <FieldMain
            fieldName="Religion Other"
            fieldData={data?.religionOther}
          />
          <FieldMain
            fieldName="Visible Identification Marks"
            fieldData={data?.visibleIdentificationMarks}
          />
          <FieldMain
            fieldName="Educational Qualification"
            fieldData={data?.educationalQualification}
          />
          <FieldMain
            fieldName="Nationality Region"
            fieldData={data?.nationalityRegion}
          />
        </div>

        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white  px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>

          <FieldMain
            fieldName="Acquire Nationality"
            fieldData={data?.acquireNationality}
          />
          <FieldMain
            fieldName="Previous Nationality"
            fieldData={data?.previousNationality}
          />
          <FieldMain
            fieldName="HaveLived In Applying Country"
            fieldData={data?.haveLivedInApplyingCountry}
          />
          <FieldMain
            fieldName="Passport Number"
            fieldData={data?.passportNumber}
          />
          <FieldMain
            fieldName="Place Of Issue"
            fieldData={data?.placeOfIssue}
          />
          <FieldMainDate
            fieldName="Date of Issue"
            fieldData={data?.dateOfIssue}
          />
          <FieldMainDate
            fieldName="Date of Expiry"
            fieldData={data?.dateOfExpiry}
          />

          <FieldMain
            fieldName="Any Other Passport"
            fieldData={data?.anyOtherPassport}
          />
          <FieldMain
            fieldName="Country Of Issue"
            fieldData={data?.countryOfIssue}
          />
          <FieldMain
            fieldName="Passport IC Number"
            fieldData={data?.passportICNumber}
          />

          <FieldMainDate
            fieldName="Date Of Issue Passport IC"
            fieldData={data?.dateOfIssuePassportIC}
          />

          <FieldMain
            fieldName="Place Of Issue Passport IC"
            fieldData={data?.placeOfIssuePassportIC}
          />
          <FieldMain
            fieldName="Passport Nationality Mentioned Therein"
            fieldData={data?.passportNationalityMentionedTherein}
          />
        </div>
      </div>
    </div>
  );
}
