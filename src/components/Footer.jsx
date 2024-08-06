import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/tushar-ab660126a/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: "https://github.com/Tushardev0172",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:tushardevtwal@gmail.com",
    },
  ];
  return (
    <div className="w-full h-auto text-white  bg-black p-4 md:hidden font-default">
      <ul className="items-center flex justify-evenly px-4 cursor-pointer capitalize font-medium text-gray-500 gap-4">
        {links.map(({ id, child, href }) => (
          <li key={id} className="flex">
            <a
              href={href}
              className="flex xs:flex-col  gap-2 items-center text-gray-500 hover:text-white duration-100 w-full"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
