import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const neueMontreal = localFont({
  src: [
    {
      path: "../public/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
})

const britannica = localFont({
  src: "../public/britanica-semi-expanded-heavy.ttf",
  variable: "--font-britannica",
  weight: "700",
})

export const metadata: Metadata = {
  title: "NetaBridge - Utilize Your Networks",
  description:
    "Find the right people, leverage your connections, and unlock opportunities through intelligent relationship mapping.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} ${britannica.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
