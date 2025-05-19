import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Dashboard/Sidebar";
import Topbar from "@/components/Dashboard/Topbar";
import YourBananasCard from "@/components/Dashboard/YourBananasCard";
import BananaScoreboardCard from "@/components/Dashboard/BananaScoreboardCard";
import TodaysBananaCard from "@/components/Dashboard/TodaysBananaCard";
import BananaMovesCard from "@/components/Dashboard/BananaMovesCard";
import { generateMockAssetHistory } from "@/mocking/chart";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#FFF9D6] p-6 text-gray-800">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-white p-6 rounded-2xl shadow-md border-r border-gray-100 h-full min-h-0 overflow-hidden">
        <Sidebar activeMenu="dashboard" />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-6 overflow-hidden">
        <Topbar hasNotification={true} username="Boss Monkey" />

        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* 상단 카드 2개 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <YourBananasCard
              assetHistory={generateMockAssetHistory()}
              onViewHistory={() => navigate("/history")}
            />
            <BananaScoreboardCard score={76} />
          </div>

          {/* 하단 카드 2개 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TodaysBananaCard />
            <BananaMovesCard />
          </div>

          {/* 하단 문구 */}
          <div className="flex justify-center items-center h-24 text-gray-400 text-sm">
            🐵 More bananas are ripening... 🍌
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
