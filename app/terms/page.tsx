"use client"
import { FileText, Shield, AlertCircle, Scale, Lock, ExternalLink } from "lucide-react"

export default function TermsConditionsPage() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "1. Accounts & User Responsibilities",
      content: [
        {
          subtitle: "1.1 Account Creation",
          text: "To access certain features, you may need to create an account. You must provide accurate information and maintain the security of your login credentials.",
        },
        {
          subtitle: "1.2 Account Suspension & Termination",
          text: "We reserve the right to suspend or terminate accounts that violate these Terms. Users may delete their accounts at any time.",
        },
      ],
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "2. Website Use & Restrictions",
      content: [
        {
          subtitle: "2.1 License to Use the Site",
          text: "CNBC LLC grants you a limited, non-transferable, revocable license to access and use the Site for personal and business purposes related to our services.",
        },
        {
          subtitle: "2.2 Prohibited Activities",
          text: "You may not:",
          list: [
            "Copy, sell, or exploit any part of the Site for commercial gain.",
            "Modify, reverse-engineer, or gain unauthorized access to the Site.",
            "Use the Site for fraudulent, illegal, or harmful activities.",
          ],
        },
        {
          subtitle: "2.3 Site Modifications",
          text: "CNBC LLC reserves the right to modify, suspend, or discontinue any part of the Site at any time without prior notice.",
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "3. Payments & Billing",
      content: [
        {
          text: "",
          list: [
            "All payments must be made in full before services are rendered.",
            "Late payments may result in service suspension or additional fees.",
            "CNBC LLC reserves the right to adjust pricing and will notify users of any changes.",
          ],
        },
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "4. Cancellation & Refund Policy",
      content: [
        {
          text: "Our Cancellation & Refund Policy applies to all services. Please refer to the full policy here.",
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "5. Intellectual Property Rights",
      content: [
        {
          text: "",
          list: [
            "All content, trademarks, logos, and materials on the Site are the property of CNBC LLC or its licensors.",
            "Unauthorized use or reproduction of any content is strictly prohibited.",
          ],
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "6. Limitation of Liability",
      content: [
        {
          text: "",
          list: [
            "CNBC LLC does not guarantee that the Site will be error-free, uninterrupted, or meet your specific needs.",
            "CNBC LLC is not liable for any indirect, incidental, or consequential damages resulting from the use of the Site.",
            "Accessing the Site is at your own risk.",
          ],
        },
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "7. Third-Party Links & Advertisements",
      content: [
        {
          text: "The Site may contain links to third-party websites and advertisements. CNBC LLC is not responsible for third-party content.",
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "8. Privacy & Data Protection",
      content: [
        {
          text: "Our Privacy Policy outlines how we collect, store, and protect your personal data. By using the Site, you agree to our data practices.",
        },
      ],
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "9. Dispute Resolution & Governing Law",
      content: [
        {
          text: "",
          list: [
            "Any disputes will be resolved through binding arbitration under the laws of [Specify Country/State].",
            "Users waive the right to participate in class-action lawsuits.",
          ],
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "10. Changes to These Terms",
      content: [
        {
          text: "CNBC LLC may update these Terms from time to time. Continued use of the Site constitutes acceptance of any changes.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Terms & Conditions
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">CNBC LLC</p>

            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="font-semibold">Version 1.0</span>
              <span>|</span>
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Welcome to CNBC LLC. By accessing or using our website{" "}
                <a href="https://www.cnbc.uk.com" className="text-orange-600 font-semibold hover:underline">
                  www.cnbc.uk.com
                </a>{" "}
                (the "Site"), you agree to comply with these Terms & Conditions ("Terms"). If you do not agree with any
                part of these Terms, please refrain from using our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="p-6 md:p-8">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 bg-orange-100 text-orange-600 p-3 rounded-lg">{section.icon}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight pt-2">{section.title}</h2>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-6 ml-0 md:ml-16">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {"subtitle" in item && item.subtitle && (
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{item.subtitle}</h3>
                        )}

                        {item.text && <p className="text-gray-700 leading-relaxed mb-3">{item.text}</p>}

                        {"list" in item && item.list && (
                          <ul className="space-y-2 ml-4">
                            {item.list.map((listItem: string, listIndex: number) => (
                              <li key={listIndex} className="flex items-start gap-3 text-gray-700">
                                <span className="text-orange-600 font-bold mt-1">•</span>
                                <span>{listItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Our Terms?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              If you have any questions or concerns about these Terms & Conditions, please don't hesitate to contact us.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-base hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wide"
            >
              Contact Us
            </a>
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
