import React from "react";
import ProjectCard from "./ProjectCard";
import OtherProjectCard from "./OtherProjectCard";
import { mainProjects, otherProjects } from "../../config/projects";

const Projects: React.FC = () => {
  return (
    <section id="work" className="z-10 animate-slideIn transform">
      <div className="px-10 md:px-12 xl:px-36 py-16 lg:py-24 sm:w-5/6 lg:w-3/4 mr-auto ml-auto shadow-card-shadow bg-card-background">
        <div className="font-thailand text-center text-custom-white-title pb-8 text-5xl leading-normal">
          Related Work
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        <hr
          className="bg-custom-dark mt-14 md:mt-24 border-none"
          style={{ height: "3px" }}
        />
        <div className="pt-14 md:pt-24">
          <div className="text-custom-white-title pb-4 text-3xl font-semibold">
            Other Projects
          </div>
          <div className="pt-8 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <OtherProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
