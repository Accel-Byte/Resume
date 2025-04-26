import React from "react";
import { aboutMe } from "../config/projects";

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="z-10 animate-slideIn ">
      <div className="bg-aboutMeImage bg-70% bg-no-repeat px-8 md:px-10 xl:px-24 py-16 md:py-8 sm:w-5/6 lg:w-3/4 mr-auto ml-auto shadow-card-shadow bg-card-background">
        <div className="grid md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* Left column - About Me text */}
          <div className="md:col-span-1 px-2 md:self-center">
            <h2 className="font-thailand font-extralight text-4xl md:text-5xl mb-8 text-custom-white-title">
              About Me.
            </h2>
            <p className="leading-7 font-raleway text-base text-custom-white-text font-medium mb-6">
              {aboutMe.description}
            </p>

            {/* Social/Contact Icons */}
            <div className="flex gap-4 mt-6">
              {aboutMe.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <div
                    key={index}
                    className="group relative hover:text-primary hover-trigger"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      className="hover:text-custom-white-title transform hover:scale-125 rounded-full flex items-center justify-center text-custom-white-title hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="text-2xl" />
                      <span className="font-raleway text-sm absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold whitespace-nowrap">
                        {social.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <a
                href={aboutMe.resume}
                target="_blank"
                className="inline-block bg-related-work-orange text-white font-medium py-3 px-8 rounded-md hover:opacity-90 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:col-span-1 flex items-center justify-center mt-12 md:mt-0">
            <img
              src={aboutMe.image}
              alt="Developer"
              className=" z-10 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
