'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApplicantsFormData } from '@/lib/type';
import StepOneDetails from './StepOneDetails';
import StepTwoDetails from './StepTwoDetails';
import StepThreeDetails from './StepThreeDetails';
import StepFourDetails from './StepFourDetails';
import StepFiveDetails from './StepFiveDetails';
import StepSixDetails from './StepSixDetails';

interface TabsContainerProps {
  data: ApplicantsFormData;
}

export default function TabsContainer({ data }: TabsContainerProps) {
  return (
    <div>
      <Tabs defaultValue="step1">
        <TabsList className="grid w-full grid-cols-8 sticky top-0">
          <TabsTrigger value="step1">Step1</TabsTrigger>
          <TabsTrigger value="step2">
            {data?.step2 ? 'step2' : 'not completed'}
          </TabsTrigger>
          <TabsTrigger value="step3">
            {data?.step3 ? 'step3' : 'not completed'}
          </TabsTrigger>
          <TabsTrigger value="step4">
            {data?.step4 ? 'step4' : 'not completed'}
          </TabsTrigger>
          <TabsTrigger value="step5">
            {data?.step5 ? 'step5' : 'not completed'}
          </TabsTrigger>
          <TabsTrigger value="step6">
            {data?.step6 ? 'step6' : 'not completed'}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="step1">
          <StepOneDetails data={data} />
        </TabsContent>
        <TabsContent value="step2">
          <StepTwoDetails data={data?.step2} />
        </TabsContent>
        <TabsContent value="step3">
          <StepThreeDetails data={data?.step3} />
        </TabsContent>
        <TabsContent value="step4">
          <StepFourDetails data={data?.step4} />
        </TabsContent>
        <TabsContent value="step5">
          <StepFiveDetails data={data?.step5} />
        </TabsContent>
        <TabsContent value="step6">
          <StepSixDetails data={data?.step6} />
        </TabsContent>
      </Tabs>{' '}
    </div>
  );
}
