import React from "react";
import { data } from "../data";
import { IconGithub, IconInfo, IconWeb } from "./icons";

const ProjectsHome = () => {
  return (
    <div className="py-10 w-5/6 m-auto grid gap-5">
      <h1 className="text-5xl text-center">PROJECTS</h1>
      <div className="mt-10 grid gap-5">
        {data.map((project, index) => {
          return (
            <div
              key={index}
              className="rounded-xl cursor-pointer overflow-hidden hover:shadow-sm transition-shadow p-5 bg-card grid gap-5"
            >
              <img
                src={project.image}
                alt=""
                className="block max-h-36  w-full object-cover rounded-md"
              />
              <div className="flex gap-1">
                {project.techonlogies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-secondary rounded-lg text-xs text-white px-3 py-0.5"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center ">
                <h1 className="text-base">{project.name}</h1>
                <div className="flex gap-2">
                  <button className="group bg-button-2 py-2.5 px-4 rounded-lg transition-all hover:bg-primary ">
                    <IconInfo className="transition-all stroke-current group-hover:text-white " />
                  </button>
                  <button className="group bg-button-2 py-2.5 px-4 rounded-lg transition-all hover:bg-primary ">
                    <IconWeb className="fill-current transition-all text-black group-hover:text-white" />
                  </button>
                  <button className="group bg-button-2 py-2.5 px-4 rounded-lg transition-all hover:bg-primary ">
                    <IconGithub className="fill-current text-black group-hover:text-white transition-all" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="font-robotoMono justify-self-center rounded-lg bg-secondary shadow-sm w-48 px-5 py-3 text-white font-bold justify-self-center hover:shadow-xl transition-all"
      >
        Load More
      </button>
    </div>
  );
};

export default ProjectsHome;
