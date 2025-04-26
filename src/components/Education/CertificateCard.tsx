import React from "react";
import { LuExternalLink } from "react-icons/lu";

interface CertificateCardProps {
  platform: string;
  certificate: string;
  link: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  platform,
  certificate,
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
          <h2 className="text-white pb-3 font-bold text-xl cursor-pointer hover:text-primary">
            {platform}
          </h2>
            <a
              href={link}
              target="_blank"
              className="mt-1 ml-2 text-custom-white-title hover:text-primary"
            >
              <LuExternalLink className="w-5 h-5" />
            </a>
        </div>
        <div className="text-custom-white-text pt-2 font-semibold">
          {certificate}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
