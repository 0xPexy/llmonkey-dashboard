export interface AssetPoint {
  date: string; // ex: "2025-04-30"
  value: number; // ex: 1234.56 (USD 기준)
}

export interface AssetScore {
  category: "DeFi" | "Stable" | "NFT" | "RWA";
  score: number; // 0 ~ 100
}
