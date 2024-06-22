import React from "react";
import { SecondNav  } from "../components";

const Friends: React.FC = () => {
  return (
    <div className="bg-light-cream h-screen">
      <div className="relative">
        <div className="justify-between z-0">
          <SecondNav />
        </div>
        <div className="flex justify-between z-10 mt-2">
        </div>
      </div>
    </div>
  );
};

export { Friends };
