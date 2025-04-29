import React from "react";
import { Bell } from "lucide-react";
import Button from "@/components/ui/Button";

interface TopbarProps {
  hasNotification?: boolean;
  username?: string;
}

const Topbar: React.FC<TopbarProps> = ({
  hasNotification = false,
  username = "boss monkey",
}) => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <div className="flex items-center gap-3">
        <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center text-white text-2xl">
          🐒
        </div>
        <span className="text-lg font-bold text-black">
          Hey {username} 🐵! Ready to grow your bananas?
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="w-6 h-6 text-black" />
          {hasNotification && (
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </div>
        <Button variant="highlight">🍌 Connect Wallet</Button>
      </div>
    </header>
  );
};

export default Topbar;
