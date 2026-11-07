import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(
  root,
  "public",
  "images",
  "mujer",
  "vestidos",
  "brenda-leopard-maxi-dress.webp",
);

const photo = await sharp(await readFile(source))
  .resize(600, 630, { fit: "cover", position: "top" })
  .toBuffer();

const panel = Buffer.from(`
  <svg width="600" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="630" fill="#0a0a0a"/>
    <text x="56" y="250" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="700" letter-spacing="8">KEVNT</text>
    <text x="56" y="312" fill="#8a8a86" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="300" letter-spacing="8">SHOP</text>
    <line x1="56" y1="360" x2="544" y2="360" stroke="#2c2c2a" stroke-width="1"/>
    <text x="56" y="405" fill="#a4a4a0" font-family="Arial, Helvetica, sans-serif" font-size="14" letter-spacing="4">MODA HOMBRE + MUJER</text>
    <text x="56" y="438" fill="#6f6f6c" font-family="Arial, Helvetica, sans-serif" font-size="13" letter-spacing="2">Selección de jeans, tops, vestidos y conjuntos.</text>
    <text x="56" y="565" fill="#8a8a86" font-family="Arial, Helvetica, sans-serif" font-size="12" letter-spacing="4">COMPRA POR WHATSAPP</text>
    <rect x="56" y="586" width="44" height="2" fill="#ffffff"/>
  </svg>
`);

const output = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: "#0a0a0a",
  },
})
  .composite([
    { input: panel, left: 0, top: 0 },
    { input: photo, left: 600, top: 0 },
    {
      input: Buffer.from(
        '<svg width="1" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="630" fill="#2c2c2a"/></svg>',
      ),
      left: 600,
      top: 0,
    },
  ])
  .jpeg({ quality: 90 })
  .toBuffer();

await writeFile(path.join(root, "public", "og.jpg"), output);
console.log(`OG image creada: ${(output.length / 1024).toFixed(0)} KB`);
