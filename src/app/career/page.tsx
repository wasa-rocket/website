import React, { use, useEffect, useState } from "react";
import Links from "@/components/career/links";
import Calendar from "@/components/career/calendar";
import Abstract from "@/components/career/abstract";
import Faq from "@/components/career/faq";
import Workflow from "@/components/career/workflow";
import Hero from "@/components/career/Hero";

function CareerPage() {
  return (
    <main className="pb-32 pt-32 light">
      <Hero />
      <Abstract />
      <Workflow />
      <Links />
      <Calendar />
      <Faq />
    </main>
  );
}

export default CareerPage;
