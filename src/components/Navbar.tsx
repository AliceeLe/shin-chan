import React, { useState, useEffect, FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { IoPeople, IoGlobeOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import logo from './images/logo.png';

interface NavbarItemProps {
  locationTo: string;
  onClick: () => void;
  title: string;
  image: ReactNode;
}

const NavbarItem: FC<NavbarItemProps> = ({ locationTo, onClick, title, image }) => {
  return (
    <Link
      to={locationTo}
      onClick={onClick}
      className="text-white no-underline h-full flex items-center p-1 flex flex-col justify-center items-center gap-1 group"
    >
      <div>{image}</div>
      <p className="text-white font-open-sans text-base font-2xl">
        {title}
      </p>
    </Link>
  );
};

const Navbar: FC = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    showButton(); // initial check

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-cyan to-blue-500 h-20 text-white text-lg sticky top-0 z-50 px-4">
      <div className="text-white flex justify-between items-center pr-4 h-20 w-full">
        <Link
          to="/"
          className="text-white flex items-start gap-2.5 text-xl no-underline ml-4"
        >
          <div>
            <img src={logo} alt="Logo" className="h-20 w-35" />
          </div>
        </Link>
        <ul className="p-0 m-0 list-none flex">
          <div className="flex justify-center align-center gap-8 mr-10">
            <li>
              <NavbarItem
                locationTo="/welcome"
                onClick={closeMobileMenu}
                title="Welcome"
                image={<IoGlobeOutline />}
              />
            </li>
            <li>
              <NavbarItem
                locationTo="/characters"
                onClick={closeMobileMenu}
                title="Characters"
                image={<IoPeople />}
              />
            </li>
            <li>
              <NavbarItem
                locationTo="/themes/family"
                onClick={closeMobileMenu}
                title="Themes"
                image={<FaBookReader />}
              />
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
