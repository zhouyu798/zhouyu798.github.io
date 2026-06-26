import { copyFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");

await copyFile(path.join(distDir, "index.html"), path.join(distDir, "404.html"));
console.log("Created dist/404.html for GitHub Pages SPA fallback.");
