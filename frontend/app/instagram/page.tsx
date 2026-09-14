"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import InstagramSolution from "@/components/solutions/instagram";
import Footer from "@/components/common/Footer";

export default function InstagramPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InstagramSolution />
      <Footer />
    </main>
  );
}
