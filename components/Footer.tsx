"use client"
import { Mail, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative gradient-orange">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="bg-white px-4 py-2 rounded-lg inline-block mb-4 shadow-md">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600">CNBC</h3>
            </div>
            <p className="text-white/90 text-sm md:text-base mb-6 max-w-md leading-relaxed">
              Corporate Network Broadcasting Cinema delivers premium broadcasting services and cinematic content
              distribution across global media platforms.
            </p>
            <div className="space-y-3 text-white text-xs uppercase tracking-wider font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <span>CPO LLC - CONTENT PROVIDERS ONLINE</span>
              </div>
              <div className="text-white/80 text-xs not-uppercase tracking-normal font-normal pl-0">
                <p className="font-semibold text-white mb-1">CNBC LLC</p>
                <p>EIN: 38-4352621</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <Mail className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                <a href="mailto:info@cnbc.cc" className="hover:text-white hover:underline transition-colors">
                  info@cnbc.cc
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <MapPin className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                <span>30 North Gould Street,<br />Sheridan, Wyoming, USA</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base mt-4">
                <ExternalLink className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                <a 
                  href="https://ionplustv.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  ION Plus TV
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/accessibility-statement" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/cancellation-refund" className="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 block py-1">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col gap-4 text-center">
          {/* Production / Sponsorship */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs md:text-sm text-white/90">
            <span className="uppercase tracking-wide">
              PRODUCTION: <span className="font-semibold">CNBC LLC, USA</span>
            </span>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="uppercase tracking-wide">
              ADVERTISING / SPONSORSHIP: <span className="font-semibold">HMCFO LTD</span>
            </span>
          </div>

          {/* Copyright + Quick Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] md:text-xs text-white/80">
            <span>Copyright {currentYear} CNBC LLC. All rights reserved.</span>
            <span className="hidden sm:inline text-white/60">|</span>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms</a>
              <span className="text-white/40">|</span>
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy</a>
              <span className="text-white/40">|</span>
              <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </footer>
  )
}
