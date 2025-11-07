import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "@/components/preloader"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollProgressBar from "@/components/scroll-progress-bar"
import WhatsAppButton from "@/components/whatsapp-button"
import { ToastContainer } from "@/components/toast-container"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MDK HARDWARE - Premium PC & Networking Solutions",
  description: "Jual PC Rakitan, Hardware PC, dan Networking Equipment berkualitas tinggi dengan harga kompetitif.",
  keywords: "PC Rakitan, Hardware PC, Networking Equipment, Komputer, MDK HARDWARE",
  openGraph: {
    title: "MDK HARDWARE - Premium PC & Networking Solutions",
    description: "Jual PC Rakitan, Hardware PC, dan Networking Equipment berkualitas tinggi.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-mdk.png",
    shortcut: "/logo-mdk.png",
    apple: "/logo-mdk.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />

        {/* favicon utama */}
        <link rel="icon" href="/logo-mdk.png" />

        <link rel="canonical" href="https://mdkhardware.com" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {/* PRELOADER ADA DISINI */}
          <Preloader duration={1800} showOnce={true} playSound={true} />

          <ScrollProgressBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
