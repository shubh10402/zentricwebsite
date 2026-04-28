
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

import WhyUs from "@/components/sections/Whyus";

export default function Home()
{
  return (
    <main className="p-5 text-white bg-black min-h-screen">
      {/* <h1 className="text-3xl font-bold">
        Zentric Website
      </h1> */}

     <Navbar />
        <Hero />
            <Services />
                <WhyUs />
                  <Contact />
                    <Footer/> 

      
    </main>
  )
}