import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Punjab Academy of Commerce & Sciences",
  description:
    "Get in touch with Punjab Academy of Commerce & Sciences. Find our campuses, contact details, and answers to your questions.",
  keywords: [
    "contact PACS",
    "PACS Lahore",
    "PACS Contact Number",
    "PACS Email Address",
    "PACS Address",
  ],
  openGraph: {
    title: "Contact Us | Punjab Academy of Commerce & Sciences",
    description:
      "Get in touch with Punjab Academy of Commerce & Sciences. Find our campuses, contact details, and answers to your questions.",
    url: "https://pacs-portfolio.vercel.app/contact",
    siteName: "Punjab Academy of Commerce & Sciences",
    images: [
      {
        url: "/assets/images/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact PACS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <FAQSection />
    </>
  );
}
