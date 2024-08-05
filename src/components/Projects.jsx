import React from "react";
import hrms from "../assets/portfolio/HRMS.png";
import books from "../assets/portfolio/TECH books.png";
import login from "../assets/portfolio/login.png";
import lottery from "../assets/portfolio/lottery.png";
import banking from "../assets/portfolio/banking.png";
import grocery from "../assets/portfolio/grocery.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: hrms,
      link: "https://github.com/Tushardev0172/HRMS",
    },
    {
      id: 2,
      src: books,
      link: "https://github.com/Tushardev0172/Tech-Books",
    },
    {
      id: 3,
      src: login,
      link: "https://github.com/Tushardev0172/Login_Signup_Page",
    },
    {
      id: 4,
      src: lottery,
      link: "https://github.com/Tushardev0172/Lottery",
    },
    {
      id: 5,
      src: banking,
      link: "https://github.com/Tushardev0172/Banking_System_Solidity",
    },
    {
      id: 6,
      src: grocery,
      link: "https://github.com/Tushardev0172/Grocery-store",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-auto lg:py-20 xs:py-16 font-default"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl xs:text-5xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 hover:shadow-gray-300 transition-all ease-in-out rounded-lg"
            >
              <img src={src} alt="" className="rounded-md" />
              <div className="flex items-center justify-center">
                <a className="w-50 px-6 py-3 m-4 " href={link}>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
