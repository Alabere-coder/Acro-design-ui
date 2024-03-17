// import React from "react";

import { ReactNode } from "react";

interface CardProps {
  title: ReactNode;
  children: ReactNode;
}

const ReusableCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="w-full rounded-xl border-2 overflow-hidden bg-transparent">
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      <hr />
      <div className=" bg-black">{children}</div>
    </div>
  );
};

export default ReusableCard;
