export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-8 py-10 mt-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Zentric</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Building modern websites for growing businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">youremail@example.com</p>
          <p className="text-gray-400 text-sm mt-1">Ahmedabad, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Zentric. All rights reserved.
      </div>

    </footer>
  );
}