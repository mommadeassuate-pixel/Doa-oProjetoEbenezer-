import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ajude Ana - Vaquinha Online | Vakinha",
  description: "Ajude Ana a se aproximar da cura. Sua doação faz diferença. Vaquinha online segura e confiável.",
  keywords: "vaquinha, crowdfunding, doação, solidariedade",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body className={`font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
        <style>{`
          html, body {
            width: 100vw;
            max-width: 100vw;
            overflow-x: hidden;
          }
          div[data-v0-powered-by] {
            display: none !important;
          }
          *[class*="v0-powered"] {
            display: none !important;
          }
          [style*="Built with"] {
            display: none !important;
          }
        `}</style>
      </body>
    </html>
  )
}
