"use client"
import { Accessibility, Eye, Volume2, Keyboard, Monitor, Headphones } from "lucide-react"

export default function AccessibilityStatementPage() {
  const sections = [
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "1. Our Commitment to Accessibility",
      content: [
        {
          text: "CNBC LLC is committed to ensuring that our website is accessible to all individuals, including those with disabilities. We strive to follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to provide an inclusive digital experience for everyone.",
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "2. Visual Accessibility",
      content: [
        {
          text: "Our website includes the following features for users with visual impairments:",
          list: [
            "Alt text for all images describing their content and purpose",
            "High contrast color schemes for better readability",
            "Scalable fonts that can be enlarged without loss of functionality",
            "Support for browser zoom features",
            "Clear visual hierarchy with proper heading structure",
            "No content conveyed by color alone",
          ],
        },
      ],
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "3. Hearing Accessibility",
      content: [
        {
          text: "For users who are deaf or hard of hearing:",
          list: [
            "All audio and video content includes captions or transcripts",
            "Visual indicators for important alerts and notifications",
            "No information conveyed through sound alone",
            "Compatibility with hearing aid devices",
          ],
        },
      ],
    },
    {
      icon: <Keyboard className="w-6 h-6" />,
      title: "4. Motor Accessibility",
      content: [
        {
          text: "Our website is designed for users with mobility impairments:",
          list: [
            "Full keyboard navigation without requiring mouse input",
            "Adequate spacing between clickable elements to prevent accidental clicks",
            "Predictable navigation and focus indicators",
            "Support for voice control software",
            "Compatible with switch control devices",
            "No time limits on interactions (except where necessary for security)",
          ],
        },
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "5. Cognitive Accessibility",
      content: [
        {
          text: "For users with cognitive disabilities:",
          list: [
            "Clear and simple language used throughout the website",
            "Consistent navigation and layout across all pages",
            "Instructions and error messages that are easy to understand",
            "Predictable behavior when interacting with website elements",
            "Avoidance of distracting animations or flashing content",
            "Ample white space and organized content structure",
          ],
        },
      ],
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "6. Screen Reader Compatibility",
      content: [
        {
          text: "Our website is designed to work with screen readers including:",
          list: [
            "JAWS (Job Access With Speech)",
            "NVDA (NonVisual Desktop Access)",
            "VoiceOver (Apple devices)",
            "Proper semantic HTML markup for screen reader interpretation",
            "ARIA labels and roles for custom components",
            "Logical heading hierarchy and page structure",
          ],
        },
      ],
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "7. Technical Standards & Compliance",
      content: [
        {
          text: "We comply with the following standards:",
          list: [
            "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA",
            "Americans with Disabilities Act (ADA)",
            "Section 508 of the Rehabilitation Act",
            "EN 301 549 (European standard for ICT accessibility)",
          ],
        },
      ],
    },
    {
      icon: <Keyboard className="w-6 h-6" />,
      title: "8. Accessible Components",
      content: [
        {
          text: "",
          list: [
            "Forms with associated labels and error messages",
            "Buttons and links with descriptive text",
            "Data tables with proper headers and relationships",
            "Skip links to main content",
            "Focus visible indicators on all interactive elements",
            "Proper color contrast ratios (minimum 4.5:1 for text)",
          ],
        },
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "9. Accessibility Features",
      content: [
        {
          text: "We provide the following accessibility features:",
          list: [
            "Text resizing options in the browser settings",
            "High contrast mode support",
            "Adjustable letter spacing and line height",
            "Font selection options",
            "Reading mode compatible design",
            "Print-friendly layouts",
          ],
        },
      ],
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "10. Known Accessibility Limitations",
      content: [
        {
          text: "We are continuously working to improve accessibility. Currently, we are aware of the following limitations:",
          list: [
            "Some third-party embedded content may not be fully accessible",
            "PDF documents may require additional accessibility features",
            "Real-time video streams may have limited caption options",
          ],
        },
        {
          subtitle: "10.1 Workarounds",
          text: "If you encounter an inaccessible feature, please contact us and we will provide alternative means of accessing the information.",
        },
      ],
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "11. Accessibility Tools & Resources",
      content: [
        {
          text: "We recommend the following accessibility tools:",
          list: [
            "Browser extensions for color contrast checking",
            "Screen reader software for visually impaired users",
            "Voice recognition software for hands-free control",
            "Text-to-speech tools for reading assistance",
          ],
        },
      ],
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "12. Feedback & Accessibility Issues",
      content: [
        {
          text: "If you experience accessibility issues or have suggestions for improvement, please contact us. We welcome your feedback and will work to resolve any barriers you encounter.",
          list: [
            "Email: cnbc.jp@gmail.com",
            "Phone: Contact our support team",
            "Response time: We will respond within 5 business days",
          ],
        },
      ],
    },
    {
      icon: <Keyboard className="w-6 h-6" />,
      title: "13. Third-Party Content",
      content: [
        {
          text: "While we strive to ensure all content is accessible, some third-party content may not meet accessibility standards. If you encounter inaccessible third-party content, please let us know so we can address it.",
        },
      ],
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "14. Accessibility Statement Updates",
      content: [
        {
          text: "This Accessibility Statement is updated regularly as we implement improvements and new features. Last updated in April 2026.",
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
              <Accessibility className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">
                Accessibility
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Accessibility Statement
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Our commitment to inclusive web design and accessibility
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
                We believe the web should be accessible to everyone. This statement outlines our accessibility
                features and our commitment to ongoing improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Sections */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Report Accessibility Issues</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Encountered an accessibility barrier? Let us know and we&apos;ll work quickly to resolve it.
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
