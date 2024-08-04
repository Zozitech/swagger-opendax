import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      include: /\.(xml|css|json|js|mjs|svg|yaml|yml|toml)$/,
    }),
  ],
});
