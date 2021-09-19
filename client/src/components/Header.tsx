import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  theme: string | null;
  setTheme: (
    value: string | ((prevVar: string | null) => string | null) | null
  ) => void;
}

const Header: React.FC<Props> = ({ theme, setTheme }) => {
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    {
      id: 0,
      path: "/",
      name: "home",
    },
    {
      id: 1,
      path: "/about",
      name: "about",
    },
    {
      id: 2,
      path: "/contact",
      name: "contact",
    },
  ];

  const handleDarkMode = () => {
    if (theme === "bright") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "bright");
      setTheme("bright");
    }
  };

  const handleMobileMenu = (e: React.MouseEvent) => {
    navRef.current?.classList.toggle("opened");
    const target = e.target as Element;
    target.classList.toggle("rotateBar");
  };

  const handleCloseAfterClick = () => {
    navRef.current?.classList.remove("opened");
  };

  return (
    <header id="header" className="fixed-top">
      <div id="logo">
        <NavLink to="/">
          👋 <span>duhan</span>
        </NavLink>
      </div>
      <nav id="nav" ref={navRef}>
        <ul className="list-unstyled nav-list mb-0">
          {navLinks.map((n) => (
            <li key={n.id} onClick={() => handleCloseAfterClick()}>
              <NavLink exact to={n.path}>
                {n.name}
              </NavLink>
            </li>
          ))}
          <li id="desktopSwitch" onClick={() => handleDarkMode()}></li>
        </ul>
      </nav>

      <nav id="mobileNav">
        <div id="mobileSwitch" onClick={() => handleDarkMode()}></div>
        <div id="openingMenu" onClick={(e) => handleMobileMenu(e)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
