import React from "react";
import { SecondNav, ContentFriends  } from "../components";

const Friends: React.FC = () => {
  return (
    <div className="bg-background-friends bg-cover bg-center h-screen w-screen">
      <div className="relative h-full">
        <div className="w-full z-0">
          <SecondNav />
        </div>
        <div className="flex justify-end items-start h-full">
          <ContentFriends />
        </div>
      </div>
    </div>
  );
};

export { Friends };
