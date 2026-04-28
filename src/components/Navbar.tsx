import Link from "next/link";
import Contact from "./sections/Contact";

export default function Navbar()
{
    return(
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b flex justify-between items-center px-5 py-2.5  border-gray-800 ">

          {/* LOGO */}
            <h1 className="font-bold px-3">Zentric Logo</h1>


            {/* Right Side */}
             <div className="flex items-center space-x-6">

        {/* Hidden in mobile */}
       <div className="hidden md:flex space-x-6">
         <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
       </div>


       {/* //Contact Button Visible every whre */}
       <a href="#contact">
  <button className="bg-orange-500 px-4 py-2 rounded-lg">
    Contact
  </button>
</a>
      </div>

      {/* //Contact Button Visible every whre */}
      
        </nav>
    )
}

