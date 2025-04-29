import React from "react";
import { Home, Briefcase, Settings } from "lucide-react";

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-xl transition cursor-pointer
        ${
          active
            ? "bg-yellow-300 text-black font-semibold"
            : "text-gray-600 hover:bg-yellow-100 hover:text-black"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

interface SidebarProps {
  activeMenu: "dashboard" | "portfolio" | "settings";
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Logo 영역 */}
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-black">🐵</div>
        <div className="text-2xl font-bold">LLMonkey</div>
      </div>

      {/* 메뉴 리스트 */}
      <div className="flex flex-col gap-3">
        <SidebarItem
          label="Explore"
          icon={<Home size={20} />}
          active={activeMenu === "dashboard"}
        />
        <SidebarItem
          label="Manage"
          icon={<Briefcase size={20} />}
          active={activeMenu === "portfolio"}
        />
        <SidebarItem
          label="More"
          icon={<Settings size={20} />}
          active={activeMenu === "settings"}
        />
      </div>
    </div>
  );
};

export default Sidebar;
