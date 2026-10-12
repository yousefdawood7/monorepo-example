import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },

  server:{ 
    proxy:  {
        '/api': {
           target: 'https://stunning-orbit-gpr75pxwrrqc954p-5000.app.github.dev',
           rewrite: (path) => path.replace('/api', '')
        }
    }
  }
});

