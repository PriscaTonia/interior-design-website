import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercelStatic from "@astrojs/vercel/static";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  adapter: vercelStatic(),
});
