import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import "./styles/terminal.css";
import "./styles/neon.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Digital Fraud Detective | Command Center",
  description: "Senior Digital Fraud Analyst specializing in fraud detection development and automation",
  keywords: ["fraud detection", "cybersecurity", "automation", "investigation", "digital forensics"],
  authors: [{ name: "Digital Fraud Detective" }],
  openGraph: {
    title: "Digital Fraud Detective | Command Center",
    description: "Senior Digital Fraud Analyst specializing in fraud detection development and automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Fraud Detective | Command Center",
    description: "Senior Digital Fraud Analyst specializing in fraud detection development and automation",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </body>
    </html>
  );
}