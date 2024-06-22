import React from "react";
import { SecondNav } from "../components";
const Welcome: React.FC = () => {
  return (
    <div className="bg-background-welcome bg-cover bg-center h-screen w-screen flex items-center">
      <div className="w-1/2 h-1/2 bg-light-cream ml-32 rounded-md	px-10 py-10">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>
  );
};

export { Welcome };
