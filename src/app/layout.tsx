import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Yodh | Web Designer & Frontend Developer",
  description:
    "I am Yodhvir Singh, a web designer from Amritsar, Punjab. I build clean, modern, responsive websites with HTML, CSS, React, and Next.js.",
  keywords: [
    "web designer amritsar",
    "web designer punjab",
    "next.js developer",
    "react developer",
    "frontend developer india",
    "portfolio website",
  ],
  authors: [{ name: "Yodhvir Singh" }],
  robots: "index, follow",

  openGraph: {
    title: "Yodh | Web Designer & Frontend Developer",
    description:
      "Modern and responsive web design by Yodhvir Singh from Amritsar, Punjab.",
    url: "https://your-domain.com",
    siteName: "Yodh Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",   // <-- IMPORTANT
        width: 1200,
        height: 630,
        alt: "Yodh Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yodh | Web Designer & Frontend Developer",
    description:
      "Modern and responsive web design by Yodhvir Singh from Amritsar, Punjab.",
    images: ["/og-image.png"],   // <-- IMPORTANT
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
