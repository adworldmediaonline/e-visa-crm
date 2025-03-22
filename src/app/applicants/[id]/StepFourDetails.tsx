import FieldMain from '@/components/common/FieldMain';
import { Step4Form } from '@/lib/type';

interface StepFourDetailsProps {
  data: Step4Form;
}

export default function StepFourDetails({ data }: StepFourDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="text-black font-semibold text-xl m-4 pb-2 border-b-2 border-[#ffaa17]">
          E-Visa Step-Four Details :
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <FieldMain fieldName="Id" fieldData={data?._id} />
          <FieldMain fieldName="Form Id" fieldData={data?.formId} />
          <FieldMain fieldName="Visa Type" fieldData={data?.visaType} />
          <FieldMain fieldName="Visa Service" fieldData={data?.visaService} />
          <FieldMain fieldName="Contact No." fieldData={data?.contactNo} />
          <FieldMain
            fieldName="Places To Visit"
            fieldData={data?.placesToVisit}
          />
          <FieldMain
            fieldName="Places To Visit2"
            fieldData={data?.placesToVisit2}
          />
          <FieldMain
            fieldName="Duration Of Visa"
            fieldData={data?.durationOfVisa}
          />
          <FieldMain
            fieldName="Number Of Entries"
            fieldData={data?.numberOfEntries}
          />
          <FieldMain
            fieldName="Port Of Arrival"
            fieldData={data?.portOfArrival}
          />
          <FieldMain
            fieldName="Expected Port Of Exit"
            fieldData={data?.expectedPortOfExit}
          />
          <FieldMain
            fieldName="Visited India Before"
            fieldData={data?.visitedIndiaBefore}
          />
          <FieldMain
            fieldName="Visited India Before Visa Address"
            fieldData={data?.visitedIndiaBeforeVisaAddress}
          />
          <FieldMain
            fieldName="Visited India Before Cities Visited In India"
            fieldData={data?.visitedIndiaBeforeCitiesVisitedInIndia}
          />
          <FieldMain
            fieldName="Visited India Before Last Indian VisaNo"
            fieldData={data?.visitedIndiaBeforeLastIndianVisaNo}
          />
          <FieldMain
            fieldName="Visited India Before Type Of Visa"
            fieldData={data?.visitedIndiaBeforeTypeOfVisa}
          />
          <FieldMain
            fieldName="Visited India Before Place Of Issue"
            fieldData={data?.visitedIndiaBeforePlaceOfIssue}
          />
          <FieldMain
            fieldName="Visited India Before Date Of Issue"
            fieldData={data?.visitedIndiaBeforeDateOfIssue}
          />
        </div>

        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white  px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>

          <FieldMain
            fieldName="Permission Refused"
            fieldData={data?.permissionRefused}
          />
          <FieldMain
            fieldName="Refusal Details"
            fieldData={data?.refusalDetails}
          />
          <FieldMain
            fieldName="Name of the Hospital where Medical treatment is to be carried out"
            fieldData={data?.eMedicalNameOfHospital}
          />
          <FieldMain
            fieldName="Address of Hospital"
            fieldData={data?.eMedicalAddressOfHospital}
          />
          <FieldMain
            fieldName="Phone No. of Hospital"
            fieldData={data?.eMedicalPhoneOfHospital}
          />
          <FieldMain
            fieldName="State Of Hospital"
            fieldData={data?.eMedicalStateOfHospital}
          />
          <FieldMain
            fieldName="District Of Hospital"
            fieldData={data?.eMedicalDistrictOfHospital}
          />
          <FieldMain
            fieldName="Type of Medical Treatment required"
            fieldData={data?.eMedicalTypeOfMedicalTreatment}
          />
          {/* Details of Purpose (eCONFERENCE VISA)  */}
          <FieldMain
            fieldName="eBusiness Company Name"
            fieldData={data?.eBusinessCompanyName}
          />
          <FieldMain
            fieldName="eBusiness Company Address"
            fieldData={data?.eBusinessCompanyAddress}
          />
          <FieldMain
            fieldName="eBusiness Company Phone"
            fieldData={data?.eBusinessCompanyPhone}
          />
          <FieldMain
            fieldName="eBusiness Company Website"
            fieldData={data?.eBusinessCompanyWebsite}
          />
          <FieldMain
            fieldName="eBusiness Company Natures"
            fieldData={data?.eBusinessCompanyNatures}
          />
          <FieldMain
            fieldName="eBusiness Attend Tech Meeting Name"
            fieldData={data?.eBusinessAttendTechMeetingName}
          />
          <FieldMain
            fieldName="eBusiness Attend Tech Meeting Address"
            fieldData={data?.eBusinessAttendTechMeetingAddress}
          />
          <FieldMain
            fieldName="eBusiness Attend Tech Meeting Phone"
            fieldData={data?.eBusinessAttendTechMeetingPhone}
          />
          <FieldMain
            fieldName="eBusiness Recruit Manpower Name contact Company Representative"
            fieldData={
              data?.eBusinessRecruitManpowerNamecontactCompanyRepresentative
            }
          />
          <FieldMain
            fieldName="eBusiness Recruit Manpower Nature Of Job"
            fieldData={data?.eBusinessRecruitManpowerNatureOfJob}
          />
          <FieldMain
            fieldName="eBusiness Recruit Manpower Places Recruitment Conducted"
            fieldData={data?.eBusinessRecruitManpowerPlacesRecruitmentConducted}
          />

          <FieldMain
            fieldName="eBusiness Participation In Exhibitions Name And Address"
            fieldData={data?.eBusinessParticipationInExhibitionsNameAndAddress}
          />

          <FieldMain
            fieldName="eBusiness Conducting Tours Name And Address"
            fieldData={data?.eBusinessConductingToursNameAndAddress}
          />
          <FieldMain
            fieldName="eBusiness Conducting Tours Cities"
            fieldData={data?.eBusinessConductingToursCities}
          />
          <FieldMain
            fieldName="eBusiness Conducting Tours Travel Agency Name"
            fieldData={data?.eBusinessConductingToursTravelAgencyName}
          />
          <FieldMain
            fieldName="eBusiness Conducting Tours Travel Agency Phone"
            fieldData={data?.eBusinessConductingToursTravelAgencyPhone}
          />
          <FieldMain
            fieldName="eBusiness Conducting Tours Travel Agency Address"
            fieldData={data?.eBusinessConductingToursTravelAgencyAddress}
          />
          <FieldMain
            fieldName="eMedical Attendant Name Visa Holder"
            fieldData={data?.eMedicalAttendantNameVisaHolder}
          />
          <FieldMain
            fieldName="eMedical Attendant App Or Visa"
            fieldData={data?.eMedicalAttendantAppOrVisa}
          />

          <FieldMain
            fieldName="eMedical Attendant Visa Number Of Visa Holder"
            fieldData={data?.eMedicalAttendantVisaNumberOfVisaHolder}
          />
          <FieldMain
            fieldName="eMedical Attendant Application Id Of Visa Holder"
            fieldData={data?.eMedicalAttendantApplicationIdOfVisaHolder}
          />
          <FieldMain
            fieldName="eMedical Attendant Passport Number Of Visa Holder"
            fieldData={data?.eMedicalAttendantPassportNumberOfVisaHolder}
          />
          <FieldMain
            fieldName="eMedical Attendant Dob Of Visa Holder"
            fieldData={data?.eMedicalAttendantDobOfVisaHolder}
          />
          <FieldMain
            fieldName="eMedical Attendant Nationality Of Visa Holder"
            fieldData={data?.eMedicalAttendantNationalityOfVisaHolder}
          />

          <FieldMain
            fieldName="eConference Name Of Conference"
            fieldData={data?.eConferenceNameOfConference}
          />
          <FieldMain
            fieldName="eConference Start Date"
            fieldData={data?.eConferenceStartDate}
          />
          <FieldMain
            fieldName="eConference End Date"
            fieldData={data?.eConferenceEndDate}
          />

          <FieldMain
            fieldName="eConference Address"
            fieldData={data?.eConferenceAddress}
          />
          <FieldMain
            fieldName="eConference State"
            fieldData={data?.eConferenceState}
          />
          <FieldMain
            fieldName="eConference District"
            fieldData={data?.eConferenceDistrict}
          />

          <FieldMain
            fieldName="eConference Pincode"
            fieldData={data?.eConferencePincode}
          />

          <FieldMain
            fieldName="eConference Name Of Organizer"
            fieldData={data?.eConferenceNameOfOrganizer}
          />
          <FieldMain
            fieldName="eConference Address Of Organizer"
            fieldData={data?.eConferenceAddressOfOrganizer}
          />

          <FieldMain
            fieldName="eConference Phone Of Organizer"
            fieldData={data?.eConferencePhoneOfOrganizer}
          />
          <FieldMain
            fieldName="eConference Email Of Organizer"
            fieldData={data?.eConferenceEmailOfOrganizer}
          />

          <FieldMain>
            <div className="feildmain">
              <h2 className="feildclass">Country Visited In Last 10 Years</h2>
              <p className="px-4 text-[14px]">
                {data?.countryVisitedInLast10Years?.map((e, i) => (
                  <ul key={i} className="list-disc  list-inside">
                    <li>{e}</li>
                  </ul>
                ))}
              </p>
            </div>
          </FieldMain>

          <FieldMain
            fieldName="Visited SAARC Countries"
            fieldData={data?.visitedSAARCCountries}
          />
          {data?.visitedSAARCCountriesLists?.length > 0 && (
            <div className="text-sm border space-y-2 py-2">
              <h2 className="font-semibold text-[14px] border-black px-4">
                Visited SAARC Countries Lists
              </h2>
              <table className="table-auto w-full text-center border-separate">
                <thead>
                  <tr className="bg-gray-200">
                    {/* <th>Id</th> */}
                    <th>Country</th>
                    <th>Select Year</th>
                    <th>No. Of Visits</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.visitedSAARCCountriesLists?.map((e, i) => (
                    <tr key={i}>
                      {/* <td className="text-xs">{e._id}</td> */}
                      <td>{e.saarcCountryName}</td>
                      <td>{e.selectYear}</td>
                      <td>{e.numberOfVisits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {data?.visitedSAARCCountriesLists?.length === 0 && (
            <div className="text-center p-4">No data available</div>
          )}
          <FieldMain
            fieldName="Reference Name In India"
            fieldData={data?.referenceNameInIndia}
          />
          <FieldMain
            fieldName="Reference Address"
            fieldData={data?.referenceAddress}
          />
          <FieldMain
            fieldName="Reference Phone No."
            fieldData={data?.referencePhone}
          />
          <FieldMain
            fieldName="Reference Name In Home Country"
            fieldData={data?.referenceNameInHomeCountry}
          />
          <FieldMain
            fieldName="Reference Address In Home Country"
            fieldData={data?.referenceAddressInHomeCountry}
          />
          <FieldMain
            fieldName="Reference Phone In Home Country"
            fieldData={data?.referencePhoneInHomeCountry}
          />
        </div>
      </div>
    </div>
  );
}
