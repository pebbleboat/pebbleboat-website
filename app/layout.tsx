import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import QueryProvider from "./providers/QueryProvider";
import WhatsAppWidget from "./shared/WhatsAppWidget";
import CustomScrollbar from "./shared/CustomScrollbar";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com"
  ),
  title: {
    default: "Pebbleboat – We thrive to grow",
    template: "%s | Pebbleboat",
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
    title: "Pebbleboat – We thrive to grow",
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
    title: "Pebbleboat – We thrive to grow",
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
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    description:
      "Web and mobile app development agency building MVPs, web and mobile apps, and full-stack products.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7376190196",
      email: "contact@pebbleboat.com",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.linkedin.com/company/pebbleboat",
      "https://x.com/pebbleboat",
      "https://www.instagram.com/pebble_boat",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <QueryProvider>{children}</QueryProvider>
        <WhatsAppWidget />
        <CustomScrollbar />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
