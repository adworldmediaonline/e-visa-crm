import { apiEndpoints, fetchDataById } from "@/lib/api";
import { BusinessGroup } from "@/lib/type";
import React from "react";

interface StepOneDetailsProps {
  data: BusinessGroup;
}

export default function StepOne({ data }: StepOneDetailsProps) {
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
          <p className="feildvalue">{data?.whereHaveBeenBusinessGroup}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Attended Arrrival Date</h2>
          <p className="px-4 text-[16px]">
            {data?.attendantArrivalDateBusinessGroup}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose of visit</h2>
          <p className="feildvalue">{data?.purposeOfVisitBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Purpose Description</h2>
          <p className="feildvalue">
            {data?.purposeOfDescriptionBusinessGroup}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Port of departure</h2>
          <p className="feildvalue">{data?.portOfDepartureBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arilne/Vessel</h2>
          <p className="feildvalue">{data?.arilineVesselBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Flight/Vessel Number</h2>
          <p className="feildvalue">{data?.flightVesselNumberBusinessGroup}</p>
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
          <h2 className="feildclass">Company Name</h2>
          <p className="feildvalue">{data?.companyNameBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address Line One</h2>
          <p className="feildvalue">{data?.addressLineOneBusinessGroup}</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Address Line Two</h2>
          <p className="feildvalue">{data?.addressLineTwoBusinessGroup}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">{data?.cityBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">{data?.stateBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">{data?.zipCodeBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country</h2>
          <p className="feildvalue">{data?.countryBusinessGroup}</p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">{data?.emailBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Alternate Email Address</h2>
          <p className="feildvalue">{data?.alternateEmailBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">{data?.telephoneBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">{data?.mobileBusinessGroup}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">{data?.faxNumberBusinessGroup}</p>
        </div>
      </div>
      <div className="pt-12">
        <h3 className="detail-title">
          Contact Details of the Sri Lankan Company
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
            {data?.companyNameBusinessGroupOfSrilankaCompany}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Address Line One</h2>
          <p className="feildvalue">
            {data?.addressLineOneBusinessGroupOfSrilankaCompany}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Address Line Two</h2>
          <p className="feildvalue">
            {data?.addressLineTwoBusinessGroupOfSrilankaCompany}
          </p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">City</h2>
          <p className="px-4 text-[16px]">
            {data?.cityBusinessGroupOfSrilankaCompany}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">State</h2>
          <p className="feildvalue">
            {data?.stateBusinessGroupOfSrilankaCompany}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Zip/Postal Code</h2>
          <p className="feildvalue">
            {data?.zipCodeBusinessGroupOfSrilankaCompany}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Email Address</h2>
          <p className="feildvalue">
            {data?.emailBusinessGroupOfSrilankaCompany}
          </p>
        </div>

        <div className="feildmain">
          <h2 className="feildclass">Telephone No.</h2>
          <p className="feildvalue">
            {data?.telephoneBusinessGroupOfSrilankaCompany}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Mobile No.</h2>
          <p className="feildvalue">
            {data?.mobileBusinessGroupOfSrilankaCompany}
          </p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Fax Number</h2>
          <p className="feildvalue">
            {data?.faxNumberBusinessGroupOfSrilankaCompany}
          </p>
        </div>
      </div>
    </div>
  );
}
