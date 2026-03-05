import type { Metadata } from "next"

import "./globals.css"

const baseUrl = "https://itslhuis.github.io/vela"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vela",
    template: "%s | Vela"
  },
  description: "Vela",
  openGraph: {
    title: "Vela",
    description: "Vela",
    url: baseUrl,
    siteName: "Vela",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vela",
    description: "Vela"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
