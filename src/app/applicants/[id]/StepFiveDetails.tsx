import FieldMain from '@/components/common/FieldMain';
import { Step5Form } from '@/lib/type';

interface StepFiveDetailsProps {
  data: Step5Form;
}
export default function StepFiveDetails({ data }: StepFiveDetailsProps) {
  return (
    <div>
      <div>
        <h3 className="detail-title">E-Visa Step-Five Details</h3>
      </div>

      <div className="md:grid grid-cols-2 gap-4 p-4">
        <div className="">
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <FieldMain fieldName="Id" fieldData={data?._id} />
          <FieldMain fieldName="Form Id" fieldData={data?.formId} />
          <FieldMain
            fieldName="Have You Been Arrested"
            fieldData={data?.haveYouBeenArrested}
          />
          <FieldMain
            fieldName="Have You Been Refused Entry"
            fieldData={data?.haveYouBeenRefusedEntry}
          />
          <FieldMain
            fieldName="Have You Been Engaged In Trafficking"
            fieldData={data?.haveYouBeenEngagedInTrafficking}
          />
          <FieldMain
            fieldName="Have You Been Engaged In Crime"
            fieldData={data?.haveYouBeenEngagedInCrime}
          />
          <FieldMain
            fieldName="Have You Expressed Views"
            fieldData={data?.haveYouExpressedViews}
          />
          <FieldMain
            fieldName="Have You Sought Asylum"
            fieldData={data?.haveYouSoughtAsylum}
          />
          <FieldMain
            fieldName="Declaration"
            fieldData={data?.declaration ? 'True' : ''}
          />
          <FieldMain
            fieldName="Have You Been Arrested Input"
            fieldData={data?.haveYouBeenArrestedInput}
          />
        </div>

        <div>
          <div className="grid grid-cols-2 border-2 border-[#ffaa17] p-2 bg-[#ffaa17] text-white">
            <h2 className="font-semibold border-r-2 border-white  px-4">
              Field
            </h2>
            <p className="px-4 font-semibold">Data</p>
          </div>
          <FieldMain
            fieldName="Have You Been Refused Entry Input"
            fieldData={data?.haveYouBeenRefusedEntryInput}
          />
          <FieldMain
            fieldName="Have You Been Engaged In Trafficking Input"
            fieldData={data?.haveYouBeenEngagedInTraffickingInput}
          />
          <FieldMain
            fieldName="Have You Been Engaged In Crime Input"
            fieldData={data?.haveYouBeenEngagedInCrimeInput}
          />
          <FieldMain
            fieldName="Have You Expressed Views Input"
            fieldData={data?.haveYouExpressedViewsInput}
          />
          <FieldMain
            fieldName="Have You Sought Asylum Input"
            fieldData={data?.haveYouSoughtAsylumInput}
          />
        </div>
      </div>
    </div>
  );
}
