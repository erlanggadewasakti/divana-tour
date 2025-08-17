"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
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
        position: "Manajer IT",
        image: "/about-us/erlangga square.jpg",
        department: "IT",
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
        name: "Shalsabilla Wantika Amartya",
        position: "Tour Leader",
        image: "/about-us/shalsabila square.jpg",
      },
      {
        name: "Eva Gustiana",
        position: "Tour Leader",
        image: "/about-us/eva square.jpg",
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Tentang Divana Tour
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Perjalanan kami dimulai sejak 1999 dengan komitmen memberikan
              pengalaman wisata terbaik untuk setiap pelanggan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={"/about-us/slamet.jpg"}
                  alt="Drs. Slamet - Founder Divana Tour"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">
                    1999
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">
                Perjalanan Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">DIVANA TOUR</strong>{" "}
                  didirikan pada tahun 1999 oleh{" "}
                  <strong className="text-foreground">Drs. Slamet</strong>{" "}
                  dengan visi sederhana namun mendalam: memberikan pelayanan
                  perjalanan wisata yang tidak hanya memuaskan, tetapi juga
                  berkesan dan bermakna bagi setiap pelanggan.
                </p>
                <p>
                  Filosofi utama kami adalah{" "}
                  <strong className="text-primary">
                    "Business is not about money, it's about people"
                  </strong>
                  . Kami percaya bahwa setiap perjalanan adalah tentang
                  menciptakan kenangan indah, membangun hubungan, dan memberikan
                  pengalaman yang mengubah hidup.
                </p>
                <p>
                  Selama lebih dari dua dekade, kami telah melayani ribuan
                  pelanggan dengan mengedepankan program unggulan, tanggung
                  jawab penuh, dan mutu terbaik. Dari wisata umum hingga ziarah
                  religi, dari kunjungan industri hingga paket khusus, kami
                  terus berinovasi untuk memberikan yang terbaik.
                </p>
                <p>
                  Komitmen kami terhadap kerjasama dan pelayanan prima telah
                  menjadikan Divana Tour sebagai partner terpercaya dalam setiap
                  perjalanan wisata Anda.
                </p>
              </div>

              {/* Company Values */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {companyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4"
                    variants={fadeInUp}
                  >
                    <value.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Di Balik Layar DIVANA TOUR
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tim profesional yang berdedikasi untuk memberikan pengalaman
              perjalanan terbaik
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
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {teamStructure.fieldTeam.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
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

      {/* Legal Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif font-semibold text-2xl text-foreground mb-8">
              Legalitas Perusahaan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">SIUP</h4>
                  <p className="text-muted-foreground">503/191/V/PK/2005</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">NPWP</h4>
                  <p className="text-muted-foreground">07.820.834.5-523.000</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
