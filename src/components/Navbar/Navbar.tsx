import "./Navbar.css";
import { useState } from "react";

import { List, X } from "phosphor-react";
export const Navbar = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);

  if (navMenu) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Thiagoo.Rocha</span>
      </div>

      {!navMenu && (
        <button
          className="btn-openMenu"
          onClick={() => setNavMenu(true)}
          arial-expended="false"
          aria-label="Open Menu"
        >
          <List size={32} />
        </button>
      )}

      {navMenu && (
        <div
          className="navMenu-overlay"
          onClick={() => setNavMenu(false)}
        ></div>
      )}

      <div className={navMenu ? "container menu" : "container"}>
        <button
          className="btn-closeMenu"
          onClick={() => setNavMenu(false)}
          arial-expended="true"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <ul>
          <li onClick={() => setNavMenu(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setNavMenu(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setNavMenu(false)}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <button onClick={() => setNavMenu(false)}>Contato</button>
      </div>
    </nav>
  );
};
