import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const cormorantGaramond = localFont({
  variable: "--font-cormorant-garamond",
  display: "swap",
  src: [
    { path: "../public/fonts/cormorant-garamond-300.woff2",        weight: "300", style: "normal" },
    { path: "../public/fonts/cormorant-garamond-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/cormorant-garamond-400.woff2",        weight: "400", style: "normal" },
    { path: "../public/fonts/cormorant-garamond-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/cormorant-garamond-500.woff2",        weight: "500", style: "normal" },
    { path: "../public/fonts/cormorant-garamond-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/cormorant-garamond-600.woff2",        weight: "600", style: "normal" },
    { path: "../public/fonts/cormorant-garamond-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../public/fonts/cormorant-garamond-700.woff2",        weight: "700", style: "normal" },
    { path: "../public/fonts/cormorant-garamond-700-italic.woff2", weight: "700", style: "italic" },
  ],
})

const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../public/fonts/dm-sans-300.woff2",        weight: "300", style: "normal" },
    { path: "../public/fonts/dm-sans-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/dm-sans-400.woff2",        weight: "400", style: "normal" },
    { path: "../public/fonts/dm-sans-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/dm-sans-500.woff2",        weight: "500", style: "normal" },
    { path: "../public/fonts/dm-sans-600.woff2",        weight: "600", style: "normal" },
  ],
})

export const metadata: Metadata = {
  title: "Heart Studio by Chan — Yoga in Da Nang",
  description:
    "A small, intentional yoga studio in Da Nang. Hatha, Vinyasa, Yin, and functional movement classes taught by Chan. All levels welcome.",
  keywords: "yoga Da Nang, yoga studio Da Nang, Hatha yoga, Vinyasa Da Nang, Yin yoga, Heart Studio",
  openGraph: {
    title: "Heart Studio by Chan — Yoga in Da Nang",
    description: "Intentional yoga classes in Da Nang. All levels welcome.",
    url: "https://heartstudio.vn",
    siteName: "Heart Studio by Chan",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
