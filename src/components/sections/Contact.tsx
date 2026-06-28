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

  const fieldClass =
    "w-full p-3 rounded-lg bg-white border border-gray-300 text-black placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition";

  return (
    <section id="contact" className="py-24 px-8">
      <div className="text-center mb-14">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have a project in mind? Fill the form and we’ll get back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={fieldClass}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={fieldClass}
          required
        />
        <input
          type="text"
          name="service"
          placeholder="Service"
          className={fieldClass}
          required
        />
        

        <textarea
          name="message"
          placeholder="Briefly describe your project"
          rows={4}
          className={fieldClass}
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white transition p-3 rounded-lg font-semibold shadow-md shadow-blue-200"
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