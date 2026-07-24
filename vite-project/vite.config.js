import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("index.html", import.meta.url)),
        malaysia: fileURLToPath(new URL("asia/malaysia.html", import.meta.url)),
      },
    },
  },
});