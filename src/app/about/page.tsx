import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Precision Academy of Science",
  description: "Engineering Academic Excellence. Discover the mission, methodology, and campuses of PACS.",
};

export default function AboutPage() {
  return <AboutUsClient />;
}
