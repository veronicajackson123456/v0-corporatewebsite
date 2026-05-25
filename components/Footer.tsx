"use client"
import { Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <footer className="relative bg-background border-t border-secondary/20">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>

      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-10 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl cinematic-text mb-4">A Beautiful Kill</h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md leading-relaxed">
              Crafting extraordinary cinematic experiences through premium production services and visionary storytelling on the global stage.
            </p>
            <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-wider font-semibold">
              <div className="w-8 h-0.5 bg-secondary"></div>
              <span>Premium Cinema Solutions</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-bold text-lg mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                <Mail className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span>contact@abeautifulkill.film</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span>Marbella, Spain</span>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-bold text-lg mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/accessibility-statement" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Accessibility
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-secondary/20"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Copyright © {currentYear} A Beautiful Kill. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-secondary" />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-secondary" />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-secondary" />
            </motion.a>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="/terms" className="hover:text-secondary transition-colors duration-300">
              Terms
            </a>
            <span className="text-secondary/40">•</span>
            <a href="/privacy-policy" className="hover:text-secondary transition-colors duration-300">
              Privacy
            </a>
            <span className="text-secondary/40">•</span>
            <a href="/cookie-policy" className="hover:text-secondary transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
    </footer>
  )
}
