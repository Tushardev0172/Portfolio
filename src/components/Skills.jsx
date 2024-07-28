import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import solidity from "../assets/solidity.png";
import python from "../assets/python.png";
import blockchain from "../assets/blockchain.png";
import node from "../assets/node.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: blockchain,
      title: "Blockchain Technology",
      style: "shadow-blue-800",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React.JS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: postman,
      title: "Postman App",
      style: "shadow-orange-400",
    },
    {
      id: 11,
      src: solidity,
      title: "Solidity",
      style: "shadow-gray-600",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 13,
      src: node,
      title: "Node.js",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto lg:py-20 xs:py-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl xs:text-5xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style, hover }) => (
            <div
              key={id}
              className={`shadow-md hover:shadow-current transition-all  py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
