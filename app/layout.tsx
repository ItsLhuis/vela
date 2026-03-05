import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const baseUrl = "https://itslhuis.github.io/vela"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Vela",
    template: "%s | Vela",
  },
  description: "Real-time infrastructure visibility for developer teams.",
  openGraph: {
    title: "Vela",
    description: "Real-time infrastructure visibility for developer teams.",
    url: baseUrl,
    siteName: "Vela",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vela",
    description: "Real-time infrastructure visibility for developer teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
