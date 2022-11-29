import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "League",
    link: "/",
    submenu: [
      {
        id: 21,
        title: "About Us",
        link: "/about",
      },
      {
        id: 22,
        title: "Leagues",
        link: "/leaguelist",
      },
      {
        id: 23,
        title: "Rule",
        link: "/rule",
      },
    ],
  },
  {
    id: 3,
    title: "Rank",
    link: "/",
    submenu: [
      {
        id: 31,
        title: "Personal",
        link: "/personalRank",
      },
      {
        id: 32,
        title: "Team",
        link: "/teamRank",
      },
    ],
  },
  {
    id: 4,
    title: "Store",
    link: "/",
  },
  {
    id: 5,
    title: "Video",
    link: "/video",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [MenuShow, SetMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${MenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id} className="has-child">
                  {item.submenu ? (
                    <p
                      onClick={() => setIsOpen(isOpen ? 0 : item.id)}
                      aria-expanded={MenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${MenuShow ? "active" : ""}`}
          onClick={() => SetMenuShow(!MenuShow)}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
