import type { Metadata } from "next";
import { inter, sora } from "./fonts";
import "./globals.css";
import { PapercupsBootstrap } from "@/src/components/integrations/PapercupsBootstrap";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Netia - AI That Works",
  description: "AI-powered customer service that schedules appointments, answers instantly, and works seamlessly with your business.",
  keywords: ["AI", "customer service", "automation", "chatbot", "appointments", "Netia integration", "business AI"],
  authors: [{ name: "Netia" }],
  creator: "Netia",
  publisher: "Netia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Netia - AI That Works",
    description: "AI-powered customer service that schedules appointments, answers instantly, and works seamlessly with your business.",
    type: "website",
    locale: "en_US",
    siteName: "Netia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netia - AI That Works",
    description: "AI-powered customer service that schedules appointments, answers instantly, and works seamlessly with your business.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script 
          id="vtag-ai-js" 
          async 
          src="https://r2.leadsy.ai/tag.js" 
          data-pid="Ne4Ckpfnly0wfqc1" 
          data-version="062024"
        />
      </head>
      <body className="font-sans antialiased bg-white text-fg">
        {children}
        <PapercupsBootstrap />
        <ChatWidget enabled={process.env.NEXT_PUBLIC_CHAT_WIDGET_ENABLED !== 'false'} />
      </body>
    </html>
  );
}
