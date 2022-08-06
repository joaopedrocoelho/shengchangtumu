import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="my-20 flex flex-col justify-center items-center">
      <h3 className="font-bold text-3xl ">Latest Projects</h3>
      <div className=" w-12 bg-baseYellow h-1 my-8"></div>
      <div className="w-3/5 flex gap-12 justify-center">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <button className="border-2 border-gray-500 
      text-base text-gray-800 font-bold mt-10 flex 
     w-44 justify-center items-center py-3
      ">
        VIEW ALL
      </button>
    </div>
  );
};

export default Projects;
