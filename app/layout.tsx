import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type React from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Divana Tour - Biro Perjalanan Wisata Profesional Purworejo",
  description:
    "Partner Perjalanan Wisata Tak Terlupakan Anda. Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri.",
  keywords: [
    "wisata",
    "tour",
    "travel",
    "purworejo",
    "divana",
    "indonesia",
    "paket wisata",
    "religi",
    "industri",
    "biro perjalanan wisata",
  ],
  authors: [{ name: "Divana Tour" }],
  openGraph: {
    title: "Divana Tour - Biro Perjalanan Wisata Terpercaya",
    description:
      "Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri di seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
