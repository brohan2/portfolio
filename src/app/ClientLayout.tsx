"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always set dark theme
    document.body.classList.add('dark');
  }, []);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-8 bg-[#0a0a0a] snap-y snap-mandatory overflow-y-auto">
        {children}
      </main>
    </>
  );
}
