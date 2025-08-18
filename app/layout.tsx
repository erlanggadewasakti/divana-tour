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
  metadataBase: new URL("https://divana-tour.vercel.app"), // Ganti dengan domain aktual Anda
  openGraph: {
    title: "Divana Tour - Biro Perjalanan Wisata Terpercaya",
    description:
      "Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri di seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
    url: "https://divanatour.com",
    images: [
      {
        url: "/divana1.png",
        width: 800,
        height: 800,
        alt: "Divana Tour Logo",
        type: "image/png",
      },
      {
        url: "/divana1.png",
        width: 1200,
        height: 630,
        alt: "Divana Tour Logo",
        type: "image/png",
      },
    ],
    siteName: "Divana Tour",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divana Tour - Biro Perjalanan Wisata Terpercaya",
    description:
      "Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri di seluruh Indonesia.",
    images: ["/divana1.png"],
    site: "@divanatour",
    creator: "@divanatour",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    // Meta tags untuk WhatsApp
    "whatsapp:title": "Divana Tour - Biro Perjalanan Wisata Terpercaya",
    "whatsapp:description":
      "Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri di seluruh Indonesia.",
    "whatsapp:image": "/divana1.png",

    // Meta tags untuk Telegram
    "telegram:title": "Divana Tour - Biro Perjalanan Wisata Terpercaya",
    "telegram:description":
      "Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri di seluruh Indonesia.",
    "telegram:image": "/divana1.png",
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
      <head>
        {/* Meta tags tambahan untuk WhatsApp dan Telegram */}
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/png" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <link rel="icon" href="/divana1.png" />
        <link rel="apple-touch-icon" href="/divana1.png" />
      </head>
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
