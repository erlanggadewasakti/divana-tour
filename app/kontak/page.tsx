"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface FormData {
  namaLengkap: string
  email: string
  nomorTelepon: string
  pesan: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    pesan: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid"
    }

    if (!formData.nomorTelepon.trim()) {
      newErrors.nomorTelepon = "Nomor telepon wajib diisi"
    } else if (!/^[0-9+\-\s()]+$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = "Format nomor telepon tidak valid"
    }

    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi"
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = "Pesan minimal 10 karakter"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        namaLengkap: "",
        email: "",
        nomorTelepon: "",
        pesan: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      content: "Jalan Soekarno – Hatta, Banyuurip, Purworejo 54171, Jawa Tengah, Indonesia",
      link: null,
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "0852 9312 2202",
      link: "https://wa.me/6285293122202",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@divanatour.com",
      link: "mailto:info@divanatour.com",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Kontak Kami</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hubungi kami untuk konsultasi gratis dan rencanakan perjalanan wisata impian Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif font-bold text-3xl text-foreground mb-4">Hubungi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami siap membantu merencanakan perjalanan Anda. Silakan isi form di samping atau hubungi kami
                    melalui informasi di bawah ini.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="font-semibold text-foreground mb-4">Lokasi Kantor</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5234567890123!2d110.0123456789!3d-7.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInNDQuNCJTIDExMMKwMDAnNDQuNCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Divana Tour"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="font-serif font-semibold text-2xl text-foreground mb-6">Kirim Pesan</h3>
                      </div>

                      {/* Nama Lengkap */}
                      <div>
                        <label htmlFor="namaLengkap" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="namaLengkap"
                          name="namaLengkap"
                          type="text"
                          value={formData.namaLengkap}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap Anda"
                          className={`${errors.namaLengkap ? "border-destructive" : ""}`}
                        />
                        {errors.namaLengkap && <p className="text-destructive text-sm mt-1">{errors.namaLengkap}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="contoh@email.com"
                          className={`${errors.email ? "border-destructive" : ""}`}
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>

                      {/* Nomor Telepon */}
                      <div>
                        <label htmlFor="nomorTelepon" className="block text-sm font-medium text-foreground mb-2">
                          Nomor Telepon *
                        </label>
                        <Input
                          id="nomorTelepon"
                          name="nomorTelepon"
                          type="tel"
                          value={formData.nomorTelepon}
                          onChange={handleInputChange}
                          placeholder="08123456789"
                          className={`${errors.nomorTelepon ? "border-destructive" : ""}`}
                        />
                        {errors.nomorTelepon && <p className="text-destructive text-sm mt-1">{errors.nomorTelepon}</p>}
                      </div>

                      {/* Pesan */}
                      <div>
                        <label htmlFor="pesan" className="block text-sm font-medium text-foreground mb-2">
                          Pesan Anda *
                        </label>
                        <Textarea
                          id="pesan"
                          name="pesan"
                          value={formData.pesan}
                          onChange={handleInputChange}
                          placeholder="Ceritakan tentang rencana perjalanan Anda..."
                          rows={5}
                          className={`${errors.pesan ? "border-destructive" : ""}`}
                        />
                        {errors.pesan && <p className="text-destructive text-sm mt-1">{errors.pesan}</p>}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            <span>Mengirim...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <Send className="w-5 h-5" />
                            <span>Kirim Pesan</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="font-serif font-semibold text-2xl text-foreground mb-2">Pesan Terkirim!</h3>
                      <p className="text-muted-foreground">
                        Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda dalam 1x24 jam.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">Butuh Respon Cepat?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Untuk konsultasi langsung dan respon yang lebih cepat, hubungi kami melalui WhatsApp
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold">
                <a href="https://wa.me/6285293122202" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp Sekarang
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
