"use client"

import dynamic from "next/dynamic"
import "./studio.css"

const Studio = dynamic(
  async () => {
    const [{ NextStudio }, config] = await Promise.all([
      import("next-sanity/studio"),
      import("@/sanity.config"),
    ])
    const S = () => <NextStudio config={config.default} />
    S.displayName = "SanityStudio"
    return S
  },
  { ssr: false }
)

export default function StudioPage() {
  return <Studio />
}
