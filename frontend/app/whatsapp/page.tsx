"use client";
import React from "react";
import Navbar from "@/components/common/Navbar";
import WhatsAppSolution from "@/components/solutions/whatsapp";
import Footer from "@/components/common/Footer";

export default function WhatsAppPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <WhatsAppSolution />
      <Footer />
    </main>
  );
}