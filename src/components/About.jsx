import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white lg:py-20 xs:py-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl xs:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl mt-8 xs:mt-10 sm:mt-12">
          I completed my schooling in 2019, with a focus on Information
          Technology during my senior secondary education. I then pursued a
          Bachelor's degree in Computer Applications from Sri Guru Gobind Singh
          College in Chandigarh (2019 - 2022), affiliated with Panjab University.
          During this time, I gained foundational skills in C, C++, SDLC, PHP,
          and VB.NET.
        </p>
        <br />
        <p className="text-sm xs:text-base sm:text-lg md:text-xl">
          After graduation, I enrolled in a Master in Blockchain Development
          course at Jetking Institute in Chandigarh, where I expanded my skill
          set to include HTML, CSS, JavaScript, Node.js, React.js, Python,
          blockchain fundamentals, Solidity, Go, Rust, TypeScript, NFTs, IPFS,
          Web3, and Hardhat.
        </p>
        <br />
        <p className="text-sm xs:text-base sm:text-lg md:text-xl">
          Upon completing the course, I interned at ChainCode Consulting LLP in
          Chandigarh for three months. During this internship, I contributed to
          various projects, including redesigning existing projects, creating a
          company landing page, working on several live projects both on the
          frontend and backend, and developing a Human Resource Management
          System (HRMS) from scratch with my team. Through these experiences, I
          further honed my skills in Next.js, Tailwind CSS, the MERN stack, MUI,
          and JWT.
        </p>
      </div>
    </div>
  );
};

export default About;
