import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Divana Tour - Biro Perjalanan Wisata Profesional Purworejo",
  description:
    "Partner Perjalanan Wisata Tak Terlupakan Anda. Berpengalaman sejak 1999 melayani paket wisata umum, religi, dan kunjungan industri.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
