import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGoogledataflow,
  SiGo,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiCplusplus,
  SiPostgresql,
  SiDocker,
  SiGooglepubsub,
  SiGooglebigquery,
  SiGooglecloudspanner,
  SiGooglecloudstorage,
} from "react-icons/si";
import { GoWorkflow } from "react-icons/go";
import { TbLoadBalancer } from "react-icons/tb";
import webDevImage from "../assets/Images/undraw_firmware_3fxd.svg";
import cloudImage from "../assets/Images/undraw_cloud-hosting_tfeh.svg";

export const expertiseCards = [
  {
    title: "Full Stack Development",
    icons: [
      { name: "HTML5", icon: SiHtml5, colorClass: "text-red-500" },
      { name: "CSS3", icon: SiCss3, colorClass: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-400" },
      { name: "C++", icon: SiCplusplus, colorClass: "text-blue-400" },
      { name: "React", icon: SiReact, colorClass: "text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, colorClass: "text-green-500" },
      { name: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
      { name: "Go", icon: SiGo, colorClass: "text-blue-400" },
      { name: "Redux", icon: SiRedux, colorClass: "text-purple-400" },
      { name: "MongoDB", icon: SiMongodb, colorClass: "text-green-500" },
      { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-blue-400" },
      { name: "MySQL", icon: SiMysql, colorClass: "text-blue-400" },
    ],
    points: [
      "Experienced in building responsive and interactive web applications using modern frontend frameworks like React.js and Next.js",
      "Skilled in developing scalable and performant backend systems using Node.js, Express, and Golang, following microservices architecture",
      "Proficient in containerizing applications with Docker for consistent development, testing, and deployment workflows",
      "Applies system design principles and architectural patterns to create robust, maintainable, and scalable web solutions",
      "Comfortable integrating real-time features, file handling, and third-party services to build full-featured web platforms",
    ],
    image: {
      link: webDevImage,
      imageSide: "left" as const,
    },
  },
  {
    title: "Cloud Infra and Data Engineering",
    icons: [
      { name: "Workflow", icon: GoWorkflow, colorClass: "text-blue-400" },
      {
        name: "Load Balancer",
        icon: TbLoadBalancer,
        colorClass: "text-blue-400",
      },
      { name: "Pub/Sub", icon: SiGooglepubsub, colorClass: "text-blue-400" },
      { name: "BigQuery", icon: SiGooglebigquery, colorClass: "text-blue-400" },
      {
        name: "Cloud Spanner",
        icon: SiGooglecloudspanner,
        colorClass: "text-blue-400",
      },
      {
        name: "Cloud Storage",
        icon: SiGooglecloudstorage,
        colorClass: "text-blue-400",
      },
      { name: "Dataflow", icon: SiGoogledataflow, colorClass: "text-blue-400" },
      { name: "Docker", icon: SiDocker, colorClass: "text-blue-400" },
    ],
    points: [
      "Proficient in designing and orchestrating scalable cloud-native architectures using Google Cloud Platform (GCP).",
      "Strong experience in building and optimizing data pipelines for large-scale processing using Apache Beam and Dataflow.",
      "Skilled in automating cloud workflows and integrating services like Pub/Sub, BigQuery, and Cloud Batch for seamless data operations.",
      "Expertise in containerization and deployment using Docker, ensuring reliable and reproducible environments.",
      "Proven ability to optimize performance and cost across data infrastructure through thoughtful architecture and efficient engineering practices.",
    ],
    image: {
      link: cloudImage,
      imageSide: "right" as const,
    },
  },
];
