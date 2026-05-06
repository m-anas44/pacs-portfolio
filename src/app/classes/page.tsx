import AcademicTimeline from "@/components/classes/AcademicTimeline";
import ClassesHero from "@/components/classes/ClassesHero";
import ClassesInteractive from "@/components/classes/ClassesInteractive";
import EnrollmentCTA from "@/components/classes/EnrollmentCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes | Punjab Academy of Commerce & Sciences",
  description:
    "Punjab Academy of Commerce & Sciences, Multan. 25+ Years Training 1000s of Students in FSc Pre-Medical & Pre-Engineering. Join Lahore's Top College for Entry Test, MDCAT, ECAT & Brilliant Future.",
  openGraph: {
    title: "Classes | Punjab Academy of Commerce & Sciences",
    description:
      "Punjab Academy of Commerce & Sciences, Multan. 25+ Years Training 1000s of Students in FSc Pre-Medical & Pre-Engineering. Join Lahore's Top College for Entry Test, MDCAT, ECAT & Brilliant Future.",
    url: "https://pacs-portfolio.vercel.app/classes",
    siteName: "Punjab Academy of Commerce & Sciences",
    images: [
      {
        url: "/assets/images/classes.jpg",
        width: 1200,
        height: 630,
        alt: "Classes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ClassesPage() {
  return (
    <main>
      <ClassesHero />
      <AcademicTimeline />
      <ClassesInteractive />
      <EnrollmentCTA />
    </main>
  );
}
