import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import DualCampus from "@/components/about/DualCampus";
import LeadershipProfile from "@/components/about/LeadershipProfile";
import AcademicStats from "@/components/about/AcademicStats";
import PACSMind from "@/components/about/PacsMind";
import FinalCta from "@/components/about/FinalCta";

export const metadata: Metadata = {
  title: "About Us | Punjab Academy of Commerce & Sciences",
  description:
    "Engineering Academic Excellence. Discover the mission, methodology, and campuses of PACS.",
  keywords: [
    "About PACS",
    "PACS Mission",
    "PACS Methodology",
    "PACS Campuses",
    "Punjab Academy of Commerce & Sciences",
    "PACS Lahore",
    "PACS Multan",
  ],
  openGraph: {
    title: "About Us | Punjab Academy of Commerce & Sciences",
    description:
      "Engineering Academic Excellence. Discover the mission, methodology, and campuses of PACS.",
    url: "https://pacs-portfolio.vercel.app/about",
    siteName: "Punjab Academy of Commerce & Sciences",
    images: [
      {
        url: "/assets/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "About PACS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LeadershipProfile />
      <PACSMind />
      <AcademicStats />
      <DualCampus />
      <FinalCta />
    </>
  );
}
