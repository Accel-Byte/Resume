import React from "react";
import { SiGithub } from "react-icons/si";

interface OtherProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

const OtherProjectCard: React.FC<OtherProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="md:col-span-1">
      <div
        className="p-7"
        style={{
          backgroundColor: "#303649",
          border: "1px solid #282d3d",
          height: "100%",
        }}
      >
        <div className="flex items-start justify-between">
          <h2 className="text-custom-white-title pb-3 font-bold text-lg md:text-lg lg:text-xl cursor-pointer hover:text-primary">
            {title}
          </h2>
          {link && (
            <a
              href={link}
              className="mt-1 ml-2 text-custom-white-title hover:text-primary"
            >
              <SiGithub className="w-5 h-5" />
            </a>
          )}
        </div>
        <div className="text-custom-white-text pt-2 font-semibold">
          {description}
        </div>
      </div>
    </div>
  );
};

export default OtherProjectCard;
