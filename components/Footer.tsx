"use client"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">CNBC LLC</h3>
            <p className="text-white/90 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              Corporate Network Broadcasting Cinema delivers premium broadcasting services and cinematic content
              distribution across global media platforms.
            </p>
            <div className="flex items-center gap-2 text-white text-xs uppercase tracking-wider font-semibold">
              <div className="w-8 h-0.5 bg-white"></div>
              <span>Enterprise Media Solutions</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <Mail className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                <span>cnbc.jp@gmail.com</span>
              </li>

              <li className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                <MapPin className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                <span>Broadcasting & Media District</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/accessibility-statement" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col items-center gap-2 text-center">
          {/* Production / Sponsorship */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-sm text-white/80">
            <span className="uppercase tracking-wide">
              PRODUCTION: <span className="font-semibold">CNBC LLC, USA</span>
            </span>
            <span className="hidden md:inline text-white/60">•</span>
            <span className="uppercase tracking-wide">
              ADVERTISING / SPONSORSHIP: <span className="font-semibold">HMCFO LTD</span>
            </span>
          </div>

          {/* Copyright + Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-[11px] md:text-xs text-white/80">
            <span>Copyright © {currentYear} CNBC LLC</span>
            <span className="hidden md:inline text-white/60">•</span>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <span className="hidden md:inline text-white/60">|</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="hidden md:inline text-white/60">|</span>
              <a href="/cancellation-refund" className="hover:text-white transition-colors duration-300">
                Refund Policy
              </a>
              <span className="hidden md:inline text-white/60">|</span>
              <a href="/cookie-policy" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </footer>
  )
}
