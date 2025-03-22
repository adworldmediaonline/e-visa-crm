import { apiEndpoints, fetchDataById } from '@/lib/api';
import { AustraliaVisaEntries } from '@/lib/type';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const data: AustraliaVisaEntries = await fetchDataById(
    apiEndpoints.AUSTRALIA_VISA_APPLICATION,
    id
  );

  const {
    travelDetails: {
      purposeOfStay,
      passengerNationality,
      plannedDate,
      portOfArrival,
    },
    passportDetails: {
      additionalCitizenship,
      citizen,
      dateOfExpiry,
      dateOfIssue,
      issuingAuthority,
      obtainedVisa,
      passportNumber,
    },
    travelInsurance: {
      insuranceFee,
      isTravelInsurance,
      returnDate,
      startDate,
      travelInsuranceTermsAndConditions,
    },
    backgroundQuestions: {
      criminalOffence,
      criminalOffenceDetails,
      offenceCharge,
      offenceChargeDetails,
    },
    personalDetails: {
      cityOfBirth,
      confirmEmailAddress,
      countryTerritoryOfBirth,
      dateOfBirth,
      emailAddress,
      gender,
      givenName,
      maritalStatus,
      surnameFamilyName,
    },
    vatInvoice: {
      companyCity,
      companyCountry,
      companyName,
      companyPostal,
      companyStreet,
      needVatInvoice,
      taxIdentificationNumber,
    },
    contactDetails: {
      address,
      apartmentNumber,
      cityTown,
      countryTerritory,
      houseNumber,
      phoneNumber,
      provinceState,
      zipPostalCode,
    },
    termsAndConditions,
  } = data;
  return (
    <div>
      <div>
        <h3 className="detail-title">Australia E-Visa Details</h3>
      </div>

      <div className="md:grid grid-cols-2 gap-4 p-4">
        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            Travel Details:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Purpose Of Stay</h2>
            <p className="feildvalue">{purposeOfStay}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Planned Date</h2>
            <p className="feildvalue">{plannedDate}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Passenger Nationality</h2>
            <p className="feildvalue">{passengerNationality}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Port Of Arrival</h2>
            <p className="feildvalue">{portOfArrival}</p>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            Personal Details:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Given Name</h2>
            <p className="feildvalue">{givenName}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Surname Family Name</h2>
            <p className="feildvalue">{surnameFamilyName}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Email Address</h2>
            <p className="feildvalue">{emailAddress}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Confirm Email Address</h2>
            <p className="feildvalue">{confirmEmailAddress}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Date Of Birth</h2>
            <p className="feildvalue">{dateOfBirth}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Country Territory Of Birth</h2>
            <p className="feildvalue">{countryTerritoryOfBirth}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">City Of Birth</h2>
            <p className="feildvalue">{cityOfBirth}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Marital Status</h2>
            <p className="feildvalue">{maritalStatus}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Gender</h2>
            <p className="feildvalue">{gender}</p>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            Passport Details:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Passport Number</h2>
            <p className="feildvalue">{passportNumber}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Issuing Authority</h2>
            <p className="feildvalue">{issuingAuthority}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Date Of Issue</h2>
            <p className="feildvalue">{dateOfIssue}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Date Of Expiry</h2>
            <p className="feildvalue">{dateOfExpiry}</p>
          </div>

          <div className="feildmain">
            <h2 className="feildclass">Citizen</h2>
            <p className="feildvalue">{citizen}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Additional Citizenship</h2>
            <p className="feildvalue">{additionalCitizenship}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Obtained Visa</h2>
            <p className="feildvalue">{obtainedVisa}</p>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            contact Details:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Address</h2>
            <p className="feildvalue">{address}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">House Number</h2>
            <p className="feildvalue">{houseNumber}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Apartment Number</h2>
            <p className="feildvalue">{apartmentNumber}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Zip Postal Code</h2>
            <p className="feildvalue">{zipPostalCode}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">City Town</h2>
            <p className="feildvalue">{cityTown}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Province State</h2>
            <p className="feildvalue">{provinceState}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Country Territory</h2>
            <p className="feildvalue">{countryTerritory}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Phone Number</h2>
            <p className="feildvalue">{phoneNumber}</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            Background Questions:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Criminal Of fence</h2>
            <p className="feildvalue">{criminalOffence}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Criminal Of fence Details</h2>
            <p className="feildvalue">{criminalOffenceDetails}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Offence Charge</h2>
            <p className="feildvalue">{offenceCharge}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Offence Charge Details</h2>
            <p className="feildvalue">{offenceChargeDetails}</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-lg text-secondary">vatInvoice:</h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Need Vat Invoice</h2>
            <p className="feildvalue">{needVatInvoice}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Tax Identification Number</h2>
            <p className="feildvalue">{taxIdentificationNumber}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Company Name</h2>
            <p className="feildvalue">{companyName}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Company Country</h2>
            <p className="feildvalue">{companyCountry}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Company City</h2>
            <p className="feildvalue">{companyCity}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Company Postal</h2>
            <p className="feildvalue">{companyPostal}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Company Street</h2>
            <p className="feildvalue">{companyStreet}</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-lg text-secondary">
            Travel Insurance:
          </h2>
          <div className="grid grid-cols-2 border-2 border-primary p-2 bg-primary text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Is Travel Insurance</h2>
            <p className="feildvalue">{isTravelInsurance}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Start Date</h2>
            <p className="feildvalue">{startDate}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Return Date</h2>
            <p className="feildvalue">{returnDate}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">Insurance Fee</h2>
            <p className="feildvalue">{insuranceFee}</p>
          </div>
          <div className="feildmain">
            <h2 className="feildclass">
              Travel Insurance Terms And Conditions
            </h2>
            <p className="feildvalue">{travelInsuranceTermsAndConditions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
