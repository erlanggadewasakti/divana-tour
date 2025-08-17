"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

type FilterType = "semua" | "wisata-umum" | "wisata-religi" | "kunjungan-industri"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: FilterType
  title: string
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("semua")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages: GalleryImage[] = [
    // Wisata Umum
    {
      id: 1,
      src: "/mount-bromo-sunrise-tour.png",
      alt: "Tour Gunung Bromo",
      category: "wisata-umum",
      title: "Sunrise di Gunung Bromo",
    },
    {
      id: 2,
      src: "/bali-temple-tourists.png",
      alt: "Wisata Bali",
      category: "wisata-umum",
      title: "Pura Tanah Lot Bali",
    },
    {
      id: 3,
      src: "/yogyakarta-malioboro-tourists.png",
      alt: "Malioboro Yogyakarta",
      category: "wisata-umum",
      title: "Jalan Malioboro",
    },
    {
      id: 4,
      src: "/borobudur-visitors.png",
      alt: "Candi Borobudur",
      category: "wisata-umum",
      title: "Candi Borobudur",
    },
    {
      id: 5,
      src: "/indonesian-beach-vacation-group.png",
      alt: "Pantai Indonesia",
      category: "wisata-umum",
      title: "Pantai Parangtritis",
    },
    {
      id: 6,
      src: "/indonesian-village-tour.png",
      alt: "Desa Wisata",
      category: "wisata-umum",
      title: "Desa Wisata Tradisional",
    },
    {
      id: 7,
      src: "/indonesian-cultural-performance-tourists.png",
      alt: "Pertunjukan Budaya",
      category: "wisata-umum",
      title: "Pertunjukan Budaya Jawa",
    },

    // Wisata Religi
    {
      id: 8,
      src: "/islamic-pilgrimage-mosque.png",
      alt: "Ziarah Wali Songo",
      category: "wisata-religi",
      title: "Makam Sunan Kudus",
    },
    {
      id: 9,
      src: "/indonesian-pilgrims-praying.png",
      alt: "Masjid Demak",
      category: "wisata-religi",
      title: "Masjid Agung Demak",
    },
    {
      id: 10,
      src: "/indonesian-mosque-ceremony.png",
      alt: "Ceramah Agama",
      category: "wisata-religi",
      title: "Ceramah di Masjid",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Makam Wali",
      category: "wisata-religi",
      title: "Makam Sunan Ampel",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Foto Bersama Jamaah",
      category: "wisata-religi",
      title: "Jamaah Ziarah Wali Pitu",
    },
    {
      id: 13,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Arsitektur Islam",
      category: "wisata-religi",
      title: "Masjid Menara Kudus",
    },

    // Kunjungan Industri
    {
      id: 14,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Kunjungan Pabrik",
      category: "kunjungan-industri",
      title: "Pabrik Tekstil Modern",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pembelajaran Industri",
      category: "kunjungan-industri",
      title: "Proses Produksi",
    },
    {
      id: 16,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Presentasi di Pabrik",
      category: "kunjungan-industri",
      title: "Presentasi Ahli Industri",
    },
    {
      id: 17,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mesin Industri",
      category: "kunjungan-industri",
      title: "Teknologi Manufaktur",
    },
    {
      id: 18,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Foto Siswa SMK",
      category: "kunjungan-industri",
      title: "SMK Negeri 1 Purworejo",
    },
    {
      id: 19,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Workshop Industri",
      category: "kunjungan-industri",
      title: "Workshop Praktik",
    },
    {
      id: 20,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Pemberian Sertifikat",
      category: "kunjungan-industri",
      title: "Pemberian Sertifikat",
    },
  ]

  const filterButtons = [
    { key: "semua" as FilterType, label: "Semua" },
    { key: "wisata-umum" as FilterType, label: "Wisata Umum" },
    { key: "wisata-religi" as FilterType, label: "Wisata Religi" },
    { key: "kunjungan-industri" as FilterType, label: "Kunjungan Industri" },
  ]

  const filteredImages = galleryImages.filter((image) =>
    activeFilter === "semua" ? true : image.category === activeFilter,
  )

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
      setSelectedImage(filteredImages[prevIndex].id)
    }
  }

  const selectedImageData = filteredImages.find((img) => img.id === selectedImage)

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
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Dokumentasi Acara & Perjalanan
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Koleksi momen berharga dari setiap perjalanan wisata bersama Divana Tour
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filterButtons.map((button) => (
              <Button
                key={button.key}
                onClick={() => setActiveFilter(button.key)}
                variant={activeFilter === button.key ? "default" : "outline"}
                className={`px-6 py-3 font-medium transition-all duration-200 ${
                  activeFilter === button.key
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {button.label}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeFilter}
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={fadeInUp}
                  layout
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(image.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">Klik untuk memperbesar</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg">Tidak ada gambar untuk kategori ini.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Info */}
              <div className="text-center mt-4 text-white">
                <h3 className="font-serif font-semibold text-xl mb-2">{selectedImageData.title}</h3>
                <p className="text-sm opacity-80">
                  {filteredImages.findIndex((img) => img.id === selectedImage) + 1} dari {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
