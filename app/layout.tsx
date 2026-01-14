import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sfPro = localFont({
  src: "../public/SF-Pro.ttf",
  variable: "--font-sf-pro",
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
      <body className={`${sfPro.variable} ${britannica.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
