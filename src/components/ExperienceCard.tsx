import React, { useMemo } from "react";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface TechIcon {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}
interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: TechIcon[];
}

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

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  location,
  description,
  skills,
}) => {
  const colorBars = useMemo(() => {
    // Determine number of bars based on company length (min 2, max 5)
    const numBars = Math.max(2, Math.min(5, Math.ceil(company.length / 3)));

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
  }, [company]);

  return (
    <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-custom-white-title font-semibold text-xl md:text-2xl">
              {position}
            </h2>
            <span className="text-custom-white-text flex items-center mt-2 md:mt-0">
              <FaCalendarAlt className="mr-2" />
              {duration}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mt-2">
            <div className="flex items-center text-custom-white-text">
              <FaBuilding className="mr-2" />
              <span className="font-medium">{company}</span>
            </div>
            <div className="flex items-center text-custom-white-text mt-2 md:mt-0">
              <FaMapMarkerAlt className="mr-2" />
              <span>{location}</span>
            </div>
          </div>

          <div className="inline-block my-4">
            {colorBars.map((color, index) => (
              <span
                key={index}
                className={`bg-${color} h-2 w-12 float-left`}
              ></span>
            ))}
          </div>

          <ul className="mt-4 space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-custom-white-text flex">
                <span className="text-primary mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills tags */}
        <div className="pt-6 mt-auto text-custom-white-title text-xl flex flex-wrap gap-3">
          {skills.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group relative hover:text-primary hover-trigger"
              >
                <Icon className="cursor-pointer hover:text-primary text-2xl" />
                <span className="font-raleway text-sm absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
