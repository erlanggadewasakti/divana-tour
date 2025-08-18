import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-card via-card to-muted/30 border-t border-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {/* Company Info */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/divana2.png"
                  alt="Divana Tour Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-2xl shadow-lg"
                />
              </div>
              <span className="font-sans font-bold text-xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DIVANA
                </span>{" "}
                <span className="text-foreground">TOUR</span>
              </span>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans">
              Partner Perjalanan Wisata Tak Terlupakan Anda. Berpengalaman sejak
              1999 melayani dengan mengedepankan program unggulan, tanggung
              jawab, dan mutu.
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              🧭 Navigasi Cepat
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "🏠 Beranda" },
                { href: "/tentang", label: "ℹ️ Tentang Kami" },
                { href: "/galeri", label: "🖼️ Galeri" },
                { href: "/kontak", label: "📞 Kontak" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 font-sans hover:translate-x-2 inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              📍 Kontak
            </h3>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm font-sans">
                  Jalan Soekarno – Hatta, Banyuurip, Purworejo 54171, Jawa
                  Tengah
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/6285293122202"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                >
                  0852 9312 2202
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:slametdivana@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                >
                  slametdivana@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h3 className="font-sans font-semibold text-lg text-foreground">
              🌐 Media Sosial
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.tiktok.com/@div_tour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white text-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
                title="TikTok"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@divanatour8309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white text-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
                title="YouTube"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border/50 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-muted-foreground text-sm font-sans space-y-2">
            <p>
              © 2025{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                DIVANA TOUR
              </span>
              . All rights reserved. Made with ❤️ for amazing journeys.
            </p>
            <p>
              Developed by{" "}
              <a
                href="https://www.instagram.com/erlanggadewasakti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-200 font-semibold"
              >
                Erlangga Dewa Sakti
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
