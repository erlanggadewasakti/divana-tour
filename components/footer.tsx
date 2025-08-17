import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/divana2.png"
                  alt="Divana Tour Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-2xl"
                />
              </div>
              <span className="font-sans font-bold text-xl text-foreground">
                DIVANA TOUR
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-sans">
              Partner Perjalanan Wisata Tak Terlupakan Anda. Berpengalaman sejak
              1999 melayani dengan mengedepankan program unggulan, tanggung
              jawab, dan mutu.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg text-foreground">
              Navigasi Cepat
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/galeri", label: "Galeri" },
                { href: "/kontak", label: "Kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg text-foreground">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm font-sans">
                  Jalan Soekarno – Hatta, Banyuurip, Purworejo 54171, Jawa
                  Tengah
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/6285293122202"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                >
                  0852 9312 2202
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:slametdivana@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-sans"
                >
                  slametdivana@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-lg text-foreground">
              Media Sosial
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@div_tour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg flex items-center justify-center transition-all duration-200"
                title="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@divanatour8309"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg flex items-center justify-center transition-all duration-200"
                title="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-sans">
            © 2025 DIVANA TOUR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
