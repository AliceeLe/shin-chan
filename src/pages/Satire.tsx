import React from "react";
import { SecondNav, Content  } from "../components";

const Satire: React.FC = () => {
  return (
    <div className="bg-background-theme bg-cover bg-center h-screen w-screen">
      <div className="relative h-full">
        <div className="w-full z-0">
          <SecondNav />
        </div>
        <div className="flex justify-end items-start h-full">
          <Content />
        </div>
      </div>
    </div>
  );
};

export { Satire };
