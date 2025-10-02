import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import type { Metadata } from 'next';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.keithsalzman.com'),
  title: 'Keith A. Salzman - Computer Scientist & ML Researcher',
  description: 'Graduate student at Georgia Tech pursuing M.S. in Computer Science (Machine Learning). Research Scientist at ConsenSys Mesh specializing in Zero-Knowledge Proofs, Blockchain, and AI/ML. Experienced in Python, Rust, C++, PyTorch, and cryptographic systems.',
  keywords: [
    'Keith Salzman',
    'Computer Scientist',
    'Machine Learning',
    'Zero-Knowledge Proofs',
    'ZK-SNARKs',
    'Blockchain',
    'Ethereum',
    'AI/ML',
    'PyTorch',
    'TensorFlow',
    'Rust',
    'Python',
    'C++',
    'Scientific Computing',
    'Cryptography',
    'Multi-Party Computation',
    'Georgia Tech',
    'ConsenSys'
  ],
  authors: [{ name: 'Keith A. Salzman' }],
  creator: 'Keith A. Salzman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.keithsalzman.com',
    siteName: 'Keith A. Salzman - Portfolio',
    title: 'Keith A. Salzman - Computer Scientist & ML Researcher',
    description: 'Research Scientist at ConsenSys Mesh specializing in Zero-Knowledge Proofs, Blockchain, and AI/ML. M.S. in Computer Science (Machine Learning) from Georgia Tech.',
    images: [
      {
        url: '/ai_keith.jpg',
        width: 1024,
        height: 1024,
        alt: 'Keith A. Salzman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith A. Salzman - Computer Scientist & ML Researcher',
    description: 'Research Scientist at ConsenSys Mesh specializing in Zero-Knowledge Proofs, Blockchain, and AI/ML.',
    images: ['/ai_keith.jpg'],
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
  verification: {
    // Add Google Search Console verification here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Keith A. Salzman',
    jobTitle: 'Research Scientist & Lead Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'ConsenSys Mesh',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Georgia Institute of Technology',
        sameAs: 'https://www.gatech.edu/',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'University of Florida',
        sameAs: 'https://www.ufl.edu/',
      },
    ],
    knowsAbout: [
      'Zero-Knowledge Proofs',
      'Blockchain',
      'Machine Learning',
      'Artificial Intelligence',
      'Cryptography',
      'Python',
      'Rust',
      'C++',
    ],
    email: 'katilyste@gmail.com',
    url: 'https://www.keithsalzman.com',
    sameAs: [
      'https://www.linkedin.com/in/keith-salzman-5491221b5/',
      'https://github.com/Kasshern',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
