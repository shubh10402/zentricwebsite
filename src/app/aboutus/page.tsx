import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/sections/AboutHero";
import Whoweare from "@/components/sections/Whoweare";  
import Mission from "@/components/sections/Mission";
import Technologies from "@/components/sections/Technologies";
// import CTA from "@/components/sections/CTA";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <AboutHero />
      <Whoweare />
      <Mission />
      <Technologies />
      {/* <CTA /> */}

      <Footer />
    </>
  );
}