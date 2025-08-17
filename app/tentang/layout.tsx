import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tentang Kami - Sejarah dan Tim Divana Tour",
  description:
    "Pelajari sejarah Divana Tour sejak 1999 dan kenali tim profesional kami yang berdedikasi memberikan pelayanan wisata terbaik.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
