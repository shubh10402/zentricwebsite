"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-8">
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
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

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

        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-orange-500 px-4 py-2 rounded-lg disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Contact"}
        </button>

        {status === "success" && (
          <p className="text-green-500">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-500">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
