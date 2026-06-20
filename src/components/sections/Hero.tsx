export default function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl">
      <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
        Zentric Technologies
      </p>

      <h1 className="text-5xl font-bold leading-tight">
        We Build{" "}
        <span className="text-blue-600">Modern Websites</span> That Convert
      </h1>

      <p className="mt-4 text-gray-600 font-medium text-xl max-w-2xl mx-auto">
        Helping businesses grow with premium digital solutions.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md shadow-blue-200">
          Get Started
        </button>
        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition">
          View Services
        </button>
      </div>
    </section>
  );
}
