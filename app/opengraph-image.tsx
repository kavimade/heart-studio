import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import path from "path"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  const [displayFont, sansFont] = await Promise.all([
    readFile(path.join(process.cwd(), "public/fonts/cormorant-garamond-600.ttf")),
    readFile(path.join(process.cwd(), "public/fonts/dm-sans-400.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          background: "#64644B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: "60px",
        }}
      >
        <div
          style={{
            color: "#FAFAF7",
            fontSize: 80,
            fontFamily: "Cormorant Garamond",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Heart Studio
        </div>
        <div
          style={{
            color: "#FAFAF7",
            fontSize: 26,
            fontFamily: "DM Sans",
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.65,
          }}
        >
          Yoga Classes · Da Nang, Vietnam
        </div>
        <div
          style={{
            width: 48,
            height: 1,
            background: "rgba(250,250,247,0.3)",
            marginTop: 6,
          }}
        />
        <div
          style={{
            color: "#FAFAF7",
            fontSize: 19,
            fontFamily: "DM Sans",
            fontWeight: 400,
            letterSpacing: "0.05em",
            opacity: 0.4,
          }}
        >
          heartstudiodn.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: displayFont, weight: 600, style: "normal" },
        { name: "DM Sans", data: sansFont, weight: 400, style: "normal" },
      ],
    }
  )
}
