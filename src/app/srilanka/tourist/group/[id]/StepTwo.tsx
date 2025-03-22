import { GroupTouristMember } from "@/lib/type";
import React from "react";

interface groupTouristMemberProps {
  data: GroupTouristMember[];
}

export default function StepTwo({ data }: groupTouristMemberProps) {
  // const data = null;

  // console.log("data member ", data);

  return (
    <div className="space-y-4">
      {data?.map((e, i) => (
        <div key={i}>
          <div className="">
            <h3 className="detail-title">Member Information</h3>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
              <h2 className="font-semibold border-r-2 border-white px-4">
                Field
              </h2>
              <p className="px-4 font-semibold">Data</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Surname/Family Name</h2>
              <p className="feildvalue">{e?._id}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="feildvalue">{e?.givenNameGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Title</h2>
              <p className="feildvalue">{e?.titleGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">{e?.dateOfBirthGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">{e?.genderGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Nationality</h2>
              <p className="feildvalue">{e?.nationalityGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Birth</h2>
              <p className="feildvalue">{e?.countryOfBirthGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Are you fully vaccinated for COVID 19
              </h2>
              <p className="feildvalue">{e?.covidVaccinatedGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Address</h2>
              <p className="feildvalue">{e?.countryOfAddressGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Occupation</h2>
              <p className="feildvalue">{e?.occupationGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Passport Number</h2>
              <p className="feildvalue">{e?.passportNumberGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Issue Date</h2>
              <p className="feildvalue">{e?.issueDateGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Expiry date</h2>
              <p className="feildvalue">{e?.expiryDateGroupTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Passport Front page (Bio data page) date
              </h2>
              <img
                className="feildvalue"
                src={e?.passportImageGroupTourist}
                alt="passport"
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
              <h2 className="font-semibold border-r-2 border-white  px-4">
                Field
              </h2>
              <p className="px-4 font-semibold">Data</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Surname/Family Name</h2>
              <p className="feildvalue">data?.</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="px-4 text-[16px]">data?.</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">data?.</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">data?.</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Relationship</h2>
              <p className="feildvalue">data?.</p>
            </div>
          </div>

          <div className="pt-12">
            <h3 className="detail-title">declaration</h3>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
              <h2 className="font-semibold border-r-2 border-white  px-4">
                Field
              </h2>
              <p className="px-4 font-semibold">Data</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Do you have a valid residence visa to Sri Lanka?
              </h2>
              <p className="feildvalue">{e?.issueDateGroupTourist}</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="px-4 text-[16px]">
                {e?.validEtaOrExtensionGroupTourist}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="feildvalue">{e?.multipleEntryVisaGroupTourist}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
