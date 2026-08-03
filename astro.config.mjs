import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jeminpro.com",
  base: "/guides",
  output: "static",
  server: {
    port: 4321,
    host: "127.0.0.1"
  }
});
