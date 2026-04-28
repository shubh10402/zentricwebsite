export default function Contact() {
  return (
    <section  id="contact" className="py-20 px-8">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-400 mt-2">
          Have a project in mind? Fill the form and we’ll get back to you within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form
        name="contact"
        method="POST"
        
        className="max-w-xl mx-auto space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-black border border-gray-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-black border border-gray-800"
          required
        />

        {/* 🔥 Service Dropdown */}
        <select
          name="service"
          className="w-full p-3 rounded-lg bg-black border border-gray-800"
        >
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>SEO</option>
          <option>Maintenance</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded-lg bg-black border border-gray-800"
          required
        />
  <a href="#contact">
  <button className="bg-orange-500 px-4 py-2 rounded-lg">
    Contact
  </button>
</a>
      </form>


    </section>
  );
}