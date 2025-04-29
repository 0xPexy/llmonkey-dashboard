import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import YourBananasChart from "@/components/Dashboard/YourBananasChart";

interface YourBananasCardProps {
  oneDayPnl: number;
  sevenDayPnl: number;
  assetHistory: number[];
  onViewHistory?: () => void;
}

const YourBananasCard: React.FC<YourBananasCardProps> = ({
  oneDayPnl,
  sevenDayPnl,
  assetHistory,
  onViewHistory,
}) => {

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
      <SectionTitle>🍌 Your Bananas</SectionTitle>
      <div className="text-lg font-semibold">
        {oneDayPnl >= 0
          ? `You made +${oneDayPnl.toFixed(2)}% today! 🍌 High five!`
          : `Ouch, -${Math.abs(oneDayPnl).toFixed(
              2
            )}% today... 🍌 Stay strong!`}
      </div>

      <YourBananasChart />

      <div className="flex justify-between text-sm text-gray-500">
        <div>
          1D: {oneDayPnl >= 0 ? "+" : "-"}
          {Math.abs(oneDayPnl).toFixed(2)}%
        </div>
        <div>
          7D: {sevenDayPnl >= 0 ? "+" : "-"}
          {Math.abs(sevenDayPnl).toFixed(2)}%
        </div>
      </div>

      {onViewHistory && (
        <div className="flex justify-end mt-4">
          <button
            onClick={onViewHistory}
            className="text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded-lg transition"
          >
            View Full History →
          </button>
        </div>
      )}
    </div>
  );
};

export default YourBananasCard;
