"use client"
import { Mail, MapPin } from "lucide-react"
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
            <h3 className="text-3xl md:text-4xl cinematic-text mb-4">CNBC LLC</h3>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md leading-relaxed">
              Corporate Network Broadcasting Cinema delivers premium broadcasting services and cinematic content distribution across global media platforms.
            </p>
            <div className="flex items-center gap-2 text-secondary text-xs uppercase tracking-wider font-semibold">
              <div className="w-8 h-0.5 bg-secondary"></div>
              <span>Enterprise Media Solutions</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-foreground font-bold text-lg mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                <Mail className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span>cnbc.jp@gmail.com</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span>30 NORTH GOULD STREET, SHERIDAN WYOMING USA</span>
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
              <li>
                <a href="/disclaimer" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/cancellation-refund" className="text-muted-foreground text-sm md:text-base hover:text-secondary transition-colors duration-300">
                  Refund Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-secondary/20"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Production / Sponsorship */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span className="uppercase tracking-wide">
              PRODUCTION: <span className="font-semibold text-secondary">CNBC LLC, USA</span>
            </span>
            <span className="hidden md:inline text-muted-foreground/60">•</span>
            <span className="uppercase tracking-wide">
              ADVERTISING / SPONSORSHIP: <span className="font-semibold text-secondary">HMCFO LTD</span>
            </span>
          </div>

          {/* Copyright + Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[11px] md:text-xs text-muted-foreground">
            <span>Copyright © {currentYear} CNBC LLC</span>
            <span className="hidden md:inline text-muted-foreground/60">•</span>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <a href="/terms" className="hover:text-secondary transition-colors duration-300">
                Terms of Service
              </a>
              <span className="hidden md:inline text-muted-foreground/60">|</span>
              <a href="/privacy-policy" className="hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="hidden md:inline text-muted-foreground/60">|</span>
              <a href="/cookie-policy" className="hover:text-secondary transition-colors duration-300">
                Cookie Policy
              </a>
              <span className="hidden md:inline text-muted-foreground/60">|</span>
              <a href="/accessibility-statement" className="hover:text-secondary transition-colors duration-300">
                Accessibility
              </a>
              <span className="hidden md:inline text-muted-foreground/60">|</span>
              <a href="/disclaimer" className="hover:text-secondary transition-colors duration-300">
                Disclaimer
              </a>
              <span className="hidden md:inline text-muted-foreground/60">|</span>
              <a href="/cancellation-refund" className="hover:text-secondary transition-colors duration-300">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
    </footer>
  )
}
