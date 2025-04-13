import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: "./tailwind.config.js",
        }),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
    },
  },

  assetsInclude: ["**/*.otf", "**/*.ttf", "**/*.woff", "**/*.woff2"],
  build: {
    assetsInlineLimit: 0,
    outDir: "dist",
    sourcemap: true,
  },
});
