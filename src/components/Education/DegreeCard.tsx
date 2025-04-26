import React from "react";

interface DegreeCardProps {
  university: string;
  degree: string;
  period: string;
  logo?: string;
  achievements: string[];
  coursework?: string;
  websiteUrl?: string;
}

const DegreeCard: React.FC<DegreeCardProps> = ({
  university,
  degree,
  period,
  logo,
  achievements,
  coursework,
  websiteUrl,
}) => {
  return (
    <div className="font-raleway rounded-lg overflow-hidden">
      {/* Header with university name and period */}
      <div className="bg-related-work-gray text-white p-6 flex justify-between items-center">
        <h3 className="text-2xl font-bold">{university}</h3>
        <span className="text-lg font-medium">{period}</span>
      </div>

      {/* Degree title */}
      <div className="bg-related-work-gray text-white px-6 pb-6">
        <p className="text-xl ">{degree}</p>
      </div>

      {/* Main content with logo and achievements */}
      <div className="bg-custom-dark text-white p-6 flex flex-col md:flex-row">
        {/* Logo column */}
        {logo && (
          <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center items-start">
            <div className=" border-related-work-green p-2 inline-block">
              <img
                src={logo}
                alt={`${university} logo`}
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>
        )}

        {/* Content column */}
        <div className={`${logo ? "md:w-3/4" : "w-full"}`}>
          {/* Achievements list */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-2">-</span>
                <p className="text-custom-white-text">{achievement}</p>
              </div>
            ))}

            {/* Coursework section */}
            {coursework && (
              <div className="flex items-start mt-4">
                <span className="text-primary mr-2">-</span>
                <p className="text-custom-white-text">{coursework}</p>
              </div>
            )}
          </div>

          {/* Visit website button */}
          {websiteUrl && (
            <div className="mt-8 text-right">
              <a
                href={websiteUrl}
                target="_blank"
                className="inline-block bg-related-work-orange text-white font-medium py-3 px-8 rounded-md hover:opacity-90 transition-colors duration-300"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
