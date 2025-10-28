import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netia AI - Med-Spa Receptionist | Never Miss Another Lead',
  description: 'AI-powered receptionist for med-spa clinics. Answer questions, book consultations, and capture leads 24/7. Perfect for Botox, fillers, and aesthetic clinics.',
  keywords: 'med spa, botox, dermal fillers, AI receptionist, chatbot, aesthetic clinic, consultation booking',
  authors: [{ name: 'Netia AI' }],
  openGraph: {
    title: 'Netia AI - Med-Spa Receptionist',
    description: 'AI-powered receptionist for med-spa clinics. Never miss another lead.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netia AI - Med-Spa Receptionist',
    description: 'AI-powered receptionist for med-spa clinics. Never miss another lead.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.NEXT_PUBLIC_BOT_ENDPOINT = '${process.env.NEXT_PUBLIC_BOT_ENDPOINT}';
            `,
          }}
        />
        <script src="/embed.js" defer></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

