import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pebbleboat.com"
  ),
  title: {
    default: "Pebbleboat – We thrive to grow",
    template: "%s | Pebbleboat",
  },
  description:
    "Service-based startup helping businesses build scalable products. MVP development, full-stack web apps, mobile apps, and more. Fast delivery, results-driven approach, and transparent process.",
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
    "software development",
    "saas development",
    "b2b development",
    "b2c development",
    "software testing",
    "CMS",
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
      "Service-based startup helping businesses build scalable products. MVP development, full-stack web apps, mobile apps, and more.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pebbleboat - We thrive to grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pebbleboat – We thrive to grow",
    description:
      "Service-based startup helping businesses build scalable products. MVP development, full-stack web apps, mobile apps, and more.",
    images: ["/images/logo.png"],
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
    logo: `${baseUrl}/images/logo.png`,
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
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
