import React from "react";
import ExperienceCard from "./ExperienceCard";
import { workExperiences } from "../../config/work";

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="z-10 animate-slideIn transform">
      <div className="px-10 md:px-12 xl:px-36 py-16 lg:py-24 sm:w-5/6 lg:w-3/4 mr-auto ml-auto shadow-card-shadow bg-card-background">
        <div className="font-thailand text-center text-custom-white-title pb-8 text-5xl leading-normal">
          Work Experience
        </div>

        <div className="space-y-12 mt-8">
          {workExperiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
