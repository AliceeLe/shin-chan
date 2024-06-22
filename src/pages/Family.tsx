import React from "react";
import { SecondNav, ContentFamily } from "../components";

const Family: React.FC = () => {
  return (
    <div className="bg-background-family bg-cover bg-center h-screen w-screen">
      <div className="relative h-full">
        <div className="w-full z-0">
          <SecondNav />
        </div>
        <div className="flex justify-end items-start h-full">
          <ContentFamily />
        </div>
      </div>
    </div>
  );
};

export { Family };
