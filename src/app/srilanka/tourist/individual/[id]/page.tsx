import { apiEndpoints, fetchDataById } from '@/lib/api';
import { SrilankaTouristIndividualType } from '@/lib/type';
import Image from 'next/image';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: SrilankaTouristIndividualType = await fetchDataById(
    apiEndpoints.SRILANKA_VISA_TOURISM_INDIVIDUAL,
    id
  );

  return (
    <div>
      <div className="py-3 text-2xl font-bold text-center">
        Full Detail Page
      </div>

      <div>
        <h3 className="detail-title">Travel Information</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Surname/Family Name</h2>
          <p className="feildvalue">{data?.familyNameIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Other/Given Names</h2>
          <p className="feildvalue">{data?.givenNameIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Title</h2>
          <p className="feildvalue">{data?.titleIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Date of Birth</h2>
          <p className="feildvalue">{data?.dateOfBirthIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Gender</h2>
          <p className="feildvalue">{data?.genderIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Nationality</h2>
          <p className="feildvalue">{data?.nationalityIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country of Birth</h2>
          <p className="feildvalue">{data?.countryOfBirthIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Are you fully vaccinated for COVID 19</h2>
          <p className="feildvalue">{data?.covidVaccinatedIndividualTourist}</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Occupation</h2>
          <p className="feildvalue">{data?.occupationIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Passport Number</h2>
          <p className="feildvalue">{data?.passportNumberIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Issue Date</h2>
          <p className="feildvalue">{data?.issueDateIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Expiry date</h2>
          <p className="feildvalue">{data?.expiryDateIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Passport Front page (Bio data page) date
          </h2>
          <Image
            className="feildvalue"
            src={data?.passportImageIndividualTourist}
            alt="passport"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">
          Child information in parent&apos;s passport
        </h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Surname/Family Name</h2>
          <p className="feildvalue">{data?.familyNameIndividualTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Other/Given Names</h2>
          <p className="px-4 text-[16px]">
            {data?.familyNameIndividualTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Date of Birth</h2>
          <p className="feildvalue">{data?.familyNameIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Gender</h2>
          <p className="feildvalue">{data?.familyNameIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Relationship</h2>
          <p className="feildvalue">{data?.familyNameIndividualTourist}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Where you have been during last 14 days before this trip?
          </h2>
          <p className="feildvalue">{data?.whereHaveBeenIndividualTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Attended Arrrival Date</h2>
          <p className="px-4 text-[16px]">
            {data?.attendantArrivalDateIndividualTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of visit</h2>
          <p className="feildvalue">{data?.purposeOfVisitIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">No. of Days Visa Required</h2>
          <p className="feildvalue">{data?.visaValidPeriodIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Port of departure</h2>
          <p className="feildvalue">{data?.portOfDepartureIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arilne/Vessel</h2>
          <p className="feildvalue">{data?.arilineVesselIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Flight/Vessel Number</h2>
          <p className="feildvalue">
            {data?.flightVesselNumberIndividualTourist}
          </p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">Contact Details</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address Line one</h2>
          <p className="feildvalue">{data?.addressLineOneIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address Line Two</h2>
          <p className="feildvalue">{data?.addressLineTwoIndividualTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">{data?.cityIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">{data?.zipCodeIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">{data?.countryIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address In Sri Lanka</h2>
          <p className="feildvalue">
            {data?.addressInSrilankaIndividualTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">{data?.alternateEmailIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">{data?.telephoneIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">{data?.mobileIndividualTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">{data?.faxNumberIndividualTourist}</p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">Declaration Details</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Do you have a valid residence visa to Sri Lanka?
          </h2>
          <p className="feildvalue">{data?.validResidenceIndividualTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">
            Are you currently in Sri Lanka with a valid ETA or obtained an
            extension of visa?
          </h2>
          <p className="px-4 text-[16px]">
            {data?.validEtaOrExtensionIndividualTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Do you have a multiple entry visa to Sri Lanka?
          </h2>
          <p className="feildvalue">
            {data?.multipleEntryVisaIndividualTourist}
          </p>
        </div>
      </div>
    </div>
  );
}
