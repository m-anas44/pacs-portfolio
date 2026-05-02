import HeroSection from "@/components/landing/HeroSection";
import ClassesGrid from "@/components/landing/Courses";
import WhyUs from "@/components/landing/WhyUs";
import ContactHub from "@/components/landing/ContactHub";
import SuccessMarquee from "@/components/landing/SuccessMarque";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ClassesGrid/>
      <WhyUs />
      <SuccessMarquee/>
      <ContactHub/>
    </div>
  );
}
