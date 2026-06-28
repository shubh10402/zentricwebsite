import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/Whyus";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero is a rounded card, so it gets a little breathing room */}
      <div className="px-5 pt-5">
        <Hero />
      </div>

      <Services />
      <WhyUs />
      <Contact />

      <Footer />
    </main>
  );
}
