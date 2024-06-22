import React from "react";
import { SecondNav } from "../components";
const Welcome: React.FC = () => {
  return (
    <div className="bg-background-welcome bg-cover bg-center h-screen w-screen flex items-center">
      <div className="w-1/2 h-1/2 bg-light-cream ml-32 rounded-lg	px-10 py-10">
        <h2 className="text-[40px] mb-10 text-light-red">Welcome to Crayon Shin-chan!</h2>
        <p>
          Crayon Shin-chan is a popular Japanese manga and anime series created
          by Yoshito Usui. The show revolves around the adventures of
          five-year-old Shinnosuke "Shin" Nohara, who is a mischievous and outspoken
          kid. Viewers will go on a journey and observe how he navigates life with his family,
          friends, and teachers. The show is popular for its humor and satirie,
          reflecting on the Asian family dynamics and childhood antics.
        </p>
      </div>
    </div>
  );
};

export { Welcome };
