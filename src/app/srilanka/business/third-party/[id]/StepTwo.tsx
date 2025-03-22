import { ThirdPartyBusinessMember, ThirdPartyTouristMember } from "@/lib/type";
import React from "react";

interface StepTwoDetailsProps {
  data: ThirdPartyBusinessMember[];
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
              <p className="feildvalue">{e?.familyNameThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Other/Given Names</h2>
              <p className="feildvalue">
                {e?.givenNameThirdPartyBusiness}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Title</h2>
              <p className="feildvalue">{e?.titleThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Date of Birth</h2>
              <p className="feildvalue">{e?.dateOfBirthThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Gender</h2>
              <p className="feildvalue">{e?.genderThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Nationality</h2>
              <p className="feildvalue">{e?.nationalityThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Birth</h2>
              <p className="feildvalue">{e?.countryOfBirthThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Are you fully vaccinated for COVID 19
              </h2>
              <p className="feildvalue">
                {e?.covidVaccinatedThirdPartyBusiness}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Country of Address</h2>
              <p className="feildvalue">
                {e?.countryOfAddressThirdPartyBusiness}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Occupation</h2>
              <p className="feildvalue">{e?.occupationThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Passport Number</h2>
              <p className="feildvalue">{e?.passportNumberThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Issue Date</h2>
              <p className="feildvalue">{e?.issueDateThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">Expiry date</h2>
              <p className="feildvalue">{e?.expiryDateThirdPartyBusiness}</p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Passport Front page (Bio data page) date
              </h2>
              <p className="feildvalue">{e?.passportImageThirdPartyBusiness}</p>
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
              <p className="feildvalue">{e?.validResidenceThirdPartyBusiness}</p>
            </div>

            <div className="feildmain items-center">
              <h2 className="feildclass">
                Are you currently in Sri Lanka with a valid ETA or obtained an
                extension of visa?
              </h2>
              <p className="px-4 text-[16px]">
                {e?.validEtaOrExtensionThirdPartyBusiness}
              </p>
            </div>
            <div className="feildmain">
              <h2 className="feildclass">
                Do you have a multiple entry visa to Sri Lanka?
              </h2>
              <p className="feildvalue">
                {e?.multipleEntryVisaThirdPartyBusiness}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
