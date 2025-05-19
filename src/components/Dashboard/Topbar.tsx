interface TopbarProps {
  hasNotification?: boolean;
  username: string;
}

const Topbar: React.FC<TopbarProps> = ({ hasNotification, username }) => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 rounded-xl bg-white shadow text-body">
      <div className="text-number">👋 Welcome back, {username}!</div>

      <div className="flex items-center gap-4">
        {hasNotification && (
          <div className="relative">
            <span className="text-xl">🔔</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </div>
        )}
        <button className="text-caption bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-3 rounded-lg transition">
          Connect Wallet 🍌
        </button>
      </div>
    </div>
  );
};

export default Topbar;
