"use client"
import { Lock, Shield, Eye, Database, UserCheck, RefreshCw } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "1. Introduction",
      content: [
        {
          text: "CNBC LLC (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our Services.",
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "2. Information We Collect",
      content: [
        {
          subtitle: "2.1 Information You Provide Directly",
          text: "We collect information you voluntarily provide, including:",
          list: [
            "Name, email address, phone number, and contact details",
            "Account credentials and profile information",
            "Payment information (processed securely by third parties)",
            "Communications you send us (emails, messages, inquiries)",
            "Information provided through forms on our website",
          ],
        },
        {
          subtitle: "2.2 Automatically Collected Information",
          text: "When you visit our website, we automatically collect:",
          list: [
            "IP address and device information",
            "Browser type, operating system, and version",
            "Pages visited and time spent on each page",
            "Referring/exit pages and click patterns",
            "Cookies and similar tracking technologies",
          ],
        },
        {
          subtitle: "2.3 Information from Third Parties",
          text: "We may receive information about you from third-party sources such as analytics providers, payment processors, and advertising partners.",
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "3. How We Use Your Information",
      content: [
        {
          text: "We use the information we collect for:",
          list: [
            "Providing and improving our services and website",
            "Processing transactions and sending billing information",
            "Sending promotional emails and marketing communications (with your consent)",
            "Responding to your inquiries and customer support requests",
            "Analyzing usage patterns to enhance user experience",
            "Detecting and preventing fraud and security incidents",
            "Complying with legal obligations and enforcing our agreements",
            "Personalization of content and recommendations",
          ],
        },
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "4. Legal Basis for Processing",
      content: [
        {
          text: "We process your personal data based on:",
          list: [
            "Consent you have given us",
            "Performance of a contract with you",
            "Compliance with our legal obligations",
            "Protection of vital interests",
            "Performance of a task carried out in the public interest",
            "Legitimate interests pursued by us or third parties (where not overridden by your rights)",
          ],
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "5. Data Protection & Security",
      content: [
        {
          text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include:",
          list: [
            "SSL/TLS encryption for data in transit",
            "Secure password storage and authentication mechanisms",
            "Regular security audits and assessments",
            "Limited access to personal data by authorized personnel only",
            "Secure data storage with encryption at rest",
          ],
        },
        {
          subtitle: "5.1 Your Responsibilities",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "6. Data Sharing & Disclosure",
      content: [
        {
          text: "We may share your information with:",
          list: [
            "Service providers who assist in operating our website and conducting business",
            "Legal authorities when required by law or to protect our rights",
            "Third parties with your explicit consent",
            "Business partners in connection with joint offerings",
            "Payment processors to complete transactions",
          ],
        },
        {
          subtitle: "6.1 Data Retention",
          text: "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law. You may request deletion of your data at any time.",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "7. Your Rights & Choices",
      content: [
        {
          text: "Depending on your location, you may have the following rights:",
          list: [
            "Right to access your personal data",
            "Right to rectify or update inaccurate data",
            "Right to request deletion of your data (Right to be Forgotten)",
            "Right to restrict processing of your data",
            "Right to data portability",
            "Right to object to processing",
            "Right to withdraw consent at any time",
            "Right to lodge a complaint with a supervisory authority",
          ],
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "8. Cookies & Tracking Technologies",
      content: [
        {
          text: "We use cookies and similar tracking technologies to enhance your experience. This includes:",
          list: [
            "Session cookies for website functionality",
            "Persistent cookies for remembering preferences",
            "Analytics cookies to understand user behavior",
            "Marketing cookies for targeted advertising",
          ],
        },
        {
          subtitle: "8.1 Cookie Consent",
          text: "You can control cookie settings through your browser. However, disabling certain cookies may affect website functionality.",
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "9. Third-Party Links & Services",
      content: [
        {
          text: "Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "10. International Data Transfers",
      content: [
        {
          text: "Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to such transfers.",
        },
      ],
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "11. Children's Privacy",
      content: [
        {
          text: "Our services are not directed to children under 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it immediately.",
        },
      ],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "12. GDPR & CCPA Compliance",
      content: [
        {
          text: "We comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). For residents of California, you have specific rights including the right to know, delete, and opt-out of the sale of personal information.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "13. Changes to This Privacy Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \"Last Modified\" date. Your continued use of our services constitutes your acceptance of these changes.",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "14. Contact Us",
      content: [
        {
          text: "If you have questions about this Privacy Policy or our privacy practices, please contact us at:",
          list: [
            "Email: cnbc.jp@gmail.com",
            "Address: Broadcasting & Media District",
            "We will respond to your inquiry within 30 days",
          ],
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
              <Lock className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              How we collect, use, and protect your data
            </p>

            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="font-semibold">Version 1.0</span>
              <span>|</span>
              <span>Last Modified: April 2026</span>
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
                Your privacy is important to us. This Privacy Policy explains our practices regarding data collection
                and your rights under various privacy laws including GDPR and CCPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Questions?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              If you have any questions about our Privacy Policy or how we handle your data, please contact us.
            </p>
            <a
              href="/contact"
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
