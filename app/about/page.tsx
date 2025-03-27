"use client";

import Image from "next/image";
import manWIthRobot from "@/public/images/man-with-robot.png";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import SectionTitle from "@/components/ui/sectionTitle";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StoreOverview from "@/components/about/StoreOverview";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="hidden h-screen w-[500px] flex-col items-center justify-center bg-[#e0f5ff] p-9 lg:flex ">
        <Wrapper>
        <Breadcrumbs curentPage="про нас"/>
        <SectionTitle title="Про нас"/>
        </Wrapper>
      </section>

      {/* second half  */}

      <section className="flex h-full w-full flex-col p-9 lg:h-auto">
      <Wrapper>
        <Breadcrumbs curentPage="про нас"/>
        <SectionTitle title="Про нас"/>
        <StoreOverview/>
        </Wrapper>
      </section>
    </section>
  );
}
