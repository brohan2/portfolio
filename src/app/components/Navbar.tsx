"use client";

import { useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);
  return (
    <>
      <nav className="w-full border-b border-gray-800 bg-[#18181b]/90 shadow-md backdrop-blur-md rounded-b-xl">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Resume button on the left */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              onClick={() => setShowResume(true)}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-300 transition text-base font-semibold shadow"
            >
              Resume
            </button>
          </div>
          {/* Centered nav items */}
          <ul className="flex space-x-8 text-lg font-medium mx-auto">
            <li><a href="#about" className="text-gray-100 hover:text-gray-300 transition">About</a></li>
            <li><a href="#techstack" className="text-gray-100 hover:text-gray-300 transition">Tech Stack</a></li>
            <li><a href="#experience" className="text-gray-100 hover:text-gray-300 transition">Experience</a></li>
            <li><a href="#contact" className="text-gray-100 hover:text-gray-300 transition">Contact</a></li>
          </ul>
          {/* Empty div for spacing/alignment on right */}
          <div className="flex-shrink-0 w-24"></div>
        </div>
      </nav>
      {/* Modal for PDF Resume */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#18181b] rounded-lg shadow-lg max-w-4xl w-full h-[95vh] flex flex-col relative">
            <button
              className="absolute top-2 right-2 text-gray-200 hover:text-white text-2xl font-bold px-2"
              onClick={() => setShowResume(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src="/rohandeveloper.pdf"
              title="Resume PDF"
              className="w-full h-full min-h-[700px] rounded-b-lg bg-[#18181b]"
            />
          </div>
        </div>
      )}
    </>
  );
}