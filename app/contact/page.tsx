"use client"

import Navbar from "@/components/Navbar"
import type React from "react"
import { useState } from "react"
import { Mail, MapPin, Phone, Send, Building, Globe, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error")
      setTimeout(() => setStatus(""), 3000)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus("error")
      setTimeout(() => setStatus(""), 3000)
      return
    }

    setStatus("success")
    setTimeout(() => {
      setStatus("")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@cnbc.uk.com",
      link: "mailto:info@cnbc.uk.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (307) 555-0123",
      link: "tel:+13075550123",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Production Office",
      content: "30 NORTH GOULD STREET, SHERIDAN WYOMING USA",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">
                Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Get In Touch</h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              We'd love to collaborate with you! For inquiries about our film production and broadcasting services,
              please reach out through the following channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="bg-orange-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-orange-600 hover:text-orange-700 font-semibold break-words transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alternatively, you can fill out the contact form below, and a member of our team will get back to you
                promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Inquiry about services"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  {status === "success" && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                      Please fill in all required fields correctly.
                    </div>
                  )}
                </div>
              </div>

              {/* Office Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Building className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Production Office</h3>
                      <p className="text-gray-700 leading-relaxed">
                        CNBC LLC
                        <br />
                        (CORPORATE NETWORK FOR BROADCASTING AND CINEMA)
                        <br />
                        30 NORTH GOULD STREET
                        <br />
                        SHERIDAN, WYOMING
                        <br />
                        USA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Globe className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Departments</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Production</p>
                          <p className="text-gray-800 font-medium">CNBC LLC, USA</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Advertising/Sponsorship
                          </p>
                          <p className="text-gray-800 font-medium">CNBC FINANCE OFFICE LTD, UK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg p-6 md:p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                  <div className="space-y-2 text-white/90">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
