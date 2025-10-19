import type { Metadata } from "next";
import "./css/main.css";
import "./css/neon.css";
import "./css/terminal.css";

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
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}