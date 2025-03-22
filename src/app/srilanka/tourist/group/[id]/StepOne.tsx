import { apiEndpoints, fetchDataById } from "@/lib/api";
import { GroupTourist } from "@/lib/type";
import React from "react";



interface StepOneDetailsProps {
  data: GroupTourist;
}

export default function StepOne({ data }: StepOneDetailsProps) {
  // const data = null;

  // const data: GroupTourist = await fetchDataById(
  //   apiEndpoints.SRILANKA_VISA_TOURISM_GROUP,
  //   "slvisa4179679"
  // );
  // console.log("data:", data);

  return (
    <div>
      <div className="p-4 ">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">
            Where you have been during last 14 days before this trip?
          </h2>
          <p className="feildvalue">{data?.whereHaveBeenGroupTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Attended Arrrival Date</h2>
          <p className="px-4 text-[16px]">
            {data?.attendantArrivalDateGroupTourist}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of visit</h2>
          <p className="feildvalue">{data?.purposeOfVisitGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">No. of Days Visa Required</h2>
          <p className="feildvalue">{data?.visaValidPeriodGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Port of departure</h2>
          <p className="feildvalue">{data?.portOfDepartureGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arilne/Vessel</h2>
          <p className="feildvalue">{data?.ArilineVesselGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Flight/Vessel Number</h2>
          <p className="feildvalue">{data?.flightVesselNumberGroupTourist}</p>
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
          <h2 className="feildclass">Address Line One</h2>
          <p className="feildvalue">{data?.addressLineOneGroupTourist}</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Address Line Two</h2>
          <p className="feildvalue">{data?.addressLineTwoGroupTourist}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">{data?.cityGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">{data?.zipCodeGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">{data?.countryGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address In Sri Lanka</h2>
          <p className="feildvalue">{data?.addressInSrilankaGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">{data?.alternateEmailGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">{data?.telephoneGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">{data?.mobileGroupTourist}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">{data?.faxNumberGroupTourist}</p>
        </div>
      </div>
    </div>
  );
}
