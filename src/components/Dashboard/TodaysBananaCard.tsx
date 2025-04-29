import React from "react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const TodaysBananaCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-6">
      <SectionTitle>🍌 Today's Banana</SectionTitle>

      <div className="text-sm italic text-gray-500">
        🍌 "Today smells like a good day for farming!"
      </div>

      <div className="flex flex-col gap-3">
        <button className="bg-yellow-100 hover:bg-yellow-200 text-black py-2 px-4 rounded-lg transition text-left">
          🥇 Stake SOL/USDC - 120% APY
        </button>
        <button className="bg-yellow-100 hover:bg-yellow-200 text-black py-2 px-4 rounded-lg transition text-left">
          🥈 Sell SOL - +15% in 24h
        </button>
      </div>

      <div className="flex justify-center">
        <Button variant="highlight">🔓 Unlock 30% more banana alpha 🍌</Button>
      </div>
    </div>
  );
};

export default TodaysBananaCard;
