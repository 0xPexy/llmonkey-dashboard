import dayjs from "dayjs";
import { AssetPoint } from "@/types";

export const generateMockAssetHistory = (): AssetPoint[] => {
  const today = dayjs();
  const result: AssetPoint[] = [];

  for (let i = 6; i >= 0; i--) {
    result.push({
      date: today.subtract(i, "day").format("YYYY-MM-DD"),
      value: 1200 + Math.floor(Math.random() * 100) - 50, // 1150~1250 랜덤
    });
  }

  return result;
};
