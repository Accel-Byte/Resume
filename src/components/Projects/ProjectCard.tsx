import React, { useMemo } from "react";
import { SiGithub } from "react-icons/si";

interface TechIcon {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface ProjectCardProps {
  image?: string;
  title: string;
  link?: string;
  description: string;
  techIcons: TechIcon[];
}

// Available color options
const colorOptions = [
  "related-work-orange",
  "related-work-white",
  "related-work-dark",
  "related-work-green",
  "related-work-gray",
  "related-work-teal",
  "related-work-yellow",
  "related-work-purple",
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  description,
  techIcons,
}) => {
  const colorBars = useMemo(() => {
    // Determine number of bars based on title length (min 2, max 5)
    const numBars = Math.max(2, Math.min(5, Math.ceil(title.length / 3)));

    // Create array of random colors
    const bars = [];
    const usedIndices = new Set();

    for (let i = 0; i < numBars; i++) {
      let randomIndex;

      do {
        randomIndex = Math.floor(Math.random() * colorOptions.length);
      } while (usedIndices.has(randomIndex));

      usedIndices.add(randomIndex);
      bars.push(colorOptions[randomIndex]);

      // If we've used all available colors, reset the used indices
      // but keep the last used index to avoid repetition
      if (usedIndices.size >= colorOptions.length - 1) {
        const lastUsed = randomIndex;
        usedIndices.clear();
        usedIndices.add(lastUsed);
      }
    }

    return bars;
  }, [title]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <h2 className="text-custom-white-title font-semibold text-lg md:text-lg lg:text-xl cursor-pointer hover:text-primary">
            {title}
          </h2>
          {link && (
            <a
              href={link}
              target="_blank"
              className="mt-1.5 ml-2 text-custom-white-title hover:text-primary"
            >
              <SiGithub className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="inline-block my-4">
          {colorBars.map((color, index) => (
            <span
              key={index}
              className={`bg-${color} h-2 w-12 float-left`}
            ></span>
          ))}
        </div>
        <p className="leading-6 font-raleway text-sm lg:text-base text-custom-white-text font-medium">
          {description}
        </p>
      </div>

      {/* Icons positioned at the end */}
      <div className="pt-6 mt-auto text-custom-white-title text-xl flex flex-wrap gap-3">
        {techIcons.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="group relative hover:text-primary hover-trigger"
            >
              <Icon className="cursor-pointer hover:text-primary w-6 h-6" />
              <span className="font-raleway text-sm absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
