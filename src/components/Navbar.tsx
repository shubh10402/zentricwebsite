import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-blue-100 flex justify-between items-center px-5 py-2.5">
      <h1 className="font-bold px-3 text-blue-600">Zentric Logo</h1>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/aboutus" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
        </div>

        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
