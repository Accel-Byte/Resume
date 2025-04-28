import React from "react";
import { expertiseCards } from "../../config/expertise";

interface CardProps {
  title: string;
  icons: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    colorClass: string;
  }[];
  points: string[];
  image: {
    link: string;
    imageSide: "left" | "right";
  };
}

const Card: React.FC<CardProps> = ({ title, icons, points, image }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center px-1 py-8">
      {image.imageSide === "left" && (
        <div>
          <img
            src={image.link}
            alt="Developer"
            className="z-10 h-auto w-full max-w-md mx-auto"
          />
        </div>
      )}

      <div>
        <h3 className="font-semibold text-3xl lg:text-4xl text-custom-white-title mb-8 mb-10">{title}</h3>

        <div className="flex flex-wrap gap-4 lg:gap-8 mb-8 lg:mb-10">
          {icons.map(({ name, icon: Icon, colorClass }, index) => {
            return (
              <div
                key={index}
                className="group relative hover:text-primary hover-trigger"
              >
                <Icon
                  className={`cursor-pointer hover:text-primary text-3xl ${colorClass}`}
                />
                <span className="font-raleway text-sm absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold whitespace-nowrap">
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="space-y-2 lg:space-y-6 text-custom-white-text">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="text-related-work-orange text-xl">-</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>

      {image.imageSide === "right" && (
        <div>
          <img
            src={image.link}
            alt="Developer"
            className="z-10 h-auto w-full max-w-md mx-auto"
          />
        </div>
      )}
    </div>
  );
};

const Expertise: React.FC = () => {
  return (
    <section id="services" className="py-24 px-8 md:px-10 bg-custom-dark">
      <div className="sm:w-5/6 lg:w-3/4 mx-auto">
        <h2 className="text-5xl md:text-6xl text-custom-white-title text-center font-thailand font-thin mb-20">
          Here's what I do
        </h2>

        {expertiseCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
