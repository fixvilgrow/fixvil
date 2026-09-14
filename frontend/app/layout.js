import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Fixvil - WhatsApp Automation Platform",
  description:
    "Fixvil provides WhatsApp automation, AI solutions, customer engagement tools, and workflow automation services for businesses.",
  keywords: [
    "Fixvil",
    "WhatsApp Automation",
    "AI Solutions",
    "WhatsApp Business API",
    "Customer Support Automation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-900 ${plusJakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}