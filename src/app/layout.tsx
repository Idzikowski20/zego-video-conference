import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-iner",
});

export const metadata: Metadata = {
  title: "Video Conference",
  description: "Connect with anyone, anywhere using ZEGOCLOUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background text-foreground antialiased ${inter.className}`}>
        {children}
        <Toaster richColors theme="light" position="top-center" />
      </body>
    </html>
  );
}
