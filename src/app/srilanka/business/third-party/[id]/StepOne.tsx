import { ThirdPartyBusiness } from "@/lib/type";
import React from "react";

interface StepOneDetailsProps {
  data: ThirdPartyBusiness;
}
export default function StepOne({ data }: StepOneDetailsProps) {
  // const data = null;

  return (
    <div>
      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Where you have been during last 14 days before this trip?
          </h2>
          <p className="feildvalue">{data?.whereHaveBeenThirdPartyBusiness}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Attended Arrrival Date</h2>
          <p className="px-4 text-[16px]">
            {data?.attendantArrivalDateThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of visit</h2>
          <p className="feildvalue">{data?.purposeOfVisitThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of Description</h2>
          <p className="feildvalue">
            {data?.PurposeDescriptionThirdPartyBusiness}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Port of departure</h2>
          <p className="feildvalue">
            {data?.portOfDepartureThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arilne/Vessel</h2>
          <p className="feildvalue">{data?.ArilineVesselThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Flight/Vessel Number</h2>
          <p className="feildvalue">
            {data?.flightVesselNumberThirdPartyBusiness}
          </p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">
          Contact Details of Applicant&apos;s Company
        </h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Company Name</h2>
          <p className="feildvalue">
            {data?.companyNameApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address</h2>
          <p className="feildvalue flex flex-col">
            <span>{data?.addressLineOneApplicantThirdPartyBusiness},</span>
            <span>{data?.addressLineTwoApplicantThirdPartyBusiness}</span>
          </p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">
            {data?.cityApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateApplicantThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">
            {data?.zipCodeApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">
            {data?.countryApplicantThirdPartyBusiness}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">
            {data?.telephoneApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">
            {data?.mobileApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">
            {data?.faxNumberApplicantThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailApplicantThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">
            {data?.alternateEmailApplicantThirdPartyBusiness}
          </p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">Contact Details of Sri Lankan Company</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Company Name</h2>
          <p className="feildvalue">
            {data?.companyNameSriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address</h2>
          <p className="feildvalue flex flex-col">
            <span>{data?.addressLineOneSriLankanThirdPartyBusiness},</span>
            <span>{data?.addressLineTwoSriLankanThirdPartyBusiness}</span>
          </p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">
            {data?.citySriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateSriLankanThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">
            {data?.zipCodeSriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">
            {data?.countrySriLankanThirdPartyBusiness}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">
            {data?.telephoneSriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">
            {data?.mobileSriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">
            {data?.faxNumberSriLankanThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailSriLankanThirdPartyBusiness}</p>
        </div>
      </div>
      <div className="pt-12">
        <h3 className="detail-title">Details of third party</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Type of Third Party</h2>
          <p className="feildvalue">
            {data?.partyTypeThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Surname/Family Name</h2>
          <p className="feildvalue">
            {data?.familyNameTypeOfThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Other/Given Names</h2>
          <p className="feildvalue">
            {data?.givenNameTypeOfThirdPartyBusiness}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address</h2>
          <p className="feildvalue flex flex-col">
            <span>{data?.addressLineOneThirdPartyBusiness},</span>
            <span>{data?.addressLineTwoThirdPartyBusiness}</span>
          </p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">{data?.cityThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">{data?.zipCodeThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">{data?.countryThirdPartyBusiness}</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">{data?.telephoneThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">{data?.mobileThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">{data?.faxNumberThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailThirdPartyBusiness}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">{data?.alternateEmailThirdPartyBusiness}</p>
        </div>
      </div>
    </div>
  );
}
