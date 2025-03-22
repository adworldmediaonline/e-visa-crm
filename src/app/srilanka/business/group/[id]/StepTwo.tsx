import {
  BusinessGroup,
  BusinessGroupMember,
  GroupTouristMember,
} from "@/lib/type";
import React from "react";

interface groupTouristMemberProps {
  data: BusinessGroupMember[];
}

export default function StepTwo({ data }: groupTouristMemberProps) {
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
              <p className="feildvalue">{e?.familyNameBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="feildvalue">{e?.givenNameBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Title</h2>
              <p className="feildvalue">{e?.titleBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">{e?.dateOfBirthBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">{e?.genderBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Nationality</h2>
              <p className="feildvalue">{e?.nationalityBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Birth</h2>
              <p className="feildvalue">
                {e?.countryOfBirthBusinessGroupMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Are you fully vaccinated for COVID 19
              </h2>
              <p className="feildvalue">
                {e?.covidVaccinatedBusinessGroupMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Address</h2>
              <p className="feildvalue">
                {e?.countryOfAddressBusinessGroupMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Occupation</h2>
              <p className="feildvalue">{e?.occupationBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Passport Number</h2>
              <p className="feildvalue">
                {e?.passportNumberBusinessGroupMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Issue Date</h2>
              <p className="feildvalue">{e?.issueDateBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Expiry date</h2>
              <p className="feildvalue">{e?.expiryDateBusinessGroupMember}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Passport Front page (Bio data page) date
              </h2>
              <img
                className="feildvalue"
                src={e?.passportImageBusinessGroupMember}
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
              <p className="feildvalue">
                {e?.validResidenceBusinessGroupMember}
              </p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="px-4 text-[16px]">
                {e?.validEtaOrExtensionBusinessGroupMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="feildvalue">
                {e?.multipleEntryVisaBusinessGroupMember}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
