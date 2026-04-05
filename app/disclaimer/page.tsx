"use client"
import { AlertTriangle, Info, ExternalLink, ShieldAlert, Zap, FileText } from "lucide-react"

export default function DisclaimerPage() {
  const sections = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "1. General Disclaimer",
      content: [
        {
          text: "The information provided on this website is for informational purposes only. CNBC LLC makes no warranties or representations, express or implied, as to the accuracy, completeness, or reliability of any content, product, or service offered on this website.",
        },
      ],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "2. No Professional Advice",
      content: [
        {
          text: "The content on this website is not intended to provide professional, legal, financial, or medical advice. If you require professional advice in any of these areas, please consult with a qualified professional in your area.",
        },
      ],
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "3. Limitation of Liability",
      content: [
        {
          text: "CNBC LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:",
          list: [
            "Your access to or use of the website",
            "Your reliance on any information contained on the website",
            "Any technical issues or downtime of the website",
            "Unauthorized access to or alteration of your transmissions or data",
            "The conduct of any third parties using the website",
          ],
        },
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "4. Accuracy of Information",
      content: [
        {
          subtitle: "4.1 No Guarantee",
          text: "While we strive to provide accurate and up-to-date information, CNBC LLC makes no representation that the website will be error-free or uninterrupted.",
        },
        {
          subtitle: "4.2 Product Specifications",
          text: "Product descriptions, pricing, and availability on this website are subject to change without notice. We reserve the right to correct any errors in pricing or product information.",
        },
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "5. Third-Party Links",
      content: [
        {
          text: "This website may contain links to third-party websites. CNBC LLC is not responsible for:",
          list: [
            "The content, accuracy, or practices of third-party websites",
            "Any transactions or interactions with third parties",
            "Any damages or losses resulting from third-party content",
          ],
        },
        {
          subtitle: "5.1 External Links Disclaimer",
          text: "We do not endorse or control the content of external websites. Users access them at their own risk.",
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "6. User-Generated Content",
      content: [
        {
          text: "If your website allows user-generated content, CNBC LLC:",
          list: [
            "Is not responsible for the accuracy or legality of user submissions",
            "Does not endorse views or opinions expressed by users",
            "Reserves the right to remove or modify user content",
            "May use user content in accordance with our terms and privacy policy",
          ],
        },
      ],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "7. Intellectual Property",
      content: [
        {
          text: "All content on this website, including text, graphics, logos, images, and software, is the property of CNBC LLC or its licensors and is protected by copyright and other intellectual property laws.",
          list: [
            "You may not copy, reproduce, or distribute content without permission",
            "You may not reverse-engineer or modify any software",
            "Unauthorized use may result in legal action",
          ],
        },
      ],
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "8. Website Availability",
      content: [
        {
          text: "CNBC LLC does not guarantee that the website will be available at all times. We are not liable for:",
          list: [
            "Scheduled or unscheduled maintenance",
            "Technical failures or system outages",
            "Interruptions beyond our reasonable control",
            "Lost data or corrupted files",
          ],
        },
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "9. Security Disclaimer",
      content: [
        {
          text: "While we implement security measures to protect your information, no website is completely secure. You acknowledge that:",
          list: [
            "You use the website at your own risk",
            "We are not liable for unauthorized access to your account",
            "You are responsible for keeping your login credentials secure",
            "Transmission of data over the internet carries inherent risks",
          ],
        },
      ],
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "10. Product Warranties",
      content: [
        {
          text: "CNBC LLC provides products and services \"AS IS\" without any warranties. We specifically disclaim:",
          list: [
            "Implied warranties of merchantability or fitness for a particular purpose",
            "Warranties that products will meet your requirements",
            "Warranties that services will be uninterrupted or error-free",
          ],
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "11. Payment & Billing",
      content: [
        {
          text: "Payment information is provided for authorization purposes only. By providing payment details, you authorize CNBC LLC to charge your account for services. CNBC LLC is not responsible for:",
          list: [
            "Unauthorized charges by third parties",
            "Payment processing errors by your financial institution",
            "Lost or delayed payment processing",
          ],
        },
      ],
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "12. Changes to This Disclaimer",
      content: [
        {
          text: "CNBC LLC reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of any changes.",
        },
      ],
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "13. Severability",
      content: [
        {
          text: "If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.",
        },
      ],
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "14. Contact Information",
      content: [
        {
          text: "If you have questions about this disclaimer, please contact us:",
          list: [
            "Email: cnbc.jp@gmail.com",
            "Address: Broadcasting & Media District",
            "Response time: Within 30 days",
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
              <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Disclaimer
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Important information about the use of our website and services
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
                Please read this disclaimer carefully before using our website and services. By accessing and using
                this website, you agree to be bound by the terms and conditions outlined in this disclaimer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Sections */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Our Disclaimer?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              If you have any concerns or need clarification on any of these terms, please get in touch with us.
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
