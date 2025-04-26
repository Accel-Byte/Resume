import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiJavascript,
  SiNginx,
  SiMongodb,
  SiGraphql,
  SiGo,
  SiSpringboot,
  SiPostgresql,
  SiFastapi,
  SiTypescript,
  SiTailwindcss,
  SiLeetcode,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import developerImage from "../assets/Images/coder.png";

export const aboutMe = {
  image: developerImage,
  description: `Hi, I'm Cheris Patel, an excitable fullstack web developer working from India.
    I'm very fascinated about coding. For the past 10 years, Apart from web development
    I'm very interested in Astronomy and Gaming.`,
  resume:"https://drive.google.com/file/d/1y_DDYdXE2Fgns1hw61XPVGxPtUDU8s91/view?usp=drive_link",
  socials: [
    { name: "GitHub", icon: FaGithub, link: "https://github.com/Accel-Byte" },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/cheris-patel-6702b2185/",
    },
    { name: "Mail", icon: FaEnvelope, link: "mailto:patelcheris13.com" },
    { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@PrestoCS" },
    {
      name: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/Acce_l/",
    },
  ],
};

export const mainProjects = [
  {
    title: "Online Judge",
    link: "https://github.com/meetpatel0963/Online-judge",
    description:
      "MERN stack where you can solve different types of coding problems and also create your own problem. There is dashboard where you can see your statistics like Number of Accepted Answers, Wrong Answers and Compilation Error.",
    techIcons: [
      { name: "Javascript", icon: SiJavascript },
      { name: "Node", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "nginx", icon: SiNginx },
      { name: "mongodb", icon: SiMongodb },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    title: "Placify",
    link: "https://github.com/meetpatel0963/Placement-Management-System",
    description: `Placement Management System to manage placement-related tasks using a microservice architecture.
      Strengthened with a Centralized Configuration Server and Service Discovery using a Naming Server.
      Additionally, implemented distributed tracing with Zipkin for enhanced efficiency and used gRPC for service intercommunication`,
    techIcons: [
      { name: "Golang", icon: SiGo },
      { name: "Node", icon: SiNodedotjs },
      { name: "Fastapi", icon: SiFastapi },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Postgresql", icon: SiPostgresql },
      { name: "mongodb", icon: SiMongodb },
      { name: "docker", icon: SiDocker },
    ],
  },
  {
    title: "Stack Underflow",
    link: "https://github.com/Accel-Byte/Stack-Underflow",
    description:
      "Question and answer site for professional and enthusiast programmers based on MERNG stack with Realtime Post comment and Answer Fetch.",
    techIcons: [
      { name: "Javascript", icon: SiJavascript },
      { name: "Node", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "graphql", icon: SiGraphql },
      { name: "mongodb", icon: SiMongodb },
      { name: "Tailwindcss", icon: SiTailwindcss },
    ],
  },
  {
    title: "Avro Viewer",
    link: "https://github.com/Accel-Byte/Avro-Viewer",
    description:
      "Vscode extension to view and explore Avro files in a table format with search, pagination, and theme support.",
    techIcons: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwindcss", icon: SiTailwindcss },
    ],
  },
  {
    title: "Canvas",
    description:
      "Canvas is vscode extension which is like paint in vscode with some limited functionality.",
    link: "https://marketplace.visualstudio.com/items?itemName=dev1ce.canvas",
    techIcons: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
];

export const otherProjects = [
  {
    title: "Ecommerce",
    description:
      "Ecommerce Website made up using django as backend and React as frontend and mysql as database also performed authentiation and transaction of item purchase.",
    link: "https://github.com/Accel-Byte/Ecommerce",
  },
  {
    title: "Simple Chat App",
    description:
      "Chat Application made up using React as frontend and Nodejs as backend. Used socket io to send and receive chat message.",
    // link: "https://kind-edison-0afd7d.netlify.app",
  },
  {
    title: "Blog",
    description:
      "Simple blog website created using HTML CSS as frontend and Nodejs as backend and mongodb as database",
  },
];
