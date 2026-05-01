import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PACS – Punjab Academy of Commerce & Sciences",
  description: "Quality education for Class 8, Matric, and ICS in Punjab. Expert board exam preparation, practicals, and viva training.",
  keywords: ["PACS", "Academy", "Commerce", "Sciences", "Matric", "ICS", "Physics Practicals", "Board Exams"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
