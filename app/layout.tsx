import "./globals.css";

export const metadata = {
  title: "StartupCo – Transform Your Ideas Into Digital Reality",
  description:
    "Service-based startup helping businesses build scalable products. MVP development, full-stack web apps, mobile apps, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
