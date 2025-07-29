"use client";
import React from "react";

export default function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-3xl h-[80vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 hover:text-red-500 text-2xl font-bold z-10"
          aria-label="Close resume modal"
        >
          &times;
        </button>
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="flex-1 w-full rounded-b-xl border-0"
        />
      </div>
    </div>
  );
} 