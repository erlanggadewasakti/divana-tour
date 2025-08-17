"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "🏠 Beranda" },
    { href: "/tentang", label: "ℹ️ Tentang Kami" },
    { href: "/galeri", label: "🖼️ Galeri" },
    { href: "/kontak", label: "📞 Kontak" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Enhanced text color logic for better readability
  const getTextColor = () => {
    if (!mounted) return "text-white"; // Default safe color for homepage
    if (isScrolled) {
      return "text-foreground";
    }
    // Special handling for homepage - always white when not scrolled
    if (pathname === "/") {
      return "text-white";
    }
    // For other pages, use theme-aware colors when not scrolled
    return theme === "light" ? "text-gray-900" : "text-white";
  };

  const getHoverTextColor = () => {
    if (!mounted) return "hover:text-secondary"; // Default safe hover for homepage
    if (isScrolled) {
      return "hover:text-primary";
    }
    // Special handling for homepage - always use secondary color on hover
    if (pathname === "/") {
      return "hover:text-secondary";
    }
    // For other pages, use theme-aware hover colors
    return theme === "light" ? "hover:text-primary" : "hover:text-secondary";
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/divana2.png"
                    alt="Divana Tour Logo"
                    width={48}
                    height={48}
                    className="object-contain rounded-2xl shadow-lg"
                  />
                </div>
                <span className="font-sans font-bold text-xl transition-colors duration-300 text-white">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    DIVANA
                  </span>{" "}
                  <span className="text-white">TOUR</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="font-sans font-medium transition-all duration-300 hover:scale-105 relative group text-white hover:text-secondary"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}

              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 text-white"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <Sun className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/divana2.png"
                  alt="Divana Tour Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-2xl shadow-lg"
                />
              </div>
              <span
                className={`font-sans font-bold text-xl transition-colors duration-300 ${getTextColor()}`}
              >
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DIVANA
                </span>{" "}
                <span className={getTextColor()}>TOUR</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`font-sans font-medium transition-all duration-300 hover:scale-105 relative group ${getTextColor()} ${getHoverTextColor()}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "hover:bg-muted text-foreground"
                    : pathname === "/"
                    ? "hover:bg-white/20 text-white"
                    : theme === "light"
                    ? "hover:bg-black/10 text-gray-900"
                    : "hover:bg-white/20 text-white"
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-sans font-semibold px-6 py-2 rounded-xl shadow-lg"
              >
                <Link href="/kontak">✨ Hubungi Kami</Link>
              </Button>
            </motion.div>
          </div>
          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${getTextColor()}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${getTextColor()}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-foreground hover:text-primary transition-colors duration-200 font-sans font-medium py-2 px-4 rounded-lg hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-center space-x-2 py-2 px-4 text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="w-5 h-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (navItems.length + 1) * 0.1,
                  }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-sans text-white"
                  >
                    <Link
                      href="/kontak"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ✨ Hubungi Kami
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
