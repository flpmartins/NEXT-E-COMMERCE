import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechStore - Tecnologia e Gaming",
  description:
    "Sua loja completa de tecnologia, hardware e produtos gamer. Os melhores equipamentos para elevar seu game!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  )
}
