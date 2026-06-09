import { buildLegacyTheme } from "sanity"

const p = {
  bg:          "#EEF0E3",
  text:        "#3D3830",
  textMuted:   "#6B6358",
  olive:       "#6B7A50",
  oliveDark:   "#556140",
  terracotta:  "#C4714A",
  white:       "#FAFAF7",
}

export const heartStudioTheme = buildLegacyTheme({
  "--black":                           p.text,
  "--white":                           p.white,
  "--gray":                            p.textMuted,
  "--gray-base":                       p.textMuted,

  "--component-bg":                    p.white,
  "--component-text-color":            p.text,

  "--brand-primary":                   p.olive,
  "--focus-color":                     p.olive,

  "--state-info-color":                p.olive,
  "--state-success-color":             p.olive,
  "--state-warning-color":             p.terracotta,
  "--state-danger-color":              "#c0392b",

  "--main-navigation-color":           p.text,
  "--main-navigation-color--inverted": p.bg,

  "--default-button-color":            p.olive,
  "--default-button-primary-color":    p.olive,
  "--default-button-warning-color":    p.terracotta,
  "--default-button-danger-color":     "#c0392b",

})
