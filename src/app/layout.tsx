import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MessageWidget from "@/components/ui/message-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Medical College & Hospital - Excellence in Medical Education & Healthcare",
  description: "Premier medical institution offering MBBS programs, healthcare services, and research opportunities. State-of-the-art facilities and experienced faculty.",
  keywords: "medical college, hospital, MBBS, medical education, healthcare, research, Bangladesh",
  authors: [{ name: "Medical College & Hospital" }],
  openGraph: {
    title: "Medical College & Hospital",
    description: "Excellence in Medical Education & Healthcare",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MessageWidget />
      </body>
    </html>
  );
}
