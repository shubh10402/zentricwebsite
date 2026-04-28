export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern and fast websites for your business",
    },
    {
      title: "UI/UX Design",
      desc: "Clean and user-friendly design systems",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your visibility on search engines",
    },
    {
      title: "Maintenance",
      desc: "Ongoing support and updates",
    },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-800 rounded-xl hover:bg-gray-900 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}