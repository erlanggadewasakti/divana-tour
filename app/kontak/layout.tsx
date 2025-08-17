import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontak Kami - Hubungi Divana Tour",
  description:
    "Hubungi Divana Tour untuk konsultasi gratis tentang paket wisata. Alamat: Jl. Soekarno-Hatta Purworejo. WhatsApp: 0852 9312 2202",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
