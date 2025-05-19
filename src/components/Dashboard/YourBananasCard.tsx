import React from "react";
import YourBananasChart from "@/components/Dashboard/YourBananasChart";
import { AssetPoint } from "@/types";

interface YourBananasCardProps {
  assetHistory: AssetPoint[];
  onViewHistory?: () => void;
}

const YourBananasCard: React.FC<YourBananasCardProps> = ({
  assetHistory,
  onViewHistory,
}) => {
  const latest = assetHistory[assetHistory.length - 1]?.value;
  const oneDayAgo = assetHistory[assetHistory.length - 2]?.value;
  const sevenDaysAgo = assetHistory[0]?.value;

  const oneDayPnl =
    oneDayAgo && latest ? ((latest - oneDayAgo) / oneDayAgo) * 100 : 0;
  const sevenDayPnl =
    sevenDaysAgo && latest ? ((latest - sevenDaysAgo) / sevenDaysAgo) * 100 : 0;

  const getColor = (pnl: number) =>
    pnl >= 0 ? "text-green-600" : "text-rose-400";

  return (
    <div className="relative bg-[#FFFAEB] rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col gap-6">
      <div className="text-headline text-yellow-800">🍌 Your Bananas</div>

      <div className="text-number">
        {oneDayPnl >= 0
          ? `You made +${oneDayPnl.toFixed(2)}% today! 🍌 High five!`
          : `Ouch, -${Math.abs(oneDayPnl).toFixed(
              2
            )}% today... 🍌 Stay strong!`}
      </div>

      <YourBananasChart data={assetHistory} />

      {/* PNL + 버튼 섹션 */}
      <div className="flex justify-between items-center text-body">
        <div className="flex gap-4">
          <div className={getColor(oneDayPnl)}>
            1D: {oneDayPnl >= 0 ? "+" : "-"}
            {Math.abs(oneDayPnl).toFixed(2)}%
          </div>
          <div className={getColor(sevenDayPnl)}>
            7D: {sevenDayPnl >= 0 ? "+" : "-"}
            {Math.abs(sevenDayPnl).toFixed(2)}%
          </div>
        </div>

        {onViewHistory && (
          <button
            onClick={onViewHistory}
            className="text-caption bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1.5 px-4 rounded-lg transition"
          >
            View Full History →
          </button>
        )}
      </div>
    </div>
  );
};

export default YourBananasCard;
