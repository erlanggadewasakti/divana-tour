"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Clock,
  Globe,
  Heart,
  MapPin,
  Shield,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { useRef } from "react";

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const slideInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const slideInRight = {
  initial: { opacity: 0, x: 80 },
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

// Parallax component
const ParallaxSection = ({
  children,
  offset = 50,
}: {
  children: React.ReactNode;
  offset?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  // Enhanced company values
  const values = [
    {
      icon: Trophy,
      title: "Profesional",
      description:
        "Melayani dengan standar profesional tinggi dan komitmen penuh untuk kepuasan pelanggan.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      icon: Heart,
      title: "Terpercaya",
      description:
        "Membangun kepercayaan melalui transparansi, kejujuran, dan konsistensi dalam setiap layanan.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: Shield,
      title: "Aman & Nyaman",
      description:
        "Menjamin keselamatan dan kenyamanan perjalanan dengan standar keamanan terbaik.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Kekeluargaan",
      description:
        "Menciptakan suasana hangat dan bersahabat layaknya keluarga besar dalam setiap perjalanan.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  // Enhanced milestones
  const milestones = [
    {
      year: "1999",
      title: "Berdiri",
      description:
        "Divana Tour didirikan dengan komitmen memberikan pelayanan wisata terbaik",
      icon: Star,
      color: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      year: "2005",
      title: "Ekspansi Layanan",
      description: "Menambah layanan wisata religi dan kunjungan industri",
      icon: Globe,
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      year: "2010",
      title: "10.000+ Pelanggan",
      description:
        "Mencapai milestone 10.000 pelanggan yang telah mempercayai layanan kami",
      icon: Users,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      year: "2020",
      title: "Era Digital",
      description:
        "Transformasi digital dengan layanan online dan teknologi modern",
      icon: Award,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
  ];

  const teamStructure = {
    owner: {
      name: "Drs. Slamet",
      position: "Pemilik / Founder",
      image: "/about-us/slamet square.jpg",
      description:
        "Pendiri Divana Tour yang memiliki visi untuk memberikan pelayanan terbaik dalam industri pariwisata.",
    },
    management: [
      {
        name: "Erika Chelsiana",
        position: "Manajer Keuangan",
        image: "/about-us/erika square.jpg",
        department: "Keuangan",
      },
      {
        name: "Yusli Wibowo",
        position: "Manajer Marketing",
        image: "/about-us/yusli square.jpg",
        department: "Marketing",
      },
      {
        name: "Ahmad Dida",
        position: "Manajer Lapangan",
        image: "/about-us/dida square.jpg",
        department: "Lapangan",
      },
      {
        name: "Erlangga Dewa Sakti",
        position: "Manajer Teknologi",
        image: "/about-us/erlangga square.jpg",
        department: "Teknologi",
      },
    ],
    marketingTeam: [
      {
        name: "Diva Asmara",
        position: "Staf Marketing",
        image: "/about-us/diva square.jpg",
      },
      {
        name: "Afra Al Mumtahanah",
        position: "Staf Marketing",
        image: "/about-us/afra square.jpg",
      },
    ],
    fieldTeam: [
      {
        name: "Keenan Kirana",
        position: "Tour Leader",
        image: "/about-us/zahra square.jpg",
      },
      {
        name: "Tasya Gani",
        position: "Tour Leader",
        image: "/about-us/tasya square.jpg",
      },
      {
        name: "Shalsabilla Wantika",
        position: "Tour Leader",
        image: "/about-us/shalsabila square.jpg",
      },
      {
        name: "Eva Gustiana",
        position: "Tour Leader",
        image: "/about-us/eva square.jpg",
      },
      {
        name: "Andre Saputra",
        position: "Tour Leader",
        image: "/about-us/andre square.jpg",
      },
      {
        name: "Yuli Wibowo",
        position: "Tour Leader",
        image: "/about-us/yuli square.png",
      },
    ],
  };

  const companyValues = [
    {
      icon: Heart,
      title: "People First",
      description:
        "Business is not about money, it's about people - filosofi utama yang kami pegang teguh.",
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description:
        "Komitmen terhadap mutu dan tanggung jawab dalam setiap layanan yang kami berikan.",
    },
    {
      icon: Users,
      title: "Kerjasama Tim",
      description:
        "Tim profesional yang solid dan berpengalaman untuk memberikan pelayanan terbaik.",
    },
    {
      icon: Target,
      title: "Fokus Pelanggan",
      description:
        "Mengutamakan kepuasan dan kebahagiaan setiap pelanggan dalam setiap perjalanan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 overflow-hidden">
        <ParallaxSection>
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
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
                  ✨ Sejak 1999
                </span>
              </div>
            </motion.div>

            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Tentang
              </span>
              <br />
              <span className="text-foreground">Divana Tour</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Perjalanan kami dimulai sejak 1999 dengan komitmen memberikan
              pengalaman wisata terbaik, menciptakan kenangan tak terlupakan,
              dan membangun kepercayaan melalui pelayanan yang tulus.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Company Values */}
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
              🌟 Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang
              kami berikan
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInScale}>
                <Card className="h-full border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <value.icon className={`w-10 h-10 ${value.textColor}`} />
                    </motion.div>
                    <h3 className="font-sans font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Milestones Timeline */}
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
              📈 Perjalanan Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Momen-momen penting dalam sejarah Divana Tour
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`w-16 h-16 ${milestone.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <milestone.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-2xl font-bold text-primary">
                              {milestone.year}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent" />
                          </div>
                          <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Founder & Company Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.img
                  src={"/about-us/slamet.jpg"}
                  alt="Drs. Slamet - Founder Divana Tour"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h2
                  className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  🚀 Perjalanan Kami Dimulai
                </motion.h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <strong className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      DIVANA TOUR
                    </strong>{" "}
                    didirikan pada tahun 1999 oleh{" "}
                    <strong className="text-foreground">Drs. Slamet</strong>{" "}
                    dengan visi sederhana namun mendalam: memberikan pelayanan
                    perjalanan wisata yang tidak hanya memuaskan, tetapi juga
                    berkesan dan bermakna bagi setiap pelanggan.
                  </motion.p>

                  <motion.div
                    className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-l-4 border-primary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-primary font-semibold italic text-lg">
                      "Business is not about money, it's about people"
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Selama lebih dari dua dekade, kami telah melayani ribuan
                    pelanggan dengan mengedepankan program unggulan, tanggung
                    jawab penuh, dan mutu terbaik. Dari wisata umum hingga
                    ziarah religi, dari kunjungan industri hingga paket khusus.
                  </motion.p>
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { number: "25+", label: "Tahun Pengalaman", icon: Clock },
                  { number: "10K+", label: "Pelanggan Puas", icon: Users },
                  { number: "50+", label: "Destinasi", icon: MapPin },
                  { number: "99%", label: "Kepuasan", icon: Star },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-card to-card/50 rounded-xl border border-border/50"
                    variants={fadeInScale}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-2xl text-foreground mb-1">
                      {stat.number}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Team */}
      <section className="py-20 bg-gradient-to-br from-card via-card to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              👥 Tim Profesional Kami
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Orang-orang luar biasa di balik setiap perjalanan tak terlupakan
              Anda
            </p>
          </motion.div>

          {/* Owner/Founder */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-md mx-auto overflow-hidden py-0">
              <div className="relative">
                <img
                  src={teamStructure.owner.image || "/placeholder.svg"}
                  alt={teamStructure.owner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif font-bold text-xl">
                    {teamStructure.owner.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    {teamStructure.owner.position}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">
                  {teamStructure.owner.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Management Team */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif font-semibold text-2xl text-foreground text-center mb-8">
              Tim Manajemen
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {teamStructure.management.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                        {member.department}
                      </div>
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {member.position}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Marketing Team */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif font-semibold text-2xl text-foreground text-center mb-8">
              Tim Marketing
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {teamStructure.marketingTeam.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {member.position}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Field Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif font-semibold text-2xl text-foreground text-center mb-8 py-0">
              Tim Lapangan
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {teamStructure.fieldTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] max-w-[321px]"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 py-0">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3 text-center">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        {member.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {member.position}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Legal Information */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans font-bold text-2xl text-foreground mb-8">
              📋 Legalitas Perusahaan
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">📜</span>
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">SIUP</h4>
                    <p className="text-muted-foreground bg-muted/50 px-3 py-1 rounded font-extrabold">
                      503/191/V/PK/2005
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-0 bg-gradient-to-br from-card to-card/50 p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">🏛️</span>
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">NPWP</h4>
                    <p className="text-muted-foreground bg-muted/50 px-3 py-1 rounded font-bold">
                      07.820.834.5-523.000
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
