import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{children}</h2>
      <div className="w-full h-px bg-gray-200" />
    </div>
  );
};

export default SectionTitle;
