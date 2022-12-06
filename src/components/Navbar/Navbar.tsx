import "./Navbar.css";
import { useState, useRef } from "react";

import { List, X } from "phosphor-react";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  const body = document.body;

  if (navMenu) {
    body.classList.add("active");
  } else {
    body.classList.remove("active");
  }

  window.addEventListener("scroll", onScroll);

  function onScroll() {
    activeCurrentLinkMenu();
  }

  function activeCurrentLinkMenu() {

    const sections = body.querySelectorAll("section");

    sections.forEach((section) => {
      const targetLine = scrollY + innerHeight / 2;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

      const sectionEndsAt = sectionTop + sectionHeight;

      const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

      const sectionLimits =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

      const sectionId = section.getAttribute("id");

      const menuElement = body.querySelector(
        `.navbar .container a[href*=${sectionId}]`
      );

      menuElement?.classList.remove("active");

      if (sectionLimits) {
        menuElement?.classList.add("active");
      }
    });
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

        <ul ref={navRef}>
          <li
            onClick={() => {
              setNavMenu(false);
            }}
          >
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setNavMenu(false);
            }}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              setNavMenu(false);
            }}
          >
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="btn-contact"
          onClick={() => {
            setNavMenu(false);
          }}
        >
          <span>Contato</span>
        </a>
      </div>
    </nav>
  );
};
