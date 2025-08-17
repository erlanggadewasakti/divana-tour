"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Bus,
  ChevronLeft,
  ChevronRight,
  Globe,
  Heart,
  MapPin,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// Parallax component for hero section
const ParallaxHero = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div ref={ref} style={{ y }} className="absolute inset-0">
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced services with more visual appeal
  const services = [
    {
      title: "Paket Wisata Umum",
      description:
        "Jelajahi destinasi populer Indonesia dari Bromo hingga Bali dengan fasilitas terbaik dan pemandu berpengalaman. Nikmati perjalanan yang tak terlupakan",
      image: "/mount-bromo-sunrise.png",
      features: [
        "Transportasi AC",
        "Hotel Berbintang",
        "Makan 3x Sehari",
        "Tour Guide",
      ],
      icon: Globe,
    },
    {
      title: "Paket Wisata Religi",
      description:
        "Ziarah spiritual ke Wali Songo & Para Ulama dengan program yang khusyuk dan berkesan. Dapatkan pencerahan rohani dan kedamaian batin dalam setiap langkah perjalanan suci Anda.",
      image: "/indonesian-mosque-traditional.png",
      features: [
        "Ziarah Wali / Ulama",
        "Ceramah Agama",
        "Fasilitas Ibadah",
        "Panduan Spiritual",
      ],
      icon: Heart,
    },
    {
      title: "Paket Kunjungan Industri",
      description:
        "Program edukatif untuk siswa SMK dengan kunjungan ke pabrik dan industri modern. Perluas wawasan dan pengalaman praktis yang akan mendukung masa depan karir siswa.",
      image: "/industri.jpg",
      features: [
        "Kunjungan Pabrik",
        "Presentasi Ahli",
        "Sertifikat",
        "Dokumentasi",
      ],
      icon: Users,
    },
  ];

  // Enhanced why choose us section
  const whyChooseUs = [
    {
      icon: Award,
      title: "Berpengalaman Sejak 1999",
      description:
        "Puluhan tahun melayani, kami memahami kebutuhan perjalanan Anda.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Star,
      title: "Pelayanan Terbaik",
      description:
        "Kami mengutamakan mutu, tanggung jawab, dan melayani Anda layaknya raja.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Bus,
      title: "Fasilitas Memadai",
      description:
        "Armada transportasi, hotel, dan konsumsi yang nyaman dan terstandar.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: MapPin,
      title: "Destinasi Beragam",
      description:
        "Menjelajahi keindahan Indonesia dari Sumatera hingga Flores.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const testimonials = [
    {
      name: "Keluarga Budi",
      location: "Jakarta",
      text: "Pelayanannya luar biasa! Perjalanan Ziarah Wali Songo bersama Divana Tour sangat berkesan dan khusyuk.",
      avatar: "/happy-family-portrait.png",
      rating: 5,
    },
    {
      name: "SMK Negeri 1 Yogyakarta",
      location: "Yogyakarta",
      text: "Kunjungan industri yang sangat edukatif. Siswa-siswa mendapat pengalaman berharga dan wawasan baru.",
      avatar: "/diverse-school-group.png",
      rating: 5,
    },
    {
      name: "SMP Negeri 1",
      location: "Purworejo",
      text: "Tour ke Bali sangat memuaskan. Semua fasilitas sesuai janji dan pemandu sangat ramah dan profesional.",
      avatar: "/middle-aged-woman-smiling.png",
      rating: 5,
    },
  ];

  // Stats section
  const stats = [
    { number: "25+", label: "Tahun Pengalaman", icon: Award },
    { number: "10K+", label: "Pelanggan Puas", icon: Users },
    { number: "50+", label: "Destinasi Wisata", icon: MapPin },
    { number: "99%", label: "Tingkat Kepuasan", icon: Star },
  ];

  const galleryImages = [
    "/indonesian-temple.png",
    "/indonesia-beach-sunset.png",
    "/happy-tourist-group.png",
    "/indonesian-traditional-dance.png",
    "/indonesian-mountain-landscape.png",
    "/placeholder.svg?height=300&width=400",
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
      <Navbar />

      {/* Enhanced Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxHero>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
          <div className="absolute inset-0 bg-black/30" />
        </ParallaxHero>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.div className="inline-block mb-6" animate={floatingAnimation}>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">
                ✨ Terpercaya Sejak 1999
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Jelajahi Pesona Indonesia
            </span>
            <br />
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Bersama Divana Tour
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            Pengalaman wisata terbaik sejak 1999. Kami hadir untuk menyukseskan
            setiap momen perjalanan Anda dengan pelayanan yang tak terlupakan.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-xl"
              >
                📞 Hubungi Kami
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full opacity-50"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInScale}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="font-bold text-3xl md:text-4xl mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Services */}
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
              🌟 Paket Wisata Populer Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pilihan terbaik untuk setiap kebutuhan perjalanan Anda dengan
              fasilitas yang tak terlupakan
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
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-gradient-to-br from-card to-card/50 py-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
                    />
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-sans font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              🏆 Kenapa DIVANA TOUR?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk
              perjalanan Anda
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
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
              >
                <motion.div
                  className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon
                    className={`w-10 h-10 ${item.color} transition-transform duration-500 group-hover:scale-110`}
                  />
                </motion.div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              💬 Kata Mereka Tentang Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Testimoni dari pelanggan yang telah merasakan pengalaman tak
              terlupakan bersama kami
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-0 shadow-2xl">
                <CardContent className="text-center">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
                    <p className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-4 border-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonials[currentTestimonial].location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              <div className="flex justify-center items-center space-x-4 mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              className="font-sans font-bold text-3xl md:text-4xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Siap Memulai Petualangan Tak Terlupakan?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Jangan ragu, pilihlah DIVANA TOUR sebagai Partner Perjalanan
              Wisata Anda. Hubungi kami sekarang untuk konsultasi gratis!
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl"
              >
                <a
                  href="https://wa.me/6285293122202"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 Hubungi via WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </section>

      <Footer />
    </div>
  );
}
