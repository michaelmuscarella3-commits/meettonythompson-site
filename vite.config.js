import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the same output folder names the live server already uses.
    assetsDir: "js",
  },
});
