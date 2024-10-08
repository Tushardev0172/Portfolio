import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const resume = [
    {
      id: 1,
      child: <>Resume</>,
      href: "/resume.pdf",
      download: false,
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 font-default">
      <div className="text-5xl font-myName ml-2">Tushar</div>
      <ul className="hidden xs:hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 xs:visible md:hidden flex gap-8 items-center"
      >
        {!nav &&
          resume.map(({ id, child, href, download }) => (
            <li key={id} className="flex" title="Resume">
              <a
                href={href}
                className="flex xs:flex-col gap-2 items-center text-gray-500 hover:text-white duration-100 w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-900 to-zinc-900">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:text-white"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
