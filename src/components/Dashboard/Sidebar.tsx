const menuItems = [
  { name: "Dashboard", emoji: "📊", key: "dashboard" },
  { name: "Opportunities", emoji: "🍯", key: "opportunities" },
  { name: "Portfolio", emoji: "💼", key: "portfolio" },
  { name: "Learn", emoji: "📚", key: "learn" },
  { name: "Settings", emoji: "⚙️", key: "settings" },
];

interface SidebarProps {
  activeMenu: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu }) => {
  return (
    <div className="flex flex-col gap-6 text-body">
      {/* Logo + 타이틀 */}
      <div className="text-headline text-yellow-800 text-center mb-4">🐵 LLMonkey</div>

      {/* 메뉴 */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-left transition
              ${
                activeMenu === item.key
                  ? "bg-yellow-200 text-yellow-900 font-bold"
                  : "text-gray-700 hover:bg-yellow-100"
              }`}
          >
            <span>{item.emoji}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="flex-grow" />

      {/* 하단 코멘트 */}
      <div className="text-caption text-center text-gray-500">
        🍌 Built with banana love.
      </div>
    </div>
  );
};

export default Sidebar;
