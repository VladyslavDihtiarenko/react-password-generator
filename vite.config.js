import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   base: "/react-password-generator/",
   plugins: [react()],
   server: { https: true },
});
