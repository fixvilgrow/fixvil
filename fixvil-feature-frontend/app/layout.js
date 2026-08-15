import "./globals.css";


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
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}