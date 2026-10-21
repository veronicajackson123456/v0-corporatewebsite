import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors | A Beautiful Kill",
  description:
    "Meet the organisations supporting CNBC LLC and the upcoming feature film A Beautiful Kill, including main sponsor Practice Plus Group.",
  openGraph: {
    title: "Sponsors | A Beautiful Kill",
    description:
      "Meet the organisations supporting CNBC LLC and the upcoming feature film A Beautiful Kill.",
    url: "/sponsors",
  },
}

export default function SponsorsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
