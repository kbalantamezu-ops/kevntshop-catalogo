import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const singles = [
  { dir: "public/images/hombre/jeans", slug: "ripped-and-bleach-splatter-stacked-slim-flare-jeans-light-blue-wash", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/10-01-26_S1_6_ZDF01D510024_LightBlueWash_ZSR_JG_PC__7-32_AM_0035-9_SG.jpg?v=1793386350" },
  { dir: "public/images/hombre/shorts", slug: "relaxed-osaka-block-short-purple-combo", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/FNMKH54008_Purple_combo_JR_V1.jpg?v=1783357909" },
  { dir: "public/images/hombre/shorts", slug: "everyday-stretch-paneled-boardshorts-9-green", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-13-26_S7_2_FNMKW61018_Green_ZSR_AB_MA_09-09-29_67958_PXF.jpg?v=1771364203" },
  { dir: "public/images/hombre/shorts", slug: "marcello-relaxed-mesh-short-red-combo", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/05-18-26_S3_37_FNDN01272_Redcombo_ZSR_AE_CW_11-23-14_11446_PXF.jpg?v=1779206885" },
  { dir: "public/images/hombre/accesorios", slug: "day-to-day-slip-on-slides-black", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/04-15-26_SL_45_HS3_Black_ZSR_KP_14-11-57_FLATLAY_25131_PXF.jpg?v=1776699503" },
  { dir: "public/images/mujer/tops", slug: "speed-up-leopard-halter-top-leopard", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/01-17-25_S3_60_38399_Leopard_TK_AP_14-14-17_16513_PXF.jpg?v=1737492337" },
  { dir: "public/images/hombre/tops", slug: "cassiel-tapestry-shirt-multi-color", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-23-24_S7_36_ZDF01V410222_MultiColor_P_CZ_DJ_10-50-30_36640_RB.jpg?v=1709312794" },
  { dir: "public/images/hombre/tops", slug: "rogue-tapestry-shirt-multi-color", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-08-24_S7_36_ZDF01V410236_MultiColor_CZ_DJ_10-50-36_20843_EH.jpg?v=1745873400" },
  { dir: "public/images/hombre/jeans", slug: "i-be-jeweled-stacked-skinny-flare-jeans-black", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-14-24_S7_24_GFL4_Black_P_CZ_DJ_10-19-22_26147_PXF.jpg?v=1736991962" },
  { dir: "public/images/hombre/jeans", slug: "ruthless-embroidered-stacked-skinny-flare-jeans-bleach-blue-wash", image: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-21-23Studio5_BN_DJ_10-29-47_37_GFN13_BleachBlueWash_19599.jpg?v=1677706960" },
  { dir: "public/images/hombre/jeans", slug: "about-fray-stacked-skinny-flare-jeans-light-wash", image: "https://cdn.shopify.com/s/files/1/0293/9277/products/03-03-23Studio5_BN_DJ_10-29-52_31_GFN11_LightWash_P_20937_WG.jpg?v=1678136611" },
  { dir: "public/images/hombre/jeans", slug: "about-fray-stacked-skinny-flare-jeans-black-wash", image: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-22-23Studio5_BN_DJ_11-17-23_46_JXS0916_Black_10474.jpg?v=1735589721" },
  { dir: "public/images/hombre/jeans", slug: "through-it-ripped-skinny-flared-jeans-black-wash", image: "https://cdn.shopify.com/s/files/1/0293/9277/files/06-25-24_S7_30_FNMH1166_BlackWash_CZ_DJ_10-33-33_51004_PXF.jpg?v=1719513680" },
];

async function fetchToBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function saveProduct(buf, out) {
  const webp = await sharp(buf)
    .resize(1000, 1500, { fit: "cover", position: "top" })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
  await writeFile(out, webp);
  console.log(path.relative(root, out), `${(webp.length / 1024).toFixed(0)} KB`);
}

for (const item of singles) {
  const dir = path.join(root, item.dir);
  await mkdir(dir, { recursive: true });
  const buf = await fetchToBuffer(item.image);
  await saveProduct(buf, path.join(dir, `${item.slug}.webp`));
}

const sets = [
  {
    dir: "public/images/hombre/conjuntos",
    slug: "azrael-tapestry-set",
    left: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-21-24_S7_3_ZDF01V410229_MultiColor_CZ_DJ_09-18-34_33260_CM.jpg?v=1711128022",
    right: "https://cdn.shopify.com/s/files/1/0293/9277/files/02-21-24_S7_4_ZDF01H410074_Blackcombo_CZ_DJ_09-21-28_34038_CM.jpg?v=1708800098",
  },
  {
    dir: "public/images/hombre/conjuntos",
    slug: "von-dutch-eyeball-denim-set",
    left: "https://cdn.shopify.com/s/files/1/0293/9277/files/12-22-25_S8_36_VD61046AF51_Green_KJ_DJ_15-07-37_44715_SKS_SG.jpg?v=1766523857",
    right: "https://cdn.shopify.com/s/files/1/0293/9277/files/12-22-25_S8_37_VD26636AF51_Green_KJ_DJ_15-07-59_44741_SKS.jpg?v=1766523889",
  },
  {
    dir: "public/images/hombre/conjuntos",
    slug: "tayson-resort-set",
    left: "https://cdn.shopify.com/s/files/1/0293/9277/files/06-04-25_S7_15_ZDF01F430046_Black_ZSR_CZ_DJ_11-34-50_128083_BH.jpg?v=1749251176",
    right: "https://cdn.shopify.com/s/files/1/0293/9277/files/ZDF01N430034_Black_JR_V1.jpg?v=1791567481",
  },
  {
    dir: "public/images/hombre/conjuntos",
    slug: "tayson-oversized-heavyweight-striped-set",
    left: "https://cdn.shopify.com/s/files/1/0293/9277/files/03-24-25_S7_58_ZDF01F510034_Black_CZ_DJ_13-21-27_98456_SG.jpg?v=1742932758",
    right: "https://cdn.shopify.com/s/files/1/0293/9277/files/03-24-25_S7_59_ZDF01N510042_Black_CZ_DJ_13-24-23_71656_SG.jpg?v=1743008940",
  },
];

for (const set of sets) {
  const dir = path.join(root, set.dir);
  await mkdir(dir, { recursive: true });
  const [leftBuf, rightBuf] = await Promise.all([
    fetchToBuffer(set.left),
    fetchToBuffer(set.right),
  ]);
  const left = await sharp(leftBuf).resize(500, 1500, { fit: "cover", position: "top" }).toBuffer();
  const right = await sharp(rightBuf).resize(500, 1500, { fit: "cover", position: "top" }).toBuffer();
  const out = await sharp({
    create: { width: 1000, height: 1500, channels: 3, background: "#f4f4f2" },
  })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: 500, top: 0 },
    ])
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
  await writeFile(path.join(dir, `${set.slug}.webp`), out);
  console.log(path.relative(root, path.join(dir, `${set.slug}.webp`)), `${(out.length / 1024).toFixed(0)} KB`);
}

console.log("OK");
