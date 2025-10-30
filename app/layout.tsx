import type { Metadata } from "next";
import Script from "next/script";
import { inter, sora } from "./fonts";
import "./globals.css";
import { PapercupsBootstrap } from "@/src/components/integrations/PapercupsBootstrap";

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

        {/* Netia Chat Widget */}
        <div
          id="netia-chat-widget"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
          }}
        >
          <button
            id="netia-chat-button"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#3b82f6",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              fontSize: 24,
              transition: "transform 0.2s",
            }}
            aria-label="Open chat"
          >
            💬
          </button>
        </div>

        <Script id="netia-chat" strategy="afterInteractive">
          {`
          (function() {
            const button = document.getElementById('netia-chat-button');
            let iframe = null;

            if (!button) return;

            button.addEventListener('click', function() {
              if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.src = 'https://app.netia.ai/chat?token=77f2c279-9451-4403-9960-ff0445f45870&inbox=d790d8f5-92b9-4db8-bea2-644c6f587f49&title=Netia&subtitle=AI+Powered+Chatbot&primaryColor=%233b82f6&newMessagePlaceholder=Start+typing...&showAgentAvailability=0&agentAvailableText=We%27re+online+right+now%21&agentUnavailableText=We%27re+away+at+the+moment.&requireEmailUpfront=0&iconVariant=outlined&isBrandingHidden=false';
                iframe.style.cssText = 
                  'position: fixed; bottom: 90px; right: 20px; width: 400px; height: 600px; border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 9999; max-width: calc(100vw - 40px); max-height: calc(100vh - 120px);';
                document.body.appendChild(iframe);
                button.innerHTML = '✕';
              } else {
                const isVisible = iframe.style.display !== 'none';
                iframe.style.display = isVisible ? 'none' : 'block';
                button.innerHTML = isVisible ? '💬' : '✕';
              }
            });

            button.addEventListener('mouseenter', function() {
              button.style.transform = 'scale(1.1)';
            });

            button.addEventListener('mouseleave', function() {
              button.style.transform = 'scale(1)';
            });
          })();
          `}
        </Script>
      </body>
    </html>
  );
}
