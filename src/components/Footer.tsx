// components/FooterCustom.tsx

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function FooterCustom() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-24">

    <div className="w-full mx-auto space-y-20 border-t border-gray-800 pt-10">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-16 items-start">

          {/* Logo + Name */}
         <div className="flex flex-col items-start gap-5 pl-0 md:pl-4">
            <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">Logo</span>
            </div>
            <h2 className="text-white text-lg font-medium tracking-wide">
              Zentric Technologies
            </h2>
          </div>

          {/* Contact */}
          <div className="ml-0 md:ml-10">
            <h3 className="text-white font-medium mb-3 text-2xl opacity-80">
              Contact
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2 hover:text-white transition ">
                <HiOutlineMail /> hello@zentric.com
              </p>
              <p className="flex items-center gap-2 hover:text-white transition">
                <HiOutlinePhone /> +91 XXXXX XXXXX
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-10 ">
            <h3 className="text-white font-medium text-2xl mb-3 opacity-80 ">
              Quick Links
            </h3>
            <ul className="space-y-3 text-lg mb-8">
              <li className="hover:text-white cursor-pointer transition hover:translate-x-1 ">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition hover:translate-x-1">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition hover:translate-x-1">
                Services
              </li>
              <li className="hover:text-white cursor-pointer transition hover:translate-x-1">
                Contact
              </li>
            </ul>
                {/* SOCIAL */}
        <div className="flex flex-col  gap-3">
          <h3 className="text-white font-medium text-2xl opacity-80">
            Social Media
          </h3>
          <div className="flex gap-6  text-2xl">
            <FaLinkedin className="cursor-pointer hover:text-white transition hover:scale-110" />
            <FaTwitter className="cursor-pointer hover:text-white transition hover:scale-110" />
            <FaGithub className="cursor-pointer hover:text-white transition hover:scale-110" />
          </div>
        </div>
          </div>
        


        </div>

      
        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-500 pt-6 border-t border-gray-800">
          <p>Design & Developed by Zentric Technologies</p>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}