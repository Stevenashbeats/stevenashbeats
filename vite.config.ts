import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    compression({ algorithm: "gzip" }),
    compression({ algorithm: "brotliCompress", ext: ".br" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap", "gsap/ScrollTrigger"],
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
