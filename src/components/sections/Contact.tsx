"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/mbdqndwk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-400 mt-2">
          Have a project in mind? Fill the form and we’ll get back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
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

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-semibold"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-500 text-center">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center">
            ❌ Something went wrong. Try again.
          </p>
        )}
      </form>
    </section>
  );
}