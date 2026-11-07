import type { CategoryId } from "@/data/types";

export const store = {
  name: "KEVNTSHOP",
  whatsapp: "573133351400",
  whatsappDisplay: "+57 313 335 1400",
  currency: "COP",
  marginMultiplier: 2,
  fixedPrices: {
    "mens-jeans": 190000,
    "mens-denim-shorts": 160000,
  } satisfies Partial<Record<CategoryId, number>>,
} as const;
