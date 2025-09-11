import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Impact Woods",
  description: "Woodworking company serving Kampala, Wakiso, Mukono & Uganda",
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
