import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impact Woods | Premium Kitchens, Closets & Doors in Kampala",
  description: "Transform your home with Impact Woods. We offer hassle-free design and installation of modern kitchens, closets, TV units, and doors in Kampala, Wakiso, and Mukono. Book your free site visit today!",
  keywords: "kitchen cabinets Kampala, custom closets Uganda, wooden doors Mukono, bespoke furniture Wakiso, Impact Woods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
