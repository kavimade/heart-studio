import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
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

const SITE_URL = "https://heartstudiodn.com"

export const metadata: Metadata = {
  title: "Yoga Classes in Da Nang | Heart Studio by Chan",
  description:
    "Yoga classes in Da Nang for all levels — Hatha, Vinyasa, Yin, and more. Book a class at Heart Studio with Chan. Taught in English and Vietnamese.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "vi": SITE_URL,
    },
  },
  openGraph: {
    title: "Yoga Classes in Da Nang | Heart Studio by Chan",
    description:
      "Yoga classes in Da Nang for all levels — Hatha, Vinyasa, Yin, and more. Book a class at Heart Studio with Chan. Taught in English and Vietnamese.",
    url: SITE_URL,
    siteName: "Heart Studio by Chan",
    locale: "en_US",
    alternateLocale: ["vi_VN"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/heart-studio-yoga-danang-hero-1.webp`,
        width: 1200,
        height: 800,
        alt: "Heart Studio yoga space — Da Nang, Vietnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Classes in Da Nang | Heart Studio by Chan",
    description:
      "Yoga classes in Da Nang for all levels — Hatha, Vinyasa, Yin, and more. Book a class at Heart Studio with Chan.",
    images: [`${SITE_URL}/images/heart-studio-yoga-danang-hero-1.webp`],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsActivityLocation",
      "@id": `${SITE_URL}/#business`,
      "name": "Heart Studio by Chan",
      "description":
        "A small, intentional yoga studio in Da Nang, Vietnam. Hatha, Vinyasa, Yin, and functional movement classes taught by Chan. All levels welcome. Classes in English and Vietnamese.",
      "url": SITE_URL,
      "image": `${SITE_URL}/images/heart-studio-yoga-danang-hero-1.webp`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "36 Nai Nam 8",
        "addressLocality": "Hai Chau",
        "addressRegion": "Da Nang",
        "addressCountry": "VN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.0544,
        "longitude": 108.2022,
      },
      "hasMap": "https://maps.app.goo.gl/262E4hjNeNseDdKGA",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "9",
        "bestRating": "5",
        "worstRating": "1",
      },
      "sameAs": ["https://www.instagram.com/heartstudio.dn"],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00",
        },
      ],
      "inLanguage": ["en", "vi"],
      "founder": { "@id": `${SITE_URL}/#chan` },
      "employee": { "@id": `${SITE_URL}/#chan` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#chan`,
      "name": "Chan",
      "jobTitle": "Yoga Teacher & Studio Founder",
      "description":
        "Yoga teacher with 8 years of experience and over 1,000 hours of training in yoga, anatomy, and therapeutic movement. Has led anatomy trainings and mentorship programs for teachers across Vietnam. Studied in Hoi An, Thailand, and Bali.",
      "worksFor": { "@id": `${SITE_URL}/#business` },
      "sameAs": ["https://www.instagram.com/heartstudio.dn"],
      "knowsLanguage": ["en", "vi"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": "Heart Studio by Chan",
      "url": SITE_URL,
      "inLanguage": ["en", "vi"],
      "publisher": { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "Service",
      "name": "Hatha Yoga",
      "description":
        "A slower, deliberate practice focused on alignment, awareness, and the deeper meaning within each posture. All levels welcome.",
      "serviceType": "Yoga Class",
      "provider": { "@id": `${SITE_URL}/#business` },
      "areaServed": { "@type": "City", "name": "Da Nang", "addressCountry": "VN" },
    },
    {
      "@type": "Service",
      "name": "Vinyasa Yoga",
      "description":
        "Strength, resilience, focus, and flow linked together through breath. Playful and challenging.",
      "serviceType": "Yoga Class",
      "provider": { "@id": `${SITE_URL}/#business` },
      "areaServed": { "@type": "City", "name": "Da Nang", "addressCountry": "VN" },
    },
    {
      "@type": "Service",
      "name": "Yin Yoga",
      "description":
        "Long-held postures that release deep tension, calm the nervous system, and return you to stillness. All levels welcome.",
      "serviceType": "Yoga Class",
      "provider": { "@id": `${SITE_URL}/#business` },
      "areaServed": { "@type": "City", "name": "Da Nang", "addressCountry": "VN" },
    },
    {
      "@type": "Service",
      "name": "Breath, Core & Posture",
      "description":
        "Functional movement class for spinal health, core strength, and breath mechanics. Ideal for people who sit at desks or carry tension in the spine.",
      "serviceType": "Yoga Class",
      "provider": { "@id": `${SITE_URL}/#business` },
      "areaServed": { "@type": "City", "name": "Da Nang", "addressCountry": "VN" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where are you located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "36 Nai Nam 8, Hai Chau, Da Nang, Vietnam.",
          },
        },
        {
          "@type": "Question",
          "name": "I'm new to yoga. Is this the right place for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All classes at Heart are open to beginners. Chan teaches with precision and care — you'll never feel lost or left behind. Hatha or Yin is a good place to start.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I bring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfortable movement clothing. Mats and props are provided. You're welcome to bring your own mat if you prefer.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through the schedule on the website or the Vibefam app. First-time visitors are also welcome to message us directly.",
          },
        },
        {
          "@type": "Question",
          "name": "What is your cancellation policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Free cancellation up to 3 hours before class. Late cancellations or no-shows may be counted against your package.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer private sessions or workshops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Chan offers workshops periodically and is available for private sessions. Send us a message to arrange.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you teach in English and Vietnamese?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Chan teaches comfortably in either language. All communications are bilingual.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I rent the studio space?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The studio is available for workshops, events, and content creation. It's a beautiful, calm space — ideal for wellness teachers, photographers, and creators. Send us a message to check availability.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJ5BNN9D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PJ5BNN9D');`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-hs-white focus:text-hs-text focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
