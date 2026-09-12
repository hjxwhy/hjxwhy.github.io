import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jianxin-huang-research.jxhuang1995.chatgpt.site'),
  title: 'Jianxin Huang — Embodied AI Researcher',
  description:
    'Research portfolio of Jianxin Huang, an algorithm researcher working on VLM, VLA, and world-action model pre-training.',
  openGraph: {
    title: 'Jianxin Huang — Embodied AI Researcher',
    description: 'Academic homepage and selected research by Jianxin Huang.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jianxin Huang — Embodied AI Researcher',
    description: 'Academic homepage and selected research by Jianxin Huang.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
