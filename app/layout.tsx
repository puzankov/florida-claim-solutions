import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import {GTAG} from "@/components/ui/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florida Claim Solutions | Surplus Funds Recovery in Florida",
  description: "Florida Claim Solutions helps homeowners recover surplus funds from tax sales and foreclosures in Florida. No upfront costs. Find out if you're owed money today!",
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
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_e041caf99baf4f99b7ee99764d831ac3"
        ></script>
        <GoogleAnalytics gaId={GTAG}/>
      </body>
    </html>
  );
}
