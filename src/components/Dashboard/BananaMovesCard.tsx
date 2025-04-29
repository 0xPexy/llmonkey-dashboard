import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";

interface Transaction {
  type: "claim" | "stake" | "unstake" | "addLiquidity" | "removeLiquidity" | "swap";
  tokenSymbol: string;
  amount: number;
  usdValue: number;
  timestamp: string; 
}

const mockTransactions: Transaction[] = [
  { type: "claim", tokenSymbol: "SOL", amount: 1.2, usdValue: 91.24, timestamp: "2h ago" },
  { type: "stake", tokenSymbol: "USDC", amount: 300, usdValue: 300, timestamp: "5h ago" },
  { type: "addLiquidity", tokenSymbol: "RAY/SOL", amount: 500, usdValue: 520, timestamp: "1d ago" },
];

const getActionText = (tx: Transaction) => {
  switch (tx.type) {
    case "claim":
      return `Claimed ${tx.amount} ${tx.tokenSymbol}`;
    case "stake":
      return `Staked ${tx.amount} ${tx.tokenSymbol}`;
    case "unstake":
      return `Unstaked ${tx.amount} ${tx.tokenSymbol}`;
    case "addLiquidity":
      return `Added liquidity to ${tx.tokenSymbol}`;
    case "removeLiquidity":
      return `Removed liquidity from ${tx.tokenSymbol}`;
    case "swap":
      return `Swapped into ${tx.tokenSymbol}`;
    default:
      return "Transaction";
  }
};

const BananaMovesCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-4">
    <SectionTitle>🕺 Banana Moves</SectionTitle>
      <div className="flex flex-col gap-3">
        {mockTransactions.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-yellow-50 hover:bg-yellow-100 rounded-md p-3 transition"
          >
            <div className="flex flex-col">
              <span className="font-medium">{getActionText(tx)}</span>
              <span className="text-xs text-gray-500">{tx.timestamp}</span>
            </div>
            <div className="text-right font-semibold text-green-600">
              +${tx.usdValue.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BananaMovesCard;
