import React from "react";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-8">
      <h1 className="text-4xl mb-4 text-gray-100">Contact</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-100" htmlFor="name">Name</label>
          <input className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="name" name="name" type="text" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-100" htmlFor="email">Email</label>
          <input className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="email" name="email" type="email" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-100" htmlFor="message">Message</label>
          <textarea className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" name="message" rows={4} required />
        </div>
        <button type="submit" className="bg-gray-100 text-gray-900 px-6 py-2 rounded hover:bg-gray-300 transition font-semibold">Send</button>
      </form>
    </section>
  );
} 