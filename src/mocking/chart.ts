import dayjs from "dayjs";

export interface BananaChartData {
  date: string;
  value: number;
}

export const generateMockBananaChartData = (): BananaChartData[] => {
  const data: BananaChartData[] = [];
  let baseValue = 1000; // 시작 자산 (임의)

  for (let i = 6; i >= 0; i--) {
    const date = dayjs().subtract(i, 'day').format('MM/DD');
    const randomChange = (Math.random() - 0.5) * 50; // -25 ~ +25 변동
    baseValue = Math.max(900, baseValue + randomChange); // 최소 900 유지

    data.push({
      date,
      value: parseFloat(baseValue.toFixed(2)),
    });
  }

  return data;
};
