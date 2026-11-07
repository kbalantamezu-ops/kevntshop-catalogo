import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const products = [
  {
    slug: "the-staple-straight-jean",
    gender: "hombre",
    category: "jeans",
    color: "Medium Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/FNDN121ST_MediumWash_42_MediumWash_PLUS_V1.jpg?v=1782398918",
  },
  {
    slug: "no-cap-stacked-skinny-flare-jeans",
    gender: "hombre",
    category: "jeans",
    color: "Black Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/products/02-23-23Studio6_CB_DJ_12-13-42_50_GFN64_BlackWash_4702_WG.jpg?v=1677793652",
  },
  {
    slug: "i-be-jeweled-stacked-skinny-flare-jeans",
    gender: "hombre",
    category: "jeans",
    color: "Light Blue",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/02-19-24_S7_71_GFL4_LightBlue_P_CZ_DJ_14-35-09_31382_EH.jpg?v=1708621697",
  },
  {
    slug: "undercover-slim-stacked-flare-jeans",
    gender: "hombre",
    category: "jeans",
    color: "Medium Blue Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/products/03-14-23Studio7_CB_DJ_13-44-54_60_DARSP23684_MediumBlueWash_14699_JB.jpg?v=1678996747",
  },
  {
    slug: "splatter-skate-relaxed-denim-shorts",
    gender: "hombre",
    category: "denim-short",
    color: "Medium Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/10-01-26_S1_71_ZDF01H420037_MediumWash_ZSR_JG_PC__1-41_PM_0444-5_SG_SG.jpg?v=1793643789",
  },
  {
    slug: "barker-relaxed-denim-shorts",
    gender: "hombre",
    category: "denim-short",
    color: "Vintage Blue Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/03-06-24_S7_91_ZDF01H410085_VintageBlueWash_KF_DJ_15-16-27_45488_PXF.jpg?v=1710617034",
  },
  {
    slug: "run-around-relaxed-denim-shorts",
    gender: "hombre",
    category: "denim-short",
    color: "Medium Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/10-01-26_S1_64_ZDF01H420039_MediumWash_JG_PC__1-15_PM_0409-8_SG_SG.jpg?v=1793642339",
  },
  {
    slug: "lonely-road-relaxed-denim-shorts",
    gender: "hombre",
    category: "denim-short",
    color: "Medium Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/03-04-24_S8_50_ZDF01H410097_MediumWash_KF_DJ_13-57-29_34054_PXF.jpg?v=1709924381",
  },
  {
    slug: "starstruck-raglan-long-sleeve-tee",
    gender: "mujer",
    category: "tops",
    color: "Olive",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/09-17-24_S1_20_79252YAJVETIVER_Olive_KJ_PC_11-50-56_42877_PXF.jpg?v=1726693862",
  },
  {
    slug: "diana-long-sleeve-scoop-neck-baby-tee",
    gender: "mujer",
    category: "tops",
    color: "White",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/07-08-25_S2_20_HT12688_White_AE_RL_16-38-09_6970_PXF_BH.jpg?v=1752099402",
  },
  {
    slug: "night-prowl-crew-neck-long-sleeve-mesh-top",
    gender: "mujer",
    category: "tops",
    color: "Brown/combo",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/01-15-26_S7_59_T1999MHPV_Browncombo_LR_AC_20-50-17_31839_SKS.jpg?v=1769118322",
  },
  {
    slug: "celine-cut-out-bandage-short-sleeve-top",
    gender: "mujer",
    category: "tops",
    color: "Black",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/B426KT1104_Black_JR_V1.jpg?v=1784650266",
  },
  {
    slug: "atlanta-low-stretch-classic-straight-leg-jeans",
    gender: "mujer",
    category: "jeans",
    color: "Vintage Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/B326JN3658_VintageWash_JR_V1.jpg?v=1785167354",
  },
  {
    slug: "remi-ripped-stretch-baggy-jeans",
    gender: "mujer",
    category: "jeans",
    color: "Medium Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/02-07-24_S2_38_FNCRGHFL01AT_MediumWash_KJ_RL_14-56-51_7165_PXF.jpg?v=1707519889",
  },
  {
    slug: "westside-low-rise-wide-leg-jean",
    gender: "mujer",
    category: "jeans",
    color: "Light Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/08-05-25_S8_13_BFN15261LBGYJ_LightWash_JG_SS_10-57-12_7946_PXF.jpg?v=1754592725",
  },
  {
    slug: "tall-premium-cuffed-straight-leg-jeans",
    gender: "mujer",
    category: "jeans",
    color: "Dark Wash",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/05-21-25_S6_16_ZAPP20203_VintageWash_HY_IM_11-40-43_89152_PXF.jpg?v=1747952090",
  },
  {
    slug: "frankie-flannel-trim-sweatshirt-mini-dress",
    gender: "mujer",
    category: "vestidos",
    color: "Black/combo",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/10-07-25_S3_33_V12505DR1303_Blackcombo_JP_SS_13-22-12_65512_SKS.jpg?v=1760054336",
  },
  {
    slug: "effortless-love-sheer-lace-midi-dress",
    gender: "mujer",
    category: "vestidos",
    color: "Brown",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/35251BG_Brown_JR_V1.jpg?v=1791183071",
  },
  {
    slug: "brenda-leopard-maxi-dress",
    gender: "mujer",
    category: "vestidos",
    color: "Leopard",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/01-24-25_S3_27_HKD26283_Leopard_ZSR_KS_SS_11-34-50_0841_PXF.jpg?v=1738017512",
  },
  {
    slug: "taking-calls-collared-sweater-mini-dress",
    gender: "mujer",
    category: "vestidos",
    color: "Black",
    image:
      "https://cdn.shopify.com/s/files/1/0293/9277/files/09-18-25_S2PM_5_P12504DR0916_Black_DA_RL_16-40-49_25609_PXF.jpg?v=1758584716",
  },
];

const root = process.cwd();

for (const product of products) {
  const dir = path.join(
    root,
    "public",
    "images",
    product.gender,
    product.category,
  );
  await mkdir(dir, { recursive: true });

  const response = await fetch(product.image);
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${product.slug}: ${response.status}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  const output = path.join(dir, `${product.slug}.webp`);

  const buffer = await sharp(source)
    .resize(1000, 1500, { fit: "cover", position: "top" })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();

  await writeFile(output, buffer);
  console.log(
    `${product.gender}/${product.category}/${product.slug}.webp  ${(
      buffer.length / 1024
    ).toFixed(0)} KB`,
  );
}

console.log(`\nListo: ${products.length} imágenes procesadas.`);
