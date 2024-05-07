import type { Metadata } from "next";
import "./globals.css";
import { inter, robotoMono } from '@/app/ui/fonts';
import { NavbarDemo } from "@/components/navbarDemo";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <NavbarDemo></NavbarDemo>
        <main className="flex min-h-screen flex-col items-center pt-24 lg:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
