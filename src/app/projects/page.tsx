import React from "react";

export default function ProjectsPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl mb-4">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Example project card */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-700 mb-2">Short project description goes here.</p>
          <a href="#" className="text-blue-600 hover:underline">View Details</a>
        </div>
      </div>
    </section>
  );
} 