"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Star, Bus, Globe, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      title: "Paket Wisata Umum",
      description:
        "Jelajahi destinasi populer Indonesia dari Bromo hingga Bali dengan fasilitas terbaik dan pemandu berpengalaman.",
      image: "/mount-bromo-sunrise.png",
      features: ["Transportasi AC", "Hotel Berbintang", "Makan 3x Sehari", "Tour Guide"],
    },
    {
      title: "Paket Wisata Religi",
      description: "Ziarah spiritual ke Wali Songo & Wali Pitu dengan program yang khusyuk dan berkesan.",
      image: "/indonesian-mosque-traditional.png",
      features: ["Kunjungan Makam", "Ceramah Agama", "Fasilitas Ibadah", "Panduan Spiritual"],
    },
    {
      title: "Paket Kunjungan Industri",
      description: "Program edukatif untuk siswa SMK dengan kunjungan ke pabrik dan industri modern.",
      image: "/placeholder-hlb4k.png",
      features: ["Kunjungan Pabrik", "Presentasi Ahli", "Sertifikat", "Dokumentasi"],
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Berpengalaman Sejak 1999",
      description: "Puluhan tahun melayani, kami memahami kebutuhan perjalanan Anda.",
    },
    {
      icon: Star,
      title: "Pelayanan Terbaik",
      description: "Kami mengutamakan mutu, tanggung jawab, dan melayani Anda layaknya raja.",
    },
    {
      icon: Bus,
      title: "Fasilitas Memadai",
      description: "Armada transportasi, hotel, dan konsumsi yang nyaman dan terstandar.",
    },
    {
      icon: Globe,
      title: "Destinasi Beragam",
      description: "Menjelajahi keindahan Indonesia dari Sumatera hingga Flores.",
    },
  ]

  const testimonials = [
    {
      name: "Keluarga Budi",
      location: "Jakarta",
      text: "Pelayanannya luar biasa! Perjalanan Ziarah Wali Songo bersama Divana Tour sangat berkesan dan khusyuk.",
      avatar: "/happy-family-portrait.png",
    },
    {
      name: "SMK Negeri 1 Yogyakarta",
      location: "Yogyakarta",
      text: "Kunjungan industri yang sangat edukatif. Siswa-siswa mendapat pengalaman berharga dan wawasan baru.",
      avatar: "/diverse-school-group.png",
    },
    {
      name: "Ibu Sari",
      location: "Surabaya",
      text: "Tour ke Bali sangat memuaskan. Semua fasilitas sesuai janji dan pemandu sangat ramah dan profesional.",
      avatar: "/middle-aged-woman-smiling.png",
    },
  ]

  const galleryImages = [
    "/indonesian-temple.png",
    "/indonesia-beach-sunset.png",
    "/happy-tourist-group.png",
    "/indonesian-traditional-dance.png",
    "/indonesian-mountain-landscape.png",
    "/placeholder.svg?height=300&width=400",
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jelajahi Pesona Indonesia Bersama Divana Tour
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pengalaman wisata terbaik sejak 1999. Kami hadir untuk menyukseskan setiap momen perjalanan Anda.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Paket Wisata
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Paket Wisata Populer Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pilihan terbaik untuk setiap kebutuhan perjalanan Anda
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90">Pelajari Lebih Lanjut</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Kenapa DIVANA TOUR?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk perjalanan Anda
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} className="text-center group" variants={fadeInUp}>
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              Momen Tak Terlupakan Bersama Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dokumentasi perjalanan dan kebahagiaan para pelanggan kami
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/galeri">Lihat Semua Foto</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">Apa Kata Mereka?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Testimoni dari pelanggan yang telah merasakan pelayanan terbaik kami
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 text-center">
                <CardContent className="space-y-6">
                  <Quote className="w-12 h-12 text-primary mx-auto" />
                  <motion.p
                    className="text-lg text-muted-foreground leading-relaxed italic"
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? "bg-primary" : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6">Siap untuk Petualangan Anda Berikutnya?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Jangan ragu, pilihlah DIVANA TOUR sebagai Partner Perjalanan Wisata Anda. Hubungi kami sekarang untuk
              konsultasi gratis!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                <a href="https://wa.me/6285293122202" target="_blank" rel="noopener noreferrer">
                  Hubungi via WhatsApp
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
