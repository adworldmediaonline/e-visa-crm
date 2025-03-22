"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { BusinessGroup } from "@/lib/type";

interface TabsContainerProps {
  data: BusinessGroup;
}
export default function TabsContainer({ data }: TabsContainerProps) {
  // console.log("data container tab", data);

  return (
    <div>
      <Tabs defaultValue="step1">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="step1">Step1</TabsTrigger>
          <TabsTrigger value="step2">Step2</TabsTrigger>
        </TabsList>
        <TabsContent value="step1">
          <StepOne data={data} />
        </TabsContent>
        <TabsContent value="step2">
          <StepTwo data={data?.members} />
        </TabsContent>
      </Tabs>{" "}
    </div>
  );
}
