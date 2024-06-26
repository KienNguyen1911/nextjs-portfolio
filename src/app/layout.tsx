import type { Metadata } from "next";
import "./globals.css";
import { inter, robotoMono } from '@/app/ui/fonts';
import { NavbarDemo } from "@/components/navbarDemo";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Kien Nguyen",
  description: "Portfolio of Kien Nguyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${robotoMono.className} antialiased`}>
        <NavbarDemo></NavbarDemo>
        <main className="flex min-h-screen flex-col items-center pt-24 lg:p-24">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
