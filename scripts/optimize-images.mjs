import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve("source-images/portfolio");
const outputDir = path.resolve("public/images/portfolio/optimized");

const maxWidths = {
  "about.png": 1280,
  "project-01-cover.png": 1280,
  "resume.png": 1400,
  "work-index.png": 1280,
};

const defaultMaxWidth = 1800;

await mkdir(outputDir, { recursive: true });

const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".png"));

for (const file of files) {
  const input = path.join(sourceDir, file);
  const output = path.join(outputDir, file.replace(/\.png$/i, ".webp"));
  const metadata = await sharp(input).metadata();
  const width = Math.min(metadata.width ?? defaultMaxWidth, maxWidths[file] ?? defaultMaxWidth);

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5, smartSubsample: true })
    .toFile(output);

  const original = await stat(input);
  const optimized = await stat(output);
  const saved = 1 - optimized.size / original.size;

  console.log(
    `${file} -> optimized/${path.basename(output)} | ${(original.size / 1024 / 1024).toFixed(
      2,
    )}MB -> ${(optimized.size / 1024 / 1024).toFixed(2)}MB | saved ${(
      saved * 100
    ).toFixed(1)}%`,
  );
}
