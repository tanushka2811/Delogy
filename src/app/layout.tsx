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
  title: "Delogy | Data-Driven Digital Marketing Agency",
  description: "Delogy is a premium digital marketing agency scaling startups and global brands through search engine optimization (SEO), Google Ads, Meta Ads, brand strategy, and high-converting web design.",
  keywords: [
    "digital marketing agency",
    "SEO agency",
    "Google PPC Ads",
    "Facebook Ads management",
    "Instagram marketing",
    "brand strategy",
    "conversion rate optimization",
    "web design agency",
    "analytics and reporting",
  ],
  authors: [{ name: "Delogy Team" }],
  creator: "Delogy",
  openGraph: {
    title: "Delogy | Data-Driven Digital Marketing Agency",
    description: "Scale your client acquisition volume and revenue with data-backed search, social, and brand identity strategies.",
    url: "https://delogy.com",
    siteName: "Delogy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
