// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  theme: {
    colors: {
      primary: "#025388",
      light: "#5ebbff",
      dark: "#0081df",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Roboto", "Rubik:400,700"],
        mono: ["Fira Code", "Fira Mono:400,700", "Roboto Mono"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
