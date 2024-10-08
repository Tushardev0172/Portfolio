import React from "react";
import HeroImage from "../assets/heroImage.png";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-auto bg-gradient-to-t from-gray-900 to-zinc-900 lg:py-24 xs:py-12 font-default"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center pt-14 h-full px-4 lg:gap-0 xs:gap-6">
        <div className="flex flex-col justify-center h-full md:w-2/3">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I am a Frontend Developer and a fresher in the field
          </h2>
          <p className="py-4 max-w-md text-white">
            Having acquired a diverse set of skills, including React.js,
            Next.js, JavaScript, Node.js, Express.js, and the MERN stack.
            Additionally, I have experience with Solidity, Python, Git, GitHub,
            Tailwind CSS, CSS, and HTML.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-[#6E45E2] to-[#88D3CE] cursor-pointer"
            >
              Porjects
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowBadgeRightFilled className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-end md:w-1/3">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
