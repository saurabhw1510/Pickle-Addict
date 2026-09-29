import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const output = "public/images";
await mkdir(output, { recursive: true });
for (const filename of await readdir("images")) {
  if (!filename.endsWith(".jpg")) continue;
  const name = path.parse(filename).name;
  for (const width of [640, 1280, 1920]) {
    await sharp(path.join("images", filename))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(output, `${name}-${width}.webp`));
  }
}
console.log("Optimized responsive photos written to public/images.");
