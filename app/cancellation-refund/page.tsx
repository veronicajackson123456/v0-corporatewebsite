"use client"
import { XCircle, RefreshCw, CheckCircle, AlertTriangle, Clock, DollarSign } from "lucide-react"

export default function CancellationRefundPage() {
  const sections = [
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "1. Cancellations",
      color: "blue",
      content: [
        {
          subtitle: "1.1 Service Cancellations",
          text: "Clients may request a cancellation within 48 hours of purchasing a service. After this period, cancellations may not be eligible for a refund.",
        },
        {
          subtitle: "1.2 Subscription Services",
          text: "Subscription-based services can be canceled at any time. However, cancellations will apply to the next billing cycle, and no refunds will be issued for the current period.",
        },
        {
          subtitle: "1.3 Custom & Digital Services",
          text: "Orders for custom services, digital solutions, or personalized work cannot be canceled once production or work has begun.",
        },
      ],
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "2. Refunds",
      color: "green",
      content: [
        {
          subtitle: "2.1 Eligibility for Refunds",
          text: "Refunds will only be processed under the following conditions:",
          list: [
            "The cancellation request was made within the allowed timeframe.",
            "CNBC UK failed to deliver the agreed-upon services.",
            "A technical issue prevented the completion of the service.",
          ],
        },
        {
          subtitle: "2.2 Non-Refundable Items & Services",
          text: "The following services are non-refundable:",
          list: [
            "Custom development or personalized services.",
            "Digital products or downloads.",
            "Third-party service fees.",
            "Consultation fees once the session has started.",
          ],
        },
        {
          subtitle: "2.3 Refund Processing",
          text: "Approved refunds will be processed within 7-10 business days and credited to the original payment method. Clients are responsible for any transaction fees incurred during the refund process.",
        },
      ],
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "3. Exceptions & Special Cases",
      color: "yellow",
      content: [
        {
          text: "Refunds or credits may be considered under the following circumstances:",
          list: [
            "Errors caused by CNBC UK affecting service delivery.",
            "Disruptions due to technical failures on our end.",
            "Other extenuating circumstances, reviewed on a case-by-case basis.",
          ],
        },
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "4. Legal Disclaimer",
      color: "red",
      content: [
        {
          text: "CNBC UK reserves the right to modify this policy at any time without prior notice. By engaging with our services, clients agree to abide by this policy.",
        },
      ],
    },
  ]

  const quickFacts = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "48 Hours",
      description: "Cancellation window for service refunds",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "7-10 Days",
      description: "Refund processing time",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Full Refund",
      description: "If we fail to deliver services",
      color: "bg-orange-100 text-orange-600",
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
              <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <span className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-widest">Policy</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Cancellation & Refund Policy
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">CNBC UK</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className={`${fact.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    {fact.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{fact.title}</h3>
                  <p className="text-gray-600 text-sm">{fact.description}</p>
                </div>
              ))}
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
                At CNBC UK, we are committed to delivering high-quality services and ensuring customer satisfaction.
                Please read our Cancellation & Refund Policy carefully before making a purchase.
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
                    <div
                      className={`flex-shrink-0 ${
                        section.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : section.color === "green"
                            ? "bg-green-100 text-green-600"
                            : section.color === "yellow"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                      } p-3 rounded-lg`}
                    >
                      {section.icon}
                    </div>
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
                                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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

      {/* Important Notice */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-orange-600">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This policy is designed to ensure transparency and fairness in all our business transactions. We
                    recommend that all clients review this policy before engaging with our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For any questions or concerns regarding cancellations or refunds, please contact our customer
                    support team at{" "}
                    <a href="mailto:cnbc.jp@gmail.com" className="text-orange-600 font-semibold hover:underline">
                      cnbc.jp@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help with a Refund?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our customer support team is here to assist you with any cancellation or refund requests.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-base hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wide"
            >
              Contact Support
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
