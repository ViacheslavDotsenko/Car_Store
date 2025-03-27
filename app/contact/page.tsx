"use client";

import Image from "next/image";
import boyAndGirl from "@/public/images/boy-and-girl.png";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import ContactUs from "@/components/contact/ContactUs";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col lg:flex-row">      
        <Wrapper>          
          <ContactUs/>          
        </Wrapper>   

      {/* second half

      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#ffefd6] p-9 lg:flex">
        <Image src={boyAndGirl} alt="Boy and girl playing with robot" />
      </section> */}
    </section>
  );
}
