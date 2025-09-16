import React from "react";
import { projectData } from "../assets/theData";

const Project = () => {
  return (
    <section id="project">
    <div className="my-10 p-4 flex gap-6 flex-col">
        <h1 className="text-xl text-white">Projects_</h1>
      {projectData.map((items, index) => (
        <>
        <div key={index} className="hover:bg-[#1a3c68b4] p-4 py-6 rounded-xl relative">
          <div className="">
            <h1 className="text-xl">{items.title}</h1>
            <p>{items.year}</p>
          </div>
          <div className="p-6 flex gap-4 flex-wrap md:w-[80%]">
            {items.buildWith.map((item) => (
                <div className="bg-[#2c464470] py-1 px-3 rounded-full text-[#68a8a5]">{item}</div>
            ))}
          </div>
          <div>
            <p>{items.description}</p>
          </div>
          <div className="absolute right-0 mr-10">
            <a href={items.link}> Link</a>
          </div>
        </div>
        </>
      ))}
    </div>
    </section>
  );
};

export default Project;
