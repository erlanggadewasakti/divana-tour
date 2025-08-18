"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Search,
  Share2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const;

const imageAnimation = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.9 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
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

type FilterType =
  | "semua"
  | "wisata-umum"
  | "wisata-religi"
  | "kunjungan-industri";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: FilterType;
  title: string;
  description: string;
  location: string;
  date: string;
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages: GalleryImage[] = [
    // Wisata Umum
    {
      id: 1,
      src: "/mount-bromo-sunrise-tour.png",
      alt: "Tour Gunung Bromo",
      category: "wisata-umum",
      title: "Sunrise di Gunung Bromo",
      description:
        "Pengalaman menakjubkan menyaksikan matahari terbit di Gunung Bromo",
      location: "Malang, Jawa Timur",
      date: "2024-01-15",
    },
    {
      id: 2,
      src: "/bali-temple-tourists.png",
      alt: "Wisata Bali",
      category: "wisata-umum",
      title: "Pura Tanah Lot Bali",
      description: "Keindahan pura ikonik di atas batu karang",
      location: "Tabanan, Bali",
      date: "2024-02-10",
    },
    {
      id: 3,
      src: "/yogyakarta-malioboro-tourists.png",
      alt: "Malioboro Yogyakarta",
      category: "wisata-umum",
      title: "Jalan Malioboro",
      description: "Jalan legendaris penuh budaya dan kuliner",
      location: "Yogyakarta",
      date: "2024-01-28",
    },
    {
      id: 4,
      src: "/borobudur-visitors.png",
      alt: "Candi Borobudur",
      category: "wisata-umum",
      title: "Candi Borobudur",
      description: "Warisan dunia UNESCO yang memukau",
      location: "Magelang, Jawa Tengah",
      date: "2024-02-05",
    },
    {
      id: 5,
      src: "/indonesia-beach-sunset.png",
      alt: "Pantai Indonesia",
      category: "wisata-umum",
      title: "Sunset di Pantai",
      description: "Keindahan sunset di pantai Indonesia",
      location: "Lombok, NTB",
      date: "2024-03-01",
    },
    {
      id: 6,
      src: "/indonesian-mountain-landscape.png",
      alt: "Pemandangan Gunung",
      category: "wisata-umum",
      title: "Pemandangan Pegunungan",
      description: "Keindahan alam pegunungan Indonesia",
      location: "Bandung, Jawa Barat",
      date: "2024-02-20",
    },

    // Wisata Religi
    {
      id: 7,
      src: "/indonesian-mosque-traditional.png",
      alt: "Masjid Indonesia",
      category: "wisata-religi",
      title: "Masjid Agung Demak",
      description: "Masjid bersejarah dengan arsitektur Jawa",
      location: "Demak, Jawa Tengah",
      date: "2024-01-20",
    },
    {
      id: 8,
      src: "/islamic-pilgrimage-mosque.png",
      alt: "Ziarah Islami",
      category: "wisata-religi",
      title: "Ziarah Wali Songo",
      description: "Perjalanan spiritual mengunjungi makam wali",
      location: "Jawa Tengah & Jawa Timur",
      date: "2024-02-15",
    },
    {
      id: 9,
      src: "/indonesian-mosque-ceremony.png",
      alt: "Upacara Keagamaan",
      category: "wisata-religi",
      title: "Upacara Keagamaan",
      description: "Moment sakral dalam upacara keagamaan",
      location: "Cirebon, Jawa Barat",
      date: "2024-03-10",
    },
    {
      id: 10,
      src: "/indonesian-pilgrims-praying.png",
      alt: "Jamaah Berdoa",
      category: "wisata-religi",
      title: "Moment Spiritual",
      description: "Kekhusyukan dalam berdoa bersama",
      location: "Kudus, Jawa Tengah",
      date: "2024-02-25",
    },

    // Kunjungan Industri
    {
      id: 11,
      src: "/diverse-school-group.png",
      alt: "Kunjungan Sekolah",
      category: "kunjungan-industri",
      title: "Kunjungan Edukatif Sekolah",
      description: "Program edukasi untuk pelajar",
      location: "Jakarta",
      date: "2024-01-25",
    },
    {
      id: 12,
      src: "/indonesian-village-tour.png",
      alt: "Tour Desa Wisata",
      category: "kunjungan-industri",
      title: "Desa Wisata Tradisional",
      description: "Pembelajaran budaya dan tradisi lokal",
      location: "Solo, Jawa Tengah",
      date: "2024-03-05",
    },
  ];

  // Filter categories with enhanced styling
  const filters = [
    {
      id: "semua",
      label: "🌟 Semua",
      color: "bg-gradient-to-r from-primary to-secondary",
      count: galleryImages.length,
    },
    {
      id: "wisata-umum",
      label: "🏔️ Wisata Umum",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      count: galleryImages.filter((img) => img.category === "wisata-umum")
        .length,
    },
    {
      id: "wisata-religi",
      label: "🕌 Wisata Religi",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      count: galleryImages.filter((img) => img.category === "wisata-religi")
        .length,
    },
    {
      id: "kunjungan-industri",
      label: "🏭 Kunjungan Industri",
      color: "bg-gradient-to-r from-orange-500 to-yellow-500",
      count: galleryImages.filter(
        (img) => img.category === "kunjungan-industri"
      ).length,
    },
  ];

  // Enhanced filtering logic
  const filteredImages = galleryImages.filter((image) => {
    const matchesFilter =
      activeFilter === "semua" || image.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsLightboxOpen(false);
  };

  // Handle body overflow in useEffect to prevent hydration mismatch
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/10 overflow-hidden">
        <ParallaxSection>
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 dark:bg-primary/30 rounded-full blur-xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/20 dark:bg-accent/30 rounded-full blur-xl" />
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
              <div className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 backdrop-blur-sm rounded-full border border-primary/30 dark:border-primary/50">
                <span className="text-primary dark:text-primary/90 font-semibold flex items-center gap-2">
                  📸 Galeri Perjalanan
                </span>
              </div>
            </motion.div>

            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Galeri
              </span>
              <br />
              <span className="text-foreground">Foto Perjalanan</span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jelajahi koleksi foto-foto menakjubkan dari berbagai perjalanan
              wisata bersama DIVANA TOUR. Saksikan keindahan Indonesia melalui
              lensa kamera kami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-16 bg-gradient-to-r from-muted/30 to-background dark:from-muted/20 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className=" mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <motion.div className="mb-8" variants={fadeInUp}>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground dark:text-muted-foreground/80" />
                <Input
                  type="text"
                  placeholder="Cari foto berdasarkan judul, lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background/80 dark:bg-background/90 border-2 border-border dark:border-border/70 focus:border-primary dark:focus:border-primary/80 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 focus:scale-[1.02] text-foreground dark:text-foreground placeholder:text-muted-foreground dark:placeholder:text-muted-foreground/70"
                />
              </div>
            </motion.div>

            {/* Enhanced Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInScale}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id as FilterType);
                  }}
                  className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                    activeFilter === filter.id
                      ? `${filter.color} text-white shadow-xl scale-105`
                      : "bg-card hover:bg-card/80 dark:bg-card/80 dark:hover:bg-card text-foreground dark:text-foreground hover:scale-105 border border-border/50 dark:border-border/60 hover:border-primary/50 dark:hover:border-primary/60"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {filter.label}
                    <Badge
                      variant="secondary"
                      className={`${
                        activeFilter === filter.id
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary border dark:border-primary/40"
                      }`}
                    >
                      {filter.count}
                    </Badge>
                  </span>
                  {activeFilter !== filter.id && (
                    <div
                      className={`absolute inset-0 ${filter.color} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="pb-20 bg-gradient-to-br from-background via-muted/20 to-background dark:via-muted/10 dark:to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${activeFilter}-${image.id}`}
                  className="group relative overflow-hidden rounded-3xl bg-card dark:bg-card/80 shadow-lg hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-500 cursor-pointer"
                  variants={imageAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                  layoutId={`image-${image.id}`}
                  onClick={() => openLightbox(image.id)}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.jpg";
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 dark:bg-black/80 text-foreground dark:text-white backdrop-blur-sm border border-white/20 dark:border-black/30">
                        {filters
                          .find((f) => f.id === image.category)
                          ?.label.split(" ")[1] || "Foto"}
                      </Badge>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 dark:hover:bg-white/20 hover:text-white transition-all duration-200 border border-white/30 dark:border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 dark:hover:bg-white/20 hover:text-white transition-all duration-200 border border-white/30 dark:border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200 dark:text-gray-300 mb-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-300 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <span>📍 {image.location}</span>
                        <span>
                          📅 {new Date(image.date).toLocaleDateString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-32 h-32 bg-muted dark:bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-16 h-16 text-muted-foreground dark:text-muted-foreground/80" />
              </div>
              <h3 className="font-bold text-2xl text-foreground dark:text-foreground/90 mb-4">
                Tidak ada foto ditemukan
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground/80 max-w-md mx-auto">
                Coba gunakan kata kunci yang berbeda atau pilih kategori lain
                untuk menemukan foto yang Anda cari.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 dark:bg-black/98 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {(() => {
              const currentImage = galleryImages.find(
                (img) => img.id === selectedImage
              );
              if (!currentImage) return null;

              return (
                <>
                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-6 right-6 z-10 text-white hover:text-white hover:bg-white/20 dark:hover:bg-white/30 rounded-full p-3 border border-white/20 dark:border-white/30 hover:border-white/40 transition-all duration-200"
                    onClick={closeLightbox}
                  >
                    <X className="w-6 h-6" />
                  </Button>

                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-white hover:bg-white/20 dark:hover:bg-white/30 rounded-full p-3 border border-white/20 dark:border-white/30 hover:border-white/40 transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-white hover:bg-white/20 dark:hover:bg-white/30 rounded-full p-3 border border-white/20 dark:border-white/30 hover:border-white/40 transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>

                  {/* Main Content */}
                  <motion.div
                    className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Image */}
                    <div className="flex-1 max-w-4xl">
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>

                    {/* Image Info */}
                    <div className="lg:w-80 text-white space-y-6">
                      <div>
                        <h2 className="font-bold text-2xl mb-3 text-white">
                          {currentImage.title}
                        </h2>
                        <p className="text-gray-300 dark:text-gray-200 leading-relaxed mb-4">
                          {currentImage.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 dark:text-gray-300">
                            📍
                          </span>
                          <span className="text-white">
                            {currentImage.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 dark:text-gray-300">
                            📅
                          </span>
                          <span className="text-white">
                            {new Date(currentImage.date).toLocaleDateString(
                              "id-ID",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 dark:text-gray-300">
                            🏷️
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-white/20 text-white border-white/30"
                          >
                            {filters.find((f) => f.id === currentImage.category)
                              ?.label || "Foto"}
                          </Badge>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 dark:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/50 transition-all duration-200"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 dark:bg-white/10 dark:border-white/30 dark:text-white dark:hover:bg-white/20 dark:hover:border-white/50 transition-all duration-200"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

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
              📸 Ingin Menciptakan Momen Serupa?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Bergabunglah dengan perjalanan tak terlupakan bersama DIVANA TOUR
              dan ciptakan foto-foto indah Anda sendiri!
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
                className="bg-white text-primary hover:bg-gray-100 dark:bg-white dark:text-primary dark:hover:bg-gray-200 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/6285293122202", "_blank")
                }
              >
                💬 Pesan Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 border-white/50 text-white hover:bg-white/30 hover:border-white/70 dark:bg-white/10 dark:border-white/30 dark:hover:bg-white/20 dark:hover:border-white/50 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                onClick={() => (window.location.href = "/kontak")}
              >
                📞 Hubungi Kami
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
