import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Lightning Effect Background */}
        <div className="lightning-strike">
          {/* Desktop-only lightning strikes */}
          <div className="desktop-strike-1"></div>
          <div className="desktop-strike-2"></div>
          <div className="desktop-strike-3"></div>
          {/* Mobile-only lightning strikes */}
          <div className="mobile-strike-1"></div>
          <div className="mobile-strike-2"></div>
        </div>
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <Navbar />
        <main className="pt-16 relative z-10">{children}</main>
      </body>
    </html>
  );
}
