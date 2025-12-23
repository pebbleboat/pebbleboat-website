import type { Metadata } from "next";
import "./globals.css";
import WhatsAppWidget from "./shared/WhatsAppWidget";
import CustomScrollbar from "./shared/CustomScrollbar";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com"
  ),
  title: {
    default:
      "Web & Mobile App Development Agency – We thrive to grow | Pebbleboat",
    template: "%s | Pebbleboat – We thrive to grow",
  },
  description:
    "Web and mobile app development agency delivering MVPs, full-stack products, and scalable software with fast, design-first execution.",
  keywords: [
    "web development",
    "mobile app development",
    "MVP development",
    "full-stack development",
    "startup services",
    "software development",
    "product development",
    "scalable products",
    "digital transformation",
    "tech solutions",
    "android development",
    "ios development",
    "react native development",
    "saas development",
    "b2b development",
    "b2c development",
    "software testing",
    "CMS",
    "app development agency",
    "software agency",
  ],
  authors: [{ name: "Pebbleboat" }],
  creator: "Pebbleboat",
  publisher: "Pebbleboat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Pebbleboat",
    title:
      "Web & Mobile App Development Agency – We thrive to grow | Pebbleboat",
    description:
      "Web and mobile app development agency delivering MVPs, full-stack products, and scalable software with fast, design-first execution.",
    images: [
      {
        url: "/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "Pebbleboat - Web & Mobile App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web & Mobile App Development Agency – We thrive to grow | Pebbleboat",
    description:
      "Web and mobile app development agency delivering MVPs, full-stack products, and scalable software with fast, design-first execution.",
    images: ["/images/logo.webp"],
    creator: "@pebbleboat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pebbleboat",
    description:
      "Service-based startup helping businesses build scalable products. MVP development, full-stack web apps, mobile apps, and more.",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "MVP Development",
      "Full-Stack Development",
      "Software Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/hero.json"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppWidget />
        <CustomScrollbar />
      </body>
    </html>
  );
}
