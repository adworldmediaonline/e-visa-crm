import { apiEndpoints, fetchDataById } from '@/lib/api';
import { TurkeyVisaEntries } from '@/lib/type';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data: TurkeyVisaEntries = await fetchDataById(
    apiEndpoints.TURKEY_VISA_APPLICATION,
    id
  );

  return (
    <div>
      <div className="py-3 text-2xl font-bold text-center">
        Full Detail Page
      </div>

      <div>
        <h3 className="detail-title">ITINERARY</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Country Citizenship</h2>
          <p className="feildvalue">{data?.countryCitizenship}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Arrival Date</h2>
          <p className="feildvalue">{data?.arrivalDate}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Number Of Entries</h2>
          <p className="feildvalue">{data?.numberOfEntries}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Visa Duration</h2>
          <p className="feildvalue">{data?.visaDuration}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Your Stay Cannot Exceed</h2>
          <p className="feildvalue">{data?.yourStayCannotExceed}</p>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="detail-title">PASSPORT DETAILS</h3>
      </div>

      <div className="p-4">
        {data?.passportDetails?.map(passport => (
          <div className="pt-4" key={passport._id}>
            <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
              <h2 className="font-semibold border-r-2 border-white  px-4">
                Field
              </h2>
              <p className="px-4 font-semibold">Data</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Full Name</h2>
              <p className="feildvalue">{passport?.fullName}</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">Nationality</h2>
              <p className="px-4 text-[16px]">{passport?.nationality}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Passport Number</h2>
              <p className="feildvalue">{passport?.passportNumber}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date Of Birth</h2>
              <p className="feildvalue">{passport?.dateOfBirth}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12">
        <h3 className="detail-title">CONTACT DETAILS</h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
          <h2 className="font-semibold border-r-2 border-white  px-4">Field</h2>
          <p className="px-4 font-semibold">Data</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Full Name</h2>
          <p className="feildvalue">{data?.contactDetailsFullName}</p>
        </div>

        <div className="feildmain items-center">
          <h2 className="feildclass">Address</h2>
          <p className="px-4 text-[16px]">{data?.contactDetailsAddress}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Email</h2>
          <p className="feildvalue">{data?.contactDetailsEmail}</p>
        </div>
        <div className="feildmain">
          <h2 className="feildclass">Contact Number</h2>
          <p className="feildvalue">{data?.contactDetailsContactNumber}</p>
        </div>
      </div>
    </div>
  );
}
