import React from "react";
import DegreeCard from "./DegreeCard";
import { certificateData, educationData } from "../../config/education";
import CertificateCard from "./CertificateCard";

const Education: React.FC = () => {
  return (
    <section id="education" className="z-10 animate-slideIn transform">
      <div className="px-10 md:px-12 xl:px-36 py-16 lg:py-24 sm:w-5/6 lg:w-3/4 mr-auto ml-auto shadow-card-shadow bg-card-background">
        <div className="font-thailand text-center text-custom-white-title pb-8 text-5xl leading-normal">
          Degrees Received
        </div>

        <div className="space-y-12 mt-8">
          {educationData.map((degree, index) => (
            <DegreeCard key={index} {...degree} />
          ))}
        </div>
      </div>
      <div className="mt-16 px-10 md:px-12 xl:px-36 py-16 lg:py-24 sm:w-5/6 lg:w-3/4 mr-auto ml-auto shadow-card-shadow bg-card-background">
        <div className="font-thailand text-center text-custom-white-title pb-8 text-5xl leading-normal">
          Certificates
        </div>
        <div className="pt-8 md:pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificateData.map((project, index) => (
              <CertificateCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
