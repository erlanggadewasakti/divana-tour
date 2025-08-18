"use client";

import type React from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useRef, useState } from "react";

// Custom TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
);

// Custom WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
} as const;

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
} as const;

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
} as const;

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
} as const;

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const;

// Enhanced Parallax Section Component
const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div ref={ref} style={{ y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
};

interface FormData {
  namaLengkap: string;
  email: string;
  nomorTelepon: string;
  pesan: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = "Nama lengkap wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.nomorTelepon.trim()) {
      newErrors.nomorTelepon = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.nomorTelepon)) {
      newErrors.nomorTelepon = "Format nomor telepon tidak valid";
    }

    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan wajib diisi";
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        namaLengkap: "",
        email: "",
        nomorTelepon: "",
        pesan: "",
      });
    }, 3000);
  };

  // Enhanced contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: "📍 Alamat Kantor",
      content:
        "Jalan Soekarno – Hatta, Banyuurip, Purworejo 54171, Jawa Tengah, Indonesia",
      link: "https://maps.google.com/?q=Jalan+Soekarno+Hatta+Purworejo",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-950/30",
    },
    {
      icon: Phone,
      title: "📱 WhatsApp",
      content: "0852 9312 2202",
      link: "https://wa.me/6285293122202",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      icon: Mail,
      title: "📧 Email",
      content: "slametdivana@gmail.com",
      link: "mailto:slametdivana@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: Clock,
      title: "🕒 Jam Operasional",
      content: "Senin - Sabtu: 08:00 - 17:00 WIB",
      link: null,
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
    },
  ];

  // Quick contact options with safe actions
  const quickContacts = [
    {
      title: "WhatsApp",
      description: "Chat langsung dengan tim kami",
      icon: WhatsAppIcon,
      color: "bg-green-500",
      href: "https://wa.me/6285293122202",
    },
    {
      title: "Email",
      description: "Kirim email untuk informasi detail",
      icon: Mail,
      color: "bg-blue-500",
      href: "mailto:slametdivana@gmail.com",
    },
    {
      title: "Telepon",
      description: "Hubungi kami langsung",
      icon: Phone,
      color: "bg-purple-500",
      href: "tel:+6285293122202",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 overflow-hidden">
        <ParallaxSection>
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
        </ParallaxSection>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full border border-primary/30">
                <span className="text-primary font-semibold">
                  💬 Mari Berbicara
                </span>
              </div>
            </motion.div>

            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Kontak
              </span>
              <br />
              <span className="text-foreground">Kami</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hubungi kami untuk konsultasi gratis dan rencanakan perjalanan
              wisata impian Anda bersama tim profesional kami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gradient-to-r from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {quickContacts.map((contact, index) => (
              <motion.div key={index} variants={fadeInScale}>
                <Card
                  className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  onClick={() => window.open(contact.href, "_blank")}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content - Contact Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-2 xl:order-1"
            >
              <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 shadow-xl border border-border/50 backdrop-blur-sm">
                <h2 className="font-sans font-bold text-3xl mb-8">
                  📞 Informasi Kontak
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl ${info.bgColor} border border-border/30 hover:shadow-lg transition-all duration-500 hover:scale-[1.02]`}
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative p-6 flex items-start space-x-4">
                        <motion.div
                          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <motion.a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                              whileHover={{ x: 5 }}
                            >
                              {info.content}
                            </motion.a>
                          ) : (
                            <p className="text-muted-foreground break-all">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Social Media Section */}
                <motion.div
                  className="mt-12 p-6 bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl border border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="font-bold text-foreground mb-6 text-xl flex items-center gap-2">
                    🌟 Ikuti Kami di Media Sosial
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <motion.a
                      target="_blank"
                      href="https://www.facebook.com/p/Divana-Tour-Biro-Perjalanan-Wisata-100064152270270/?_rdr"
                      className="group relative w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Facebook className="w-6 h-6 relative z-10" />
                    </motion.a>

                    <motion.a
                      target="_blank"
                      href="https://www.instagram.com/divanatour/"
                      className="group relative w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl flex items-center justify-center text-white overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Instagram className="w-6 h-6 relative z-10" />
                    </motion.a>

                    <motion.a
                      target="_blank"
                      href="https://www.tiktok.com/@divanatour"
                      className="group relative w-14 h-14 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center text-white overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <TikTokIcon className="w-6 h-6 relative z-10" />
                    </motion.a>

                    <motion.a
                      target="_blank"
                      href="https://www.youtube.com/@divanatour"
                      className="group relative w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center text-white overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Youtube className="w-6 h-6 relative z-10" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Enhanced Map Section */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="font-bold text-foreground mb-6 text-xl flex items-center gap-2">
                    🗺️ Lokasi Kantor Kami
                  </h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.53411986632!2d109.9769783216305!3d-7.733027047962009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae9316fa6ac23%3A0x4b18d87d916efc6b!2sDivana%20Tour%20(%20Biro%20Perjalanan%20Wisata%20)!5e0!3m2!1sid!2sid!4v1755404971438!5m2!1sid!2sid"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Divana Tour"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-1 xl:order-2"
            >
              <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-8 shadow-xl border border-border/50 backdrop-blur-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-sans font-bold text-3xl  mb-2">
                        💌 Kirim Pesan
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Isi formulir di bawah ini dan kami akan segera merespons
                        pesan Anda.
                      </p>
                    </motion.div>

                    {/* Enhanced Form Fields */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="namaLengkap"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3"
                      >
                        👤 Nama Lengkap *
                      </label>
                      <div className="relative group">
                        <Input
                          id="namaLengkap"
                          name="namaLengkap"
                          type="text"
                          value={formData.namaLengkap}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap Anda"
                          className={`h-12 bg-background/50 border-2 transition-all duration-300 focus:scale-[1.02] group-hover:border-primary/50 ${
                            errors.namaLengkap
                              ? "border-destructive"
                              : "border-border focus:border-primary"
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      {errors.namaLengkap && (
                        <motion.p
                          className="text-destructive text-sm mt-2 flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          ⚠️ {errors.namaLengkap}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3"
                      >
                        📧 Email *
                      </label>
                      <div className="relative group">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="contoh@email.com"
                          className={`h-12 bg-background/50 border-2 transition-all duration-300 focus:scale-[1.02] group-hover:border-primary/50 ${
                            errors.email
                              ? "border-destructive"
                              : "border-border focus:border-primary"
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <motion.p
                          className="text-destructive text-sm mt-2 flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          ⚠️ {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label
                        htmlFor="nomorTelepon"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3"
                      >
                        📱 Nomor Telepon *
                      </label>
                      <div className="relative group">
                        <Input
                          id="nomorTelepon"
                          name="nomorTelepon"
                          type="tel"
                          value={formData.nomorTelepon}
                          onChange={handleInputChange}
                          placeholder="0812-3456-7890"
                          className={`h-12 bg-background/50 border-2 transition-all duration-300 focus:scale-[1.02] group-hover:border-primary/50 ${
                            errors.nomorTelepon
                              ? "border-destructive"
                              : "border-border focus:border-primary"
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      {errors.nomorTelepon && (
                        <motion.p
                          className="text-destructive text-sm mt-2 flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          ⚠️ {errors.nomorTelepon}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label
                        htmlFor="pesan"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3"
                      >
                        💬 Pesan *
                      </label>
                      <div className="relative group">
                        <Textarea
                          id="pesan"
                          name="pesan"
                          value={formData.pesan}
                          onChange={handleInputChange}
                          placeholder="Tuliskan pesan Anda di sini..."
                          rows={6}
                          className={`bg-background/50 border-2 transition-all duration-300 focus:scale-[1.02] group-hover:border-primary/50 resize-none ${
                            errors.pesan
                              ? "border-destructive"
                              : "border-border focus:border-primary"
                          }`}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                      {errors.pesan && (
                        <motion.p
                          className="text-destructive text-sm mt-2 flex items-center gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          ⚠️ {errors.pesan}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Enhanced Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="pt-4"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Send className="w-5 h-5" />
                            </motion.div>
                            Mengirim Pesan...
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Send className="w-5 h-5" />
                            Kirim Pesan
                          </motion.div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.h3
                      className="font-bold text-2xl text-foreground mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      🎉 Pesan Terkirim!
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      Terima kasih atas pesan Anda! Tim kami akan segera
                      menghubungi Anda dalam 1x24 jam.
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6">
              🌍 Siap Memulai Perjalanan Impian Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Jangan tunggu lagi! Hubungi kami sekarang dan wujudkan perjalanan
              wisata yang tak terlupakan bersama DIVANA TOUR.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/6285293122202", "_blank")
                }
              >
                💬 WhatsApp Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("tel:+6285293122202", "_blank")}
              >
                📞 Telepon Langsung
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
