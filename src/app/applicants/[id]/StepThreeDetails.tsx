import FieldMain from '@/components/common/FieldMain';
import { Step3Form } from '@/lib/type';

interface StepThreeDetailsProps {
  data: Step3Form;
}

export default function StepThreeDetails({ data }: StepThreeDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="text-black font-semibold text-xl m-4 pb-2 border-b-2 border-[#ffaa17]">
          E-Visa Step-Three Details :
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
          <FieldMain fieldName="Id" fieldData={data?._id} />
          <FieldMain fieldName="Form Id" fieldData={data?.formId} />
          <FieldMain
            fieldName="House No Street"
            fieldData={data?.houseNoStreet}
          />
          <FieldMain
            fieldName="Village/Town/City"
            fieldData={data?.villageTownCity}
          />
          <FieldMain fieldName="Country" fieldData={data?.country} />
          <FieldMain
            fieldName="State Province District"
            fieldData={data?.stateProvinceDistrict}
          />
          <FieldMain
            fieldName="Postal ZipCode"
            fieldData={data?.postalZipCode}
          />
          <FieldMain fieldName="Phone No." fieldData={data?.phoneNo} />
          <FieldMain fieldName="Mobile No." fieldData={data?.mobileNo} />
          <FieldMain fieldName="Email Address" fieldData={data?.emailAddress} />

          <FieldMain
            fieldName="Same Address"
            fieldData={data?.sameAddress ? 'Yes' : 'No'}
          />
          <FieldMain
            fieldName="Permanent Address House No Street"
            fieldData={data?.permanentAddressHouseNoStreet}
          />
          <FieldMain
            fieldName="Permanent Address Village Town/City"
            fieldData={data?.permanentAddressVillageTownCity}
          />
          <FieldMain
            fieldName="Permanent Address State Province District"
            fieldData={data?.permanentAddressStateProvinceDistrict}
          />
          <FieldMain
            fieldName="Father FullName"
            fieldData={data?.fatherFullName}
          />
          <FieldMain
            fieldName="Father Nationality"
            fieldData={data?.fatherNationality}
          />
          <FieldMain
            fieldName="Father Previous Nationality"
            fieldData={data?.fatherPreviousNationality}
          />
          <FieldMain
            fieldName="Father Place Of Birth"
            fieldData={data?.fatherPlaceOfBirth}
          />
          <FieldMain
            fieldName="Father Country"
            fieldData={data?.fatherCountry}
          />
          <FieldMain
            fieldName="Mother FullName"
            fieldData={data?.motherFullName}
          />
          <FieldMain
            fieldName="Mother Nationality"
            fieldData={data?.motherNationality}
          />
          <FieldMain
            fieldName="Mother Previous Nationality"
            fieldData={data?.motherPreviousNationality}
          />
          <FieldMain
            fieldName="Mother Place Of Birth"
            fieldData={data?.motherPlaceOfBirth}
          />
          <FieldMain
            fieldName="Mother Country Of Birth"
            fieldData={data?.motherCountryOfBirth}
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
            fieldName="Applicant Marital Status"
            fieldData={data?.applicantMaritalStatus}
          />
          <FieldMain
            fieldName="Spouse FullName"
            fieldData={data?.spouseFullName}
          />
          <FieldMain
            fieldName="Spouse Nationality"
            fieldData={data?.spouseNationality}
          />
          <FieldMain
            fieldName="Spouse Previous Nationality"
            fieldData={data?.spousePreviousNationality}
          />
          <FieldMain
            fieldName="Spouse Place Of Birth"
            fieldData={data?.spousePlaceOfBirth}
          />
          <FieldMain
            fieldName="Spouse Country Of Birth"
            fieldData={data?.spouseCountryOfBirth}
          />
          <FieldMain
            fieldName="Parents Pakistan National"
            fieldData={data?.parentsPakistanNational}
          />
          <FieldMain
            fieldName="Parent Details"
            fieldData={data?.parentDetails}
          />
          <FieldMain
            fieldName="Present Occupation"
            fieldData={data?.presentOccupation}
          />
          <FieldMain
            fieldName="Present Other Occupation"
            fieldData={data?.presentOtherOccupation}
          />
          <FieldMain fieldName="Employer Name" fieldData={data?.employerName} />
          <FieldMain fieldName="Designation" fieldData={data?.designation} />
          <FieldMain fieldName="Address" fieldData={data?.address} />
          <FieldMain
            fieldName="Applicant Phone"
            fieldData={data?.applicantPhone}
          />
          <FieldMain
            fieldName="Past Occupation If Any"
            fieldData={data?.pastOccupationIfAny}
          />
          <FieldMain
            fieldName="Military Organization"
            fieldData={data?.militaryOrganization}
          />
          <FieldMain fieldName="Organization" fieldData={data?.organization} />
          <FieldMain
            fieldName="Military Designation"
            fieldData={data?.militaryDesignation}
          />
          <FieldMain fieldName="Military Rank" fieldData={data?.militaryRank} />
          <FieldMain
            fieldName="Place Of Posting"
            fieldData={data?.placeOfPosting}
          />
        </div>
      </div>
    </div>
  );
}
