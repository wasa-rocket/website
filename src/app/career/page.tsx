import React, { use, useEffect, useState } from "react";
import Links from "@/components/career/links";
import Calendar from "@/components/career/calendar";
import Abstract from "@/components/career/abstract";
import Faq from "@/components/career/faq";
import Workflow from "@/components/career/workflow";
import CareerHero from "@/components/career/CareerHero";

function CareerPage() {
  return (
    <main className="pb-32 light">
      <CareerHero />
      <Abstract />
      <Workflow />
      <Links />
      <Calendar />
      <Faq />
    </main>
  );
}

export default CareerPage;
