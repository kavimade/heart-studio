import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemas"

function HeartStudioLogo() {
  return (
    <span style={{
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontSize: "1rem",
      fontWeight: 600,
      color: "#3D3830",
      letterSpacing: "-0.01em",
    }}>
      Heart Studio
    </span>
  )
}

export default defineConfig({
  name: "heart-studio",
  title: "Heart Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath:  "/studio",
  plugins:   [structureTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: HeartStudioLogo,
    },
  },
})
