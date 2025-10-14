import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajib Gupta - Full Stack Software Developer | React, Node.js, Python Expert",
  description: "Rajib Gupta is a results-driven Full Stack Software Developer with 4+ years of experience. Expert in JavaScript (React, Node.js, Angular), Python, RESTful APIs, AWS cloud deployments. Currently at Ogma IT Conceptions Pvt. Ltd., Kolkata, India.",
  keywords: [
    "Rajib Gupta",
    "Full Stack Developer", 
    "Software Developer",
    "React Developer",
    "Node.js Developer", 
    "Python Developer",
    "JavaScript Expert",
    "Angular Developer",
    "AWS Developer",
    "Ogma IT Conceptions",
    "Kolkata Developer",
    "India Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "API Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "NexusDash",
    "Admin Dashboard"
  ],
  authors: [{ name: "Rajib Gupta", url: "https://rajibgupta.dev" }],
  creator: "Rajib Gupta",
  publisher: "Rajib Gupta",
  metadataBase: new URL('https://rajibgupta.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajibgupta.dev',
    title: 'Rajib Gupta - Full Stack Software Developer',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, Python, and AWS. 4+ years building scalable web applications.',
    siteName: 'Rajib Gupta Portfolio',
    images: [
      {
        url: '/images/rajib-gupta-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajib Gupta - Full Stack Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajib Gupta - Full Stack Software Developer',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, Python, and AWS.',
    images: ['/images/rajib-gupta-twitter.jpg'],
    creator: '@rajibgupta', // Replace with your actual Twitter handle
  },
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3B82F6',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
