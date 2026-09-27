// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import fs from "node:fs";
import path from "node:path";

// Ensure public/videos/coffee-cinematic.mp4 is synced if placed under public/vedios/coffe-cinematic.mp4.mp4
const publicDir = path.resolve(process.cwd(), "public");
const altVideo = path.join(publicDir, "vedios", "coffe-cinematic.mp4.mp4");
const targetVideosDir = path.join(publicDir, "videos");
const targetVideo = path.join(targetVideosDir, "coffee-cinematic.mp4");
try {
  if (fs.existsSync(altVideo) && !fs.existsSync(targetVideo)) {
    if (!fs.existsSync(targetVideosDir)) fs.mkdirSync(targetVideosDir, { recursive: true });
    fs.copyFileSync(altVideo, targetVideo);
  }
} catch (e) {
  console.error("Video sync error", e);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});






