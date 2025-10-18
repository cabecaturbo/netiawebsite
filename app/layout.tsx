import type { Metadata } from "next";
import { inter, sora } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netia - AI That Works",
  description: "AI-powered customer service that schedules appointments, answers instantly, and works seamlessly with your business.",
  keywords: ["AI", "customer service", "automation", "chatbot", "appointments"],
  authors: [{ name: "Netia" }],
  openGraph: {
    title: "Netia - AI That Works",
    description: "AI-powered customer service that schedules appointments, answers instantly, and works seamlessly with your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased bg-white text-fg">
        {children}
      </body>
    </html>
  );
}
