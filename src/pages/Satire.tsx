import React from "react";
import { SecondNav, Content  } from "../components";

const Satire: React.FC = () => {
  return (
    <div className="bg-background-theme bg-cover bg-center h-screen w-screen">
      <div className="relative">
        <div className="justify-between z-0">
          <SecondNav />
        </div>
        <div className="flex justify-between z-10">
          <Content/>
        </div>
      </div>
    </div>
  );
};

export { Satire };
