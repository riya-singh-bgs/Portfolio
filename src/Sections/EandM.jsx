import React from "react";
import { certificateData, internshipData } from "../assets/theData";

const EandM = () => {
  return (
    <section id="EandM">
    <div className="my-10">
      <div>
        <h1 className="text-xl text-white">Internship_</h1>
        <div>
          {internshipData.map((items, index) => (
            <>
              <div
                key={index}
                className="hover:bg-[#1a3c68b4] p-4 py-6 rounded-xl relative"
              >
                <div className="">
                  <h1 className="text-xl">{items.title}</h1>
                  <div className="flex items-center justify-between mb-6">
                    <p>{items.organizer}</p>
                    <p className="text-xs text-white/80">{items.durationYear}</p>
                  </div>
                </div>

                <div>
                  <p>{items.description}</p>
                </div>
                <div className="absolute right-0 mr-10">
                  <a href={items.driveLink}> Link</a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl text-white">Certificates_</h1>
        {certificateData.map((item, index) => (
          <div key={index} className="flex flex-wrap my-8">
            <div className="w-25 m-8">
              <img src={item.imageLink} alt="certificate" />
            </div>
            <div className="h-auto w-110 flex flex-wrap flex-col">
              <h1 className="text-xl text-white/80">{item.title}</h1>
              <div className="flex items-center justify-between mb-6">
                <p>{item.organizer}</p>
                <p className="text-xs text-white/80">{item.durationYear}</p>
              </div>
              <p className="flex flex-wrap">{item.description}</p>
              <a href={item.driveLink} className="mt-6">
                Drive-Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default EandM;
