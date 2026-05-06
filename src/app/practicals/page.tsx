import { Metadata } from "next";
import LabHero from "@/components/practicals/LabHero";
import LabModules from "@/components/practicals/LabModules";
import PracticalSchedule from "@/components/practicals/PracticalSchedule";
import SafetyProtocol from "@/components/practicals/SafetyProtocol";
import EquipmentStack from "@/components/practicals/EquipmentStack";

export const metadata: Metadata = {
  title: "Practicals | Punjab Academy of Commerce & Sciences",
  description:
    "Punjab Academy of Commerce & Sciences, Multan. 25+ Years Training 1000s of Students in FSc Pre-Medical & Pre-Engineering. Join Lahore's Top College for Entry Test, MDCAT, ECAT & Brilliant Future.",
  openGraph: {
    title: "Practicals | Punjab Academy of Commerce & Sciences",
    description:
      "Punjab Academy of Commerce & Sciences, Multan. 25+ Years Training 1000s of Students in FSc Pre-Medical & Pre-Engineering. Join Lahore's Top College for Entry Test, MDCAT, ECAT & Brilliant Future.",
    url: "https://pacs-portfolio.vercel.app/practicals",
    siteName: "Punjab Academy of Commerce & Sciences",
    images: [
      {
        url: "/assets/images/practicals.jpg",
        width: 1200,
        height: 630,
        alt: "Practicals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function PracticalsPage() {
  return (
    <>
      <LabHero />
      <LabModules />
      <PracticalSchedule />
      <EquipmentStack />
      <SafetyProtocol />
    </>
  );
}
