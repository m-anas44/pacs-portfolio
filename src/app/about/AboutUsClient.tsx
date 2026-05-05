"use client";

import AboutHero from "@/components/about/AboutHero";
import DualCampus from "@/components/about/DualCampus";
import LeadershipProfile from "@/components/about/LeadershipProfile";
import AcademicStats from "@/components/about/AcademicStats";
import PACSMind from "@/components/about/PacsMind";
import FinalCta from "@/components/about/FinalCta";

export default function AboutUsClient() {
  return (
    <div>
      <AboutHero />
      <LeadershipProfile />
      <DualCampus />
      <AcademicStats />
      <PACSMind />
      <FinalCta />
    </div>
  );
}
