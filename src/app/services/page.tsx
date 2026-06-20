import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Layout,
  Database,
  Search,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Services | Zentric Technologies",
  description:
    "Digital marketing, web design & development, CMS, SEO, and maintenance services from Zentric Technologies.",
};

const services = [
  {
    title: "Digital Marketing",
    description:
      "Reach the right audience with data-driven campaigns that build your brand and drive real results.",
    icon: Megaphone,
    features: [
      "Social media strategy & management",
      "Paid ads (Google, Meta & more)",
      "Content marketing & brand growth",
      "Analytics & performance tracking",
    ],
  },
  {
    title: "Web Design & Development",
    description:
      "Custom, responsive websites built for speed, clarity, and conversions — from concept to launch.",
    icon: Layout,
    features: [
      "Modern UI/UX design",
      "Responsive front-end development",
      "Fast, scalable web applications",
      "Landing pages that convert",
    ],
  },
  {
    title: "CMS Solutions",
    description:
      "Easy-to-manage content systems so you can update your site without touching code.",
    icon: Database,
    features: [
      "WordPress, headless & custom CMS",
      "Content structure & workflows",
      "Admin panel setup & training",
      "Plugin & integration support",
    ],
  },
  {
    title: "SEO",
    description:
      "Improve your search rankings and organic traffic with technical and on-page SEO strategies.",
    icon: Search,
    features: [
      "Keyword research & strategy",
      "On-page & technical SEO audits",
      "Site speed & Core Web Vitals",
      "Local SEO & Google visibility",
    ],
  },
  {
    title: "Maintenance",
    description:
      "Keep your website secure, updated, and running smoothly with ongoing care and support.",
    icon: Wrench,
    features: [
      "Regular updates & backups",
      "Security monitoring & fixes",
      "Bug fixes & small enhancements",
      "Uptime & performance checks",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Page hero */}
      <section className="mx-5 mt-5 text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Services That Help You{" "}
          <span className="text-blue-600">Grow Online</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          From marketing to maintenance — we provide end-to-end digital
          solutions tailored to your business goals.
        </p>
      </section>

      {/* Services grid */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group p-8 border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition bg-white"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 mt-1 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle
                        size={16}
                        className="text-blue-600 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-5 mb-5 px-6 py-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Not sure which service you need?
        </h2>
        <p className="mt-3 text-blue-100 max-w-lg mx-auto">
          Tell us about your project and we&apos;ll recommend the best solution
          for your business.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 mt-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition shadow-lg"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
