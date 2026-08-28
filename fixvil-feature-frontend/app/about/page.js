import AboutUs from "@/components/about us/AboutUs";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "About | Fixvil",
  description: "Learn about Fixvil, our mission, and our automated business messaging solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}