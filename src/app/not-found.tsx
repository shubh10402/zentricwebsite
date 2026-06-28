import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-[6rem] md:text-[9rem] font-bold leading-none bg-linear-to-b from-blue-600 to-blue-300 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            <Home size={18} />
            Back to Home
          </Link>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
