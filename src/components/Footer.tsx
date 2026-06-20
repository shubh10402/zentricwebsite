// components/FooterCustom.tsx

import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";


export default function FooterCustom() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-600 px-6 py-24 border-t border-blue-100 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
      </div>

    <div className="relative w-full mx-auto space-y-20 pt-10">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 md:gap-16 items-start">

          {/* Logo + Name */}
         <div className="flex flex-col items-start gap-5 pl-0 md:pl-4">
            <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-100">
              <span className="text-white text-2xl font-bold">Z</span>
            </div>
            <h2 className="text-gray-900 text-lg font-medium tracking-wide">
              Zentric Technologies
            </h2>
          </div>

          {/* Contact */}
          <div className="ml-0 md:ml-10">
            <h3 className="text-gray-900 font-medium mb-3 text-2xl">
              Contact
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2 hover:text-blue-600 transition">
                
                <HiOutlineMail className="text-blue-600" /> zentrictechnologies@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-blue-600 transition">
                <HiOutlinePhone className="text-blue-600" /> +91-9925990550
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-10 ">
            <h3 className="text-gray-900 font-medium text-2xl mb-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-lg mb-8">
              <li className="hover:text-blue-600 cursor-pointer transition hover:translate-x-1">
                Home
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition hover:translate-x-1">
                About
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition hover:translate-x-1">
                Services
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition hover:translate-x-1">
                Contact
              </li>
            </ul>
                {/* SOCIAL */}
        <div className="flex flex-col  gap-3">
          <h3 className="text-gray-900 font-medium text-2xl">
            Social Media
          </h3>
          <div className="flex gap-6  text-2xl">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">       
              <FaLinkedin className="cursor-pointer text-gray-500 hover:text-blue-600 transition hover:scale-110" />
            </a>
            <a href="https://x.com/zentrictec29692" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer text-gray-500 hover:text-blue-600 transition hover:scale-110" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer text-gray-500 hover:text-blue-600 transition hover:scale-110" />
            </a>
             <a href="https://www.instagram.com/zentrictechnologies/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer text-gray-500 hover:text-blue-600 transition hover:scale-110" />
            </a>
            
          </div>
        </div>
          </div>
        


        </div>

      
        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-500 pt-6 border-t border-blue-200/60">
          <p className="flex items-center gap-2">
            <FaHeart className="text-red-600"/>
            Design & Developed by Zentric Technologies
          </p>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}