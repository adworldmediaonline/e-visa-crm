import { ThirdPartyTouristMember } from "@/lib/type";
import React from "react";

interface StepTwoDetailsProps {
  data: ThirdPartyTouristMember[];
}

export default function StepTwo({ data }: StepTwoDetailsProps) {
  // const data = null;

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
              <p className="feildvalue">{e?.familyNameThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="feildvalue">
                {e?.givenNameThirdPartyTouristMember}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Title</h2>
              <p className="feildvalue">{e?.titleThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">{e?.dateOfBirthThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">{e?.genderThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Nationality</h2>
              <p className="feildvalue">{e?.nationalityThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Birth</h2>
              <p className="feildvalue">{e?.countryOfBirthThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Are you fully vaccinated for COVID 19
              </h2>
              <p className="feildvalue">
                {e?.covidVaccinatedThirdPartyTourist}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Address</h2>
              <p className="feildvalue">
                {e?.countryOfAddressThirdPartyTourist}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Occupation</h2>
              <p className="feildvalue">{e?.occupationThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Passport Number</h2>
              <p className="feildvalue">{e?.passportNumberThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Issue Date</h2>
              <p className="feildvalue">{e?.issueDateThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Expiry date</h2>
              <p className="feildvalue">{e?.expiryDateThirdPartyTourist}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Passport Front page (Bio data page) date
              </h2>
              <p className="feildvalue">{e?.passportImageThirdPartyTourist}</p>
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
              <p className="feildvalue">---</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="px-4 text-[16px]">---</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">---</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">---</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Relationship</h2>
              <p className="feildvalue">---</p>
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
              <p className="feildvalue">{e?.validResidenceThirdPartyTourist}</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="px-4 text-[16px]">
                {e?.validEtaOrExtensionThirdPartyTourist}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="feildvalue">
                {e?.multipleEntryVisaThirdPartyTourist}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
