import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});