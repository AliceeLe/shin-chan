import React from "react";
import { NavLink } from "react-router-dom";

interface SecondNavItemProps {
  locationTo: string;
  title: string;
}

const SecondNavItem: React.FC<SecondNavItemProps> = ({ locationTo, title }) => {
  return (
    <NavLink
      to={locationTo}
      className={({ isActive }) =>
        isActive
          ? "text-white border-b-[3px] border-white text-2xl font-serif font-source-serif-pro pb-1"
          : "text-white text-2xl font-serif font-source-serif-pro"
      }
    >
      {title}
    </NavLink>
  );
};

const SecondNav: React.FC = () => {
  return (
    <nav>
      <div className="shadow-md py-0 bg-galactic-blue">
        <ul className="p-2 mx-auto list-none flex items-center justify-around w-3/5 h-full">
          <li>
            <SecondNavItem locationTo="/themes/family" title="Family" />
          </li>
          <li>
            <SecondNavItem locationTo="/themes/friends" title="Friends" />
          </li>
          <li>
            <SecondNavItem locationTo="/themes/satire" title="Satire" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export {SecondNav};
