"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Features from "@/components/features";
import Footer from "@/components/common/Footer";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Features />
      <Footer />
    </main>
  );
}
