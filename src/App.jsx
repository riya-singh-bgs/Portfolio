import React, { useState } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from "./Sections/About";
import Project from "./Sections/Project";
import EandM from "./Sections/EandM";

const App = () => {
  const [mousePosition, setMousePosition] = useState("about");
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    console.log(e.clientX, e.clientY);
  };

  const handlemousePosition = (currentPosition) => {
    setMousePosition(currentPosition);
  };

  return (
    <section id="leftabout">
      <div
        className="w-full h-auto flex max-md:flex-col bg-[#0a1128] text-blue-200 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Glowing highlight circle */}
        <div
          className="max-md:hidden pointer-events-none absolute bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 transition-all duration-20"
          style={{
            width: 450,
            height: 450,
            top: mousePos.y - 205,
            left: mousePos.x - 205,
            boxShadow: "0 0 30px 15px #3b82f6", // Tailwind blue-500 glow
          }}
        />

        <div className="w-[40%] max-md:w-full md:h-screen md:fixed top-0 text-blue-200 md:mr-4 flex flex-col items-center justify-center">
          <div className="max-md:my-6 max-md:mt-20">
            <h1 className="text-5xl text-white/90 font-bold mb-2">
              RIYA SINGH
            </h1>
            <h2 className="text-xl text-white mb-8">Front End Engineer</h2>
            <p className="text-blue-200">
              I build accessible, pixel-perfect digital <br /> experiences for
              the web.
            </p>
          </div>
          <div className="h-[50%] flex flex-col justify-center w-[30%]">
            <a
              onMouseEnter={() => {
                handlemousePosition("about");
              }}
              href="#about"
              className="flex items-center justify-start gap-4"
            >
              <div
                className={
                  mousePosition == "about"
                    ? "w-20 h-0.5 bg-white"
                    : "w-10 h-0.5 bg-white"
                }
              ></div>{" "}
              <h1>About</h1>
            </a>
            <a
              onMouseEnter={() => {
                handlemousePosition("eandm");
              }}
              href="#EandM"
              className="flex items-center justify-start gap-4"
            >
              <div
                className={
                  mousePosition == "eandm"
                    ? "w-20 h-0.5 bg-white"
                    : "w-10 h-0.5 bg-white"
                }
              ></div>{" "}
              <h1>
                Experience & <br />
                Certificates
              </h1>
            </a>
            <a
              onMouseEnter={() => {
                handlemousePosition("project");
              }}
              href="#project"
              className="flex items-center justify-start gap-4"
            >
              <div
                className={
                  mousePosition == "project"
                    ? "w-20 h-0.5 bg-white"
                    : "w-10 h-0.5 bg-white"
                }
              ></div>{" "}
              <h1>Project</h1>
            </a>
            <div className=" h-[50%] max-md:hidden"></div>
          </div>
          <div className="max-md:hidden">
            <h1 className="text-sm">FIND ME ON</h1>
            <p className="text-xs">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="flex justify-center gap-6 pt-[15px] relative list-none mt-8">
              <li className="social-icons">
                <a
                  href="https://github.com/riya-singh-bgs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl hover:text-white"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/riya-kumari-932454310/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl hover:text-white"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/riya-kumari-932454310/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/singh__.riyaa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl hover:text-white"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:ml-[50%] md:w-[40%] p-20">
          <div
            onMouseEnter={() => {
              handlemousePosition("about");
            }}
          >
            <About />
          </div>
          <div
            onMouseEnter={() => {
              handlemousePosition("eandm");
            }}
          >
            <EandM />
          </div>
          <div
            onMouseEnter={() => {
              handlemousePosition("project");
            }}
          >
            <Project />
          </div>
          <div className="w-[60%] mt-20">
            <p className="text-sm">
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with{" "}
              <span className="text-white/70">React.js and Tailwind CSS</span>,
              deployed with Vercel.
            </p>
            <div className="md:hidden">
              <h1 className="text-sm">FIND ME ON</h1>
              <p className="text-xs">
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="flex justify-center gap-6 pt-[15px] relative list-none mt-8">
                <li className="social-icons">
                  <a
                    href="https://github.com/riya-singh-bgs"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour text-3xl hover:text-white"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/riya-kumari-932454310/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour text-3xl hover:text-white"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/riya-kumari-932454310/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour text-3xl hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/singh__.riyaa/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour text-3xl hover:text-white"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
