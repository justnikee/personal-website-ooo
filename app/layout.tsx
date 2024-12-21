import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./ui/Header";
import Footer from "./ui/Footer";

import { Outfit } from '@next/font/google';
import SmoothScrolling from "./components/SmoothScroll";


const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nikhi - Personal Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        <SmoothScrolling>
          {children}
          </SmoothScrolling>
          <Footer />
        <svg aria-hidden="true" className="svg-grid"><defs><pattern id="hero" width="80" height="80" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect></svg>
      </body>
    </html>
  );
}
