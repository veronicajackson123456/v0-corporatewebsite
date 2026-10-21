import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corporatenetworkbroadcastingcinema.com"),
  title: {
    default: "CNBC LLC | Film Production and Broadcasting",
    template: "%s | CNBC LLC",
  },
  description:
    "CNBC LLC is a film production and broadcasting company creating compelling screen stories for global audiences.",
  alternates: {
    canonical: "https://www.corporatenetworkbroadcastingcinema.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.corporatenetworkbroadcastingcinema.com",
    siteName: "CNBC LLC",
    title: "CNBC LLC | Film Production and Broadcasting",
    description:
      "Corporate Network Broadcasting Cinema creates compelling feature films and broadcast content for global audiences.",
  },
  twitter: {
    card: "summary",
    title: "CNBC LLC | Film Production and Broadcasting",
    description:
      "Corporate Network Broadcasting Cinema creates compelling feature films and broadcast content for global audiences.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
