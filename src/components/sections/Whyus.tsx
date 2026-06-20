import { CheckCircle } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      title: "Fast Delivery",
      desc: "We deliver projects quickly without compromising quality",
    },
    {
      title: "Modern Design",
      desc: "Clean, premium UI that stands out from competitors",
    },
    {
      title: "Affordable Pricing",
      desc: "Best value solutions tailored for your business",
    },
    {
      title: "Ongoing Support",
      desc: "We stay with you even after project completion",
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-400 mt-2">
          We provide solutions that help your business grow faster
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {points.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:bg-gray-100 transition"
          >
            <CheckCircle className="text-blue-600 mt-1 shrink-0" />

            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}