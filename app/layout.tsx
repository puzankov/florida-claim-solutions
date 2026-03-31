import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import {GTAG} from "@/components/ui/constants";
import Script from "next/script";

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
  openGraph: {
    type: "website",
    url: "https://floridaclaimsolutions.com",
    siteName: "Florida Claim Solutions",
    title: "Florida Claim Solutions | Surplus Funds Recovery in Florida",
    description: "We help homeowners recover surplus funds from foreclosure auctions and tax deed sales across all 67 Florida counties. No upfront costs — contingency-based.",
    images: [
      {
        url: "https://floridaclaimsolutions.com/images/hero.webp",
        width: 800,
        height: 489,
        alt: "Florida Claim Solutions — Surplus Funds Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Claim Solutions | Surplus Funds Recovery in Florida",
    description: "We help homeowners recover surplus funds from foreclosure auctions and tax deed sales across all 67 Florida counties. No upfront costs.",
    images: ["https://floridaclaimsolutions.com/images/hero.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://floridaclaimsolutions.com/#business",
  "name": "Florida Claim Solutions",
  "legalName": "Marco Concept LLC",
  "description": "Florida Claim Solutions helps homeowners and individuals recover surplus funds from foreclosure auctions and tax deed sales across all 67 Florida counties. No upfront costs — contingency-based service.",
  "url": "https://floridaclaimsolutions.com",
  "telephone": "+12393020917",
  "email": "info@floridaclaimsolutions.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12632 East Tamiami Trail #1005",
    "addressLocality": "Naples",
    "addressRegion": "FL",
    "postalCode": "34113",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  },
  "priceRange": "20%–25% contingency fee, no upfront cost",
  "founder": {
    "@type": "Person",
    "@id": "https://floridaclaimsolutions.com/#founder",
    "name": "Sergi Puzankov",
    "jobTitle": "Founder"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://floridaclaimsolutions.com/#website",
  "url": "https://floridaclaimsolutions.com",
  "name": "Florida Claim Solutions",
  "description": "Surplus funds recovery for Florida homeowners — no upfront costs.",
  "publisher": {
    "@id": "https://floridaclaimsolutions.com/#business"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_e041caf99baf4f99b7ee99764d831ac3"
          strategy="afterInteractive"
        />
        <GoogleAnalytics gaId={GTAG}/>
      </body>
    </html>
  );
}
