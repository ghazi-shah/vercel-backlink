import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Win PKR — Download, Play & Win Online (2025 Guide)',
  description:
    'Win PKR is one of the most exciting online gaming platforms in 2025, offering fast gameplay, secure transactions, daily bonuses, and real-time competitions. Learn how to download, register, and start winning on Win PKR today.',
  keywords:
    'Win PKR, winpkr, WinPKR game, Win PKR login, Win PKR app, Win PKR download, Win PKR online, Win PKR guide, Win PKR play, Win PKR registration, Win PKR withdraw, Win PKR deposit, Win PKR tips, Win PKR 2025',
  openGraph: {
    title: 'Win PKR — Download, Play & Win Online (2025)',
    description:
      'Experience the thrill of Win PKR — a trusted gaming platform offering seamless play, secure wallet features, and exclusive daily rewards. Join now and start winning today!',
    url: 'https://winpkr.pk/',
    siteName: 'Win PKR Official',
    images: [
      {
        url: '/winpkr-logo.webp',
        width: 800,
        height: 600,
        alt: 'Win PKR Logo',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Win PKR — Download, Play & Win Online (2025)',
    description:
      'Play and win on Win PKR — fast, safe, and packed with daily rewards. Learn how to register and download the latest Win PKR app version.',
    images: ['/winpkr-logo.webp'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
