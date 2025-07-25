import React from "react";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-4xl mb-4">Contact</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">Name</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" id="name" name="name" type="text" required />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">Email</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2" id="message" name="message" rows={4} required />
        </div>
        <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Send</button>
      </form>
    </section>
  );
} 