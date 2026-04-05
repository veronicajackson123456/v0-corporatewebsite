"use client"
import { Cookie, Settings, Eye, Shield, Database, RefreshCw } from "lucide-react"

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "1. What Are Cookies?",
      content: [
        {
          text: "Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They contain information about your browsing activity and preferences. Cookies help websites remember information about you and provide a better user experience.",
        },
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "2. Types of Cookies We Use",
      content: [
        {
          subtitle: "2.1 Essential Cookies",
          text: "These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.",
          list: ["Session cookies", "Authentication cookies", "Security cookies"],
        },
        {
          subtitle: "2.2 Performance & Analytics Cookies",
          text: "These cookies collect information about how you use our website, such as pages visited, time spent, and click patterns. This helps us improve our services.",
          list: ["Google Analytics", "Heatmap tracking", "Usage statistics"],
        },
        {
          subtitle: "2.3 Functionality Cookies",
          text: "These cookies remember your preferences and choices to provide a personalized experience.",
          list: ["Language preferences", "Theme settings", "Saved preferences"],
        },
        {
          subtitle: "2.4 Marketing & Advertising Cookies",
          text: "These cookies track your behavior to deliver targeted advertising and measure campaign effectiveness.",
          list: ["Retargeting pixels", "Social media cookies", "Advertising networks"],
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "3. Third-Party Cookies",
      content: [
        {
          text: "Some cookies are placed by third-party services we use, including:",
          list: [
            "Google Analytics for website analytics",
            "Facebook Pixel for advertising purposes",
            "LinkedIn for professional tracking",
            "Third-party payment processors",
            "Content delivery networks (CDNs)",
          ],
        },
        {
          subtitle: "3.1 Third-Party Control",
          text: "We do not control third-party cookies. Please review their privacy policies for how they handle your data.",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "4. How We Use Cookie Data",
      content: [
        {
          text: "We use cookie data for:",
          list: [
            "Maintaining your login session and account security",
            "Remembering your preferences and settings",
            "Understanding user behavior and website performance",
            "Personalizing content and recommendations",
            "Measuring advertising effectiveness",
            "Improving website functionality and user experience",
            "Detecting and preventing fraud",
          ],
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "5. Cookie Consent & Management",
      content: [
        {
          subtitle: "5.1 Consent Banner",
          text: "When you first visit our website, you will see a cookie consent banner. You can choose to:",
          list: [
            "Accept all cookies",
            "Reject non-essential cookies",
            "Customize your cookie preferences",
          ],
        },
        {
          subtitle: "5.2 Browser Controls",
          text: "You can control cookies through your browser settings:",
          list: [
            "Block all cookies",
            "Allow cookies only from this site",
            "Clear cookies from your device",
            "Receive a warning when a cookie is set",
          ],
        },
        {
          subtitle: "5.3 Disabling Cookies",
          text: "If you disable cookies, some features of our website may not work properly. Essential cookies cannot be disabled.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "6. Cookie Duration",
      content: [
        {
          text: "",
          list: [
            "Session Cookies: Deleted when you close your browser",
            "Persistent Cookies: Stored for a specified period (typically 1 month to 2 years)",
            "Analytics Cookies: Usually stored for up to 26 months",
            "Marketing Cookies: Vary based on the third-party provider",
          ],
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "7. Do-Not-Track (DNT) Signals",
      content: [
        {
          text: "If your browser sends a DNT signal, we respect your preference. However, not all third-party services honor DNT signals. You may need to configure settings with each service individually.",
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "8. Cookie Opt-Out",
      content: [
        {
          subtitle: "8.1 Google Analytics Opt-Out",
          text: "You can download the Google Analytics opt-out browser add-on to prevent your data from being used by Google Analytics.",
        },
        {
          subtitle: "8.2 Advertising Networks Opt-Out",
          text: "You can opt out of targeted advertising from various networks through:",
          list: [
            "Network Advertising Initiative (NAI)",
            "Digital Advertising Alliance (DAA)",
            "European Digital Advertising Alliance (EDAA)",
          ],
        },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "9. Compliance with Laws",
      content: [
        {
          text: "Our use of cookies complies with various privacy regulations including:",
          list: [
            "General Data Protection Regulation (GDPR)",
            "ePrivacy Directive",
            "California Consumer Privacy Act (CCPA)",
            "Cooking Law regulations in various countries",
          ],
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "10. Changes to This Cookie Policy",
      content: [
        {
          text: "We may update this Cookie Policy from time to time. Any significant changes will be communicated to you through the website or via email if you have an account with us.",
        },
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "11. Contact Us",
      content: [
        {
          text: "If you have questions about our Cookie Policy or wish to modify your cookie preferences, please contact us at:",
          list: [
            "Email: cnbc.jp@gmail.com",
            "Address: Broadcasting & Media District",
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
              <Cookie className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">Legal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Cookie Policy
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Understanding how we use cookies and similar technologies
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
                This Cookie Policy explains what cookies are, how we use them, and how you can control them. By using
                our website, you agree to our use of cookies as described in this policy.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cookie Questions?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              If you have questions about our use of cookies or would like to manage your preferences, please reach out.
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
