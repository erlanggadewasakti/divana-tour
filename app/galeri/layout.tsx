import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeri - Dokumentasi Perjalanan Divana Tour",
  description:
    "Lihat koleksi foto dan dokumentasi dari berbagai paket wisata Divana Tour: wisata umum, wisata religi, dan kunjungan industri.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
