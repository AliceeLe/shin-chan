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
      className="h-24 w-24 rounded-full overflow-hidden cursor-pointer border-white border-[3px]"
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
    <div className="flex flex-col gap-10 mt-40">
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
  name: string;
}

const CharacterCardLeft: React.FC<CharacterCardProps> = ({
  description,
  image,
  width,
  name,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        src={image}
        style={{ width }}
        className="object-cover object-center"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-galactic-blue">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const CharacterCardRight: React.FC<CharacterCardProps> = ({
  description,
  image,
  width,
  name,
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-galactic-blue">{name}</h2>
        <p>{description}</p>
      </div>
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
    <div className="h-full w-4/6 bg-light-cream flex flex-col gap-4 px-10 py-10 overflow-y-scroll">
      <h2 className="text-4xl text-teal-500">Meet the Nohara family</h2>
      <CharacterCardRight
        description="The name-bearer and the protagonist of the show, Shin is a mischievous and cheeky five-year-old boy. Known for his blunt honesty and inappropriate antics, he often finds himself in humorous and awkward situations, much to the frustration of those around him. Some of Shin’s antics include hitting on beautiful women much older than him, or pulling down his pants and dancing with his butt. Yet, deep down, he cares for his family and friends even though he doesn't act like it."
        image={charShin}
        width="16.67%"
        name="Shinnosuke Nohara"
      />
      <CharacterCardLeft
        description="Shin’s toddler sister, Himawari, is also mischievous and mimics her brother’s antics, adding to the chaos of the Nohara household. She is fascinated with shiny objects, having the ability to distinguish between real jewels and a simple piece of imitation. Similar to her mom, she is interested in handsome young men."
        image={charHimawari}
        width="25%"
        name="Himawari Nohara"
      />
      <CharacterCardRight
        description="The loving yet strict mother of Shin and Himawari, Misae tries her best to maintain order in the family. Similar to her children, she also has bad habits such as lying about her age, pursuing handsome young men, or sleeping all day long. She is often seen scolding Shin for his mischief but also shows a deep affection for her children and husband."
        image={charMisae}
        width="20%"
        name="Misae Nohara"
      />
      <CharacterCardLeft
        description=" Hiroshi, the father and the breadwinner of the family, is a typical salaryman who tries to balance his demanding job with his responsibilities at home. Despite his exhaustion, he always finds time to bond with his family and often becomes an unintended participant in Shin's escapades."
        image={charHiroshi}
        width="20%"
        name="Hiroshi Nohara"
      />
      <CharacterCardRight
        description="While the beloved family’s dog, Shiro is the subject of neglect thanks to his owner's forgetfulness and short attention-span. Due to that, he develops a habit of foraging for food on his own. He is a very intelligent dog, often presenting logic and intellect that surpasses his human owners."
        image={charShiro}
        width="25%"
        name="Shiro"
      />
    </div>
  );
};

const CharacterCardFriends: React.FC = () => {
  return (
    <div className="h-full w-4/6 bg-light-cream flex flex-col gap-4 px-10 py-10 overflow-y-scroll">
      <h2 className="text-4xl text-teal-500">Meet Shin's friends</h2>
      <CharacterCardRight
        description="Kazama is the intellectual and serious member of the group. He is academically gifted and aspires to be successful, often getting frustrated with Shin's carefree attitude. Despite their differences, Kazama values his friendship with Shin and the rest of the gang, though he sometimes struggles with their antics."
        image={charKazuma}
        width="16.67%"
        name="Toru Kazama"
      />
      <CharacterCardLeft
        description="Nene is a kind-hearted and somewhat bossy girl who often plays house with her friends. She has a strong sense of justice and doesn't hesitate to scold Shin when he misbehaves. She is obsessed with bunny plushies, often brings around one and hits it it she gets angry."
        image={charNene}
        width="25%"
        name="Nene Sakurada"
      />
      <CharacterCardRight
        description="Masao is a timid and sensitive boy who often gets easily scared and cries. Despite his shy nature, he is a loyal friend who always tries to keep up with Shin and the others. His vulnerability and innocence often make him the target of teasing, but his friends always look out for him."
        image={charMasao}
        width="20%"
        name="Masao Sato"
      />
      <CharacterCardLeft
        description="Bo is a quiet and enigmatic child who rarely speaks but has a unique perspective on life. He is often seen with a runny nose and a blank expression, adding a quirky element to the group. Despite his oddities, Bo's calm demeanor and unexpected insights often surprise his friends and contribute to their adventures."
        image={charBo}
        width="20%"
        name="Bo Suzuki"
      />
    </div>
  );
};

const CharacterCardTeachers: React.FC = () => {
  return (
    <div className="h-full w-4/6 bg-light-cream flex flex-col gap-4 px-10 py-10 overflow-y-scroll">
      <h2 className="text-4xl text-teal-500">
        Meet the teachers at Futaba kindergarten
      </h2>
      <CharacterCardRight
        description="Ms. Midori is the homeroom teacher of the Sunflower class, in which Shin and his friends are in. Even though she cares for her students, she often finds herself exasperated by Shin's antics and struggles to maintain discipline in her classroom. Despite bitter rivalry with  Ume Matsuzaka about their classes or chest sizes, she also cares for her colleague."
        image={charMidori}
        width="16.67%"
        name="Midori Ishizaka"
      />
      <CharacterCardLeft
        description="Ume Matsuzaka is the homeroom teacher of the Rose's class and often engages in rivalry with Ms. Midori. She likes to live stylishly in public but she actually struggles to save her money for accessories and lives in a very cheap, dusty apartment. One of the recurring motif in the anime is that her dates are often ruined by Shin and his friends."
        image={charMatsuzaka}
        width="25%"
        name="Ume Matsuzaka"
      />
      <CharacterCardRight
        description="Ms. Masumi is the new teacher, in charge of the Tulip class. She seems to be nervous of everything and experiences panic attacks when facing a large group of kids. However, when taken of her glasses, she becomes more agressive and fearless."
        image={charMasumi}
        width="20%"
        name="Masumi Ageo"
      />
      <CharacterCardLeft
        description="The principal of the kindergarten, he deeply cares about his students and teachers. However, hiis Yakuza-like appearance is often misunderstood by the people in the neighborhood and even within the students of the kindergarten in some occasions."
        image={charBunta}
        width="20%"
        name="Bunta Takakura"
      />
    </div>
  );
};

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
    <div className="bg-background-characters bg-cover bg-center h-screen w-screen text-center">
      <div className="flex justify-center items-start gap-20 h-full">
        <NavButtons onNavClick={setSelectedCategory} />
        {/* Positioned at top left corner */}
        {renderCharacterCard()}
      </div>
    </div>
  );
};

export { Characters };
