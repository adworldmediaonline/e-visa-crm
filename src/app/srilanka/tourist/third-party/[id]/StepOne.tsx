import { ThirdPartyTourist } from "@/lib/type";
import React from "react";

interface StepOneDetailsProps {
  data: ThirdPartyTourist;
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
          <p className="feildvalue">{data?.whereHaveBeenThirdPartyTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Attended Arrrival Date</h2>
          <p className="px-4 text-[16px]">
            {data?.attendantArrivalDateThirdPartyTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of visit</h2>
          <p className="feildvalue">{data?.purposeOfVisitThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">No. of Days Visa Required</h2>
          <p className="feildvalue">{data?.visaValidPeriodThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Port of departure</h2>
          <p className="feildvalue">{data?.portOfDepartureThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arilne/Vessel</h2>
          <p className="feildvalue">{data?.arilineVesselThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Flight/Vessel Number</h2>
          <p className="feildvalue">
            {data?.flightVesselNumberThirdPartyTourist}
          </p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">Third Party Detail</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Type of Third Party</h2>
          <p className="feildvalue">{data?.partyThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Surname/Family Name</h2>
          <p className="feildvalue">
            {data?.familyNameTypeOfThirdPartyTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Other/Given Names</h2>
          <p className="feildvalue">{data?.givenNameTypeOfThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address</h2>
          <p className="feildvalue flex flex-col">
            <span>{data?.addressLineOneThirdPartyTourist},</span>
            <span>{data?.addressLineTwoThirdPartyTourist}</span>
          </p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">{data?.cityThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">{data?.zipCodeThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">{data?.countryThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address In Sri Lanka</h2>
          <p className="feildvalue">
            {data?.addressInSrilankaThirdPartyTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">{data?.telephoneThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">{data?.mobileThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">{data?.faxNumberThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailThirdPartyTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">{data?.alternateEmailThirdPartyTourist}</p>
        </div>
      </div>
    </div>
  );
}
