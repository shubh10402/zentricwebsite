import { Code2, Palette, Search, Wrench } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern and fast websites built for your business.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    desc: "Clean and user-friendly design systems.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    desc: "Improve your visibility on search engines.",
    icon: Search,
  },
  {
    title: "Maintenance",
    desc: "Ongoing support, updates, and monitoring.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          What We Do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          End-to-end digital solutions to help your business grow online.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
