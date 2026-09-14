"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import ContactUs from "@/components/contactus";
import Footer from "@/components/common/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactUs />
      <Footer />
    </main>
  );
}