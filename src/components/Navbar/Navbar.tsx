import "./Navbar.css";
import { useState, useRef } from "react";

import { List, X } from "phosphor-react";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const navRef = useRef<any>();

  if (navMenu) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }

  function activeCurrentLinkMenu(currentLink: any) {
    const navUl = navRef.current.children;

    const body = document.body

    const sections = body.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      //console.log(sectionTop + sectionHeight)

    })

    for (let li of navUl) {
      let a = li.querySelector("a");

      a.classList.remove("active");
    }

    currentLink.classList.add("active");
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
            onClick={(e) => {
              setNavMenu(false);
              activeCurrentLinkMenu(e.target);
            }}
          >
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li
            onClick={(e) => {
              setNavMenu(false);
              activeCurrentLinkMenu(e.target);
            }}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={(e) => {
              setNavMenu(false);
              activeCurrentLinkMenu(e.target);
            }}
          >
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="btn-contact"
          onClick={(e) => {
            setNavMenu(false);
            activeCurrentLinkMenu(e.target);
          }}
        >
          Contato
        </a>
      </div>
    </nav>
  );
};
