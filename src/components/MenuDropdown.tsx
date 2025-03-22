"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight, UsersRound } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function MenuDropdown() {
  const pathname = usePathname();

  const activeNav = (url: string) => (pathname === url ? "bg-white shadow-md text-primary py-3 px-5 rounded-xl " : "");
  return (
    <>
      <Collapsible>
        <CollapsibleTrigger className=" flex justify-between items-center">
          <div className="navtitle">
            <Image width={40} height={40} src="/images/srilanka.png" alt="" />
            <h2 className="col-span-3">Srilanka</h2>
          </div>
          <div>
            <ChevronRight />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4">
          <Collapsible className="pt-3 ">
            <CollapsibleTrigger className=" px-12 font-bold text-lg ">
              Tourist
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className=" px-12 py-3 space-y-5">
                <li className="font-semibold"> 
                  <Link href="/srilanka/tourist/individual" className={`${activeNav("/srilanka/tourist/individual")} `}>
                    Individual
                  </Link>
                </li>
                <li className="font-semibold">
                <Link href="/srilanka/tourist/group" className={`${activeNav("/srilanka/tourist/group")} `}>
                   Group
                   </Link>
                   </li>
                <li className="font-semibold">
                <Link href="/srilanka/tourist/third-party" className={`${activeNav("/srilanka/tourist/third-party")} `}>
                 Third Party
                </Link>
               </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className=" px-12 font-bold text-lg ">
              Business
            </CollapsibleTrigger>
            <CollapsibleContent>
            <ul className=" px-12 py-3 space-y-5">
                <li className="font-semibold"> 
                  <Link href="/srilanka/business/individual" className={`${activeNav("/srilanka/business/individual")} `}>
                    Individual
                  </Link>
                </li>
                <li className="font-semibold">
                <Link href="/srilanka/business/group" className={`${activeNav("/srilanka/business/group")} `}>
                   Group
                   </Link>
                   </li>
                <li className="font-semibold">
                <Link href="/srilanka/business/third-party" className={`${activeNav("/srilanka/business/third-party")} `}>
                 Third Party
                </Link>
               </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}
