import { CheckCircle } from "lucide-react";

const points = [
  {
    title: "Fast Delivery",
    desc: "We deliver projects quickly without compromising quality.",
  },
  {
    title: "Modern Design",
    desc: "Clean, premium UI that stands out from competitors.",
  },
  {
    title: "Affordable Pricing",
    desc: "Best value solutions tailored for your business.",
  },
  {
    title: "Ongoing Support",
    desc: "We stay with you even after project completion.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-8 bg-linear-to-b from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Why Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We provide solutions that help your business grow faster.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {points.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <CheckCircle size={20} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
