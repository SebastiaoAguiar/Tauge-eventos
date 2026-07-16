import { ContactPopupProvider } from "@/components/ContactPopup/ContactPopupProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Origin from "@/components/Origin";
import SectionDivider from "@/components/ui/SectionDivider";
import EventTypes from "@/components/EventTypes";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <ContactPopupProvider>
      <main className="w-full overflow-hidden bg-cream text-charcoal">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <SectionDivider />
        <Origin />
        <SectionDivider flip />
        <EventTypes />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
        <Footer />
        <WhatsappButton />
        <BackToTop />
      </main>
    </ContactPopupProvider>
  );
}
