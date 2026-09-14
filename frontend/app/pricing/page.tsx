"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import PricingComponent from "@/components/pricing";
import Footer from "@/components/common/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PricingComponent />
      <Footer />
    </main>
  );
}
