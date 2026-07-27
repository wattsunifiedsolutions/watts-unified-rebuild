import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const required = [
  "/assets/resources-live-hero.png",
  "/assets/calculators.png",
  "/assets/family.png",
  "/assets/education.png",
  "/assets/logo.png",
];
const forbidden = [
  "solutions-app/",
  "resources/media/",
  "legacy-center-hero.webp",
  "resources-calculators.webp",
  "watts-brand-lockup.png",
];
const sourceRoots = ["src", "workers"];
const resourceSource = path.join(root, "workers", "resources-page.js");

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(fullPath));
    else if (/\.(?:[cm]?[jt]sx?|html)$/.test(entry.name)) files.push(fullPath);
  }
  return files;
}

function isPng(bytes) {
  return bytes.length >= 8
    && bytes[0] === 0x89
    && bytes[1] === 0x50
    && bytes[2] === 0x4e
    && bytes[3] === 0x47
    && bytes[4] === 0x0d
    && bytes[5] === 0x0a
    && bytes[6] === 0x1a
    && bytes[7] === 0x0a;
}

const resources = await readFile(resourceSource, "utf8");
for (const assetPath of required) {
  if (!resources.includes(assetPath)) {
    throw new Error(`Resources page is missing required root-relative asset reference: ${assetPath}`);
  }
  const outputPath = path.join(root, "dist", assetPath.slice(1));
  await access(outputPath);
  const bytes = await readFile(outputPath);
  if (!isPng(bytes)) {
    throw new Error(`Built asset is not a PNG image: ${outputPath}`);
  }
}

const files = (await Promise.all(sourceRoots.map((directory) => sourceFiles(path.join(root, directory))))).flat();
for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const stalePath of forbidden) {
    if (source.includes(stalePath)) {
      throw new Error(`Forbidden legacy Resources asset reference "${stalePath}" found in ${path.relative(root, file)}`);
    }
  }
}

console.log(`Verified ${required.length} Resources image assets in dist/assets and rejected legacy asset directories.`);
