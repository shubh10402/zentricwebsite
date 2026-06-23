const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",

  ];
  
  export default function Technologies() {
    return (
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies We Use
          </h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  
            {techStack.map((tech) => (
              <div
                key={tech}
                className="border border-gray-800 rounded-xl p-6 text-center hover:border-orange-500 transition"
              >
                {tech}
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  } 