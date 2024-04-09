import React, { use, useEffect, useState } from "react";
import Links from "@/components/carrer/links";
import Calendar from "@/components/carrer/calendar";
import Abstract from "@/components/carrer/abstract";
import Faq from "@/components/carrer/faq";
import Workflow from "@/components/carrer/workflow";
import CareerHero from "@/components/carrer/CareerHero";

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
