"use client";
import React, { useState } from "react";
import family from "../components/images/family.webp";
import friend from "../components/images/friends.png";
import teachers from "../components/images/teachers.jpg";
import charShin from "../components/images/char-shin.webp";
import charHimawari from "../components/images/char-himawari.png";
import charMisae from "../components/images/char-misae.png";
import charHiroshi from "../components/images/char-hiroshi.png";
import charShiro from "../components/images/char-shiro.png";
import charKazuma from "../components/images/char-kazuma.webp";
import charNene from "../components/images/char-nene.png";
import charMasao from "../components/images/char-masao.webp";
import charBo from "../components/images/char-bo.png";
import charMidori from "../components/images/char-midori.png";
import charMatsuzaka from "../components/images/char-matsuzaka.png";
import charMasumi from "../components/images/char-masumi.png";
import charBunta from "../components/images/char-bunta.png";

// NavCircles component
interface NavCirclesProps {
  image: string;
  onClick: () => void;
}

const NavCircles: React.FC<NavCirclesProps> = ({ image, onClick }) => {
  return (
    <div
      className="h-24 w-24 rounded-full overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        className="w-full h-full object-cover object-center"
        alt="Circle"
      />
    </div>
  );
};

// NavButtons component
interface NavButtonsProps {
  onNavClick: (category: string) => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onNavClick }) => {
  return (
    <div className="flex flex-col gap-10">
      <NavCircles image={family} onClick={() => onNavClick("family")} />
      <NavCircles image={friend} onClick={() => onNavClick("friends")} />
      <NavCircles image={teachers} onClick={() => onNavClick("teachers")} />
    </div>
  );
};

interface CharacterCardProps {
  description: string;
  image: React.ReactNode;
  width: string;
}

const CharacterCardLeft: React.FC<CharacterCardProps> = ({
  description,
  image,
  width,
}) => {
  return (
    <div className="flex gap-4">
      <img
        src={image}
        style={{ width }}
        className="object-cover object-center"
      />
      <p>{description}</p>
    </div>
  );
};

const CharacterCardRight: React.FC<CharacterCardProps> = ({
  description,
  image,
  width,
}) => {
  return (
    <div className="flex gap-4">
      <p>{description}</p>
      <img
        src={image}
        style={{ width }}
        className="object-cover object-center"
      />
    </div>
  );
};

const CharacterCardFamily: React.FC = () => {
  return (
    <div className="h-4/5 w-4/6 bg-galactic-blue flex flex-col gap-4 my-20">
      <h2>Meet the Nohara family</h2>
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charShin}
        width="16.67%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charHimawari}
        width="25%"
      />
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charMisae}
        width="20%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charHiroshi}
        width="20%"
      />
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charShiro}
        width="25%"
      />
    </div>
  );
};

const CharacterCardFriends: React.FC = () => {
  return (
    <div className="h-4/5 w-4/6 bg-galactic-blue flex flex-col gap-4 my-20">
      <h2>Meet Shin's friends</h2>
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charKazuma}
        width="16.67%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charNene}
        width="25%"
      />
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charMasao}
        width="20%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charBo}
        width="20%"
      />
    </div>
  );
};

const CharacterCardTeachers: React.FC = () => {
  return (
    <div className="h-4/5 w-4/6 bg-galactic-blue flex flex-col gap-4 my-20">
      <h2>Meet the teachers at Futaba kindergarten</h2>
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charMidori}
        width="16.67%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charMatsuzaka}
        width="25%"
      />
      <CharacterCardRight
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charMasumi}
        width="20%"
      />
      <CharacterCardLeft
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        image={charBunta}
        width="20%"
      />
    </div>
  );
};

// Characters component
const Characters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("family");

  const renderCharacterCard = () => {
    switch (selectedCategory) {
      case "family":
        return <CharacterCardFamily />;
      case "friends":
        return <CharacterCardFriends />;
      case "teachers":
        return <CharacterCardTeachers />;
      default:
        return <CharacterCardFamily />;
    }
  };

  return (
    <div className="bg-light-cream min-h-screen text-center">
      <div className="flex justify-center items-center gap-20">
        <NavButtons onNavClick={setSelectedCategory} />
        {renderCharacterCard()}
      </div>
    </div>
  );
};

export { Characters };
