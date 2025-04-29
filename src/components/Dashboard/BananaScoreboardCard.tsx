import React from "react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

interface BananaScoreboardCardProps {
  score: number; 
}

const BananaScoreboardCard: React.FC<BananaScoreboardCardProps> = ({
  score,
}) => {
  const healthComment =
    score >= 80
      ? "Your portfolio looks strong! 🍌💪"
      : score >= 50
      ? "Your portfolio is okay. 🍌 Keep it up!"
      : "Portfolio needs some love... 🍌💔";

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
      <SectionTitle>📊 Banana Scoreboard</SectionTitle>
      <div className="flex items-center gap-3">
        <div className="text-4xl font-bold text-yellow-400">{score}/100</div>
        <div className="text-lg font-semibold">{healthComment}</div>
      </div>

      <div className="h-32 bg-yellow-50 rounded-md flex items-center justify-center text-sm text-gray-400">
        (Pie chart coming soon 🍌)
      </div>

      <div className="flex justify-end mt-4">
        <Button>🍌 More Banana Wisdom</Button>
      </div>
    </div>
  );
};

export default BananaScoreboardCard;
