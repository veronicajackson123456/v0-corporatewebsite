"use client"
import { Tv, Film, Network, Radio } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Film,
      title: "Film Production Services",
      description:
        "Comprehensive support for pre-production, production, and post-production phases. Expertise in casting, location scouting, and crafting visually stunning narratives.",
      features: ["Pre-Production Planning", "Expert Casting", "Location Scouting", "Post-Production Excellence"],
    },
    {
      icon: Tv,
      title: "Broadcasting Solutions",
      description:
        "Cutting-edge broadcasting services to amplify reach and engagement. Integration of traditional and digital broadcasting platforms for seamless delivery.",
      features: ["Traditional Broadcasting", "Digital Platforms", "Seamless Integration", "Global Reach"],
    },
    {
      icon: Network,
      title: "Unmatched Expertise",
      description:
        "Our team brings decades of industry experience across film, television, live events, and music. We deliver excellence in every project we undertake.",
      features: ["Industry Veterans", "Award-Winning Team", "Proven Track Record", "Quality Assurance"],
    },
    {
      icon: Radio,
      title: "Innovative Edge",
      description:
        "CNBC is redefining the creative landscape with cutting-edge technology and innovative storytelling techniques that captivate audiences worldwide.",
      features: ["Latest Technology", "Creative Innovation", "Trend-Setting Narratives", "Audience Engagement"],
    },
  ]

  return (
    <section id="services" className="relative bg-black py-20 md:py-32 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            What We <span className="text-orange-500">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            From studio films to independent projects, we partner with global talent to create stories that inspire
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-zinc-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 md:p-10 hover:border-orange-500/30 hover:bg-zinc-900/70 transition-all duration-500 hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-orange-500/10 rounded-2xl group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-orange-500" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange-500/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-500 text-lg mb-6">Let's Create Magic Together</p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Your vision deserves to shine on the global stage. Get in touch with CNBC today to explore how we can bring
            your story to life.
          </p>
          <div className="inline-block px-8 py-3 border border-orange-500/30 rounded-full text-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer">
            <span className="font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          </div>
        </div>
      </div>
    </section>
  )
}
