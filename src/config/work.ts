import {
  SiDocker,
  SiGo,
  SiGooglebigquery,
  SiGooglecloud,
  SiGooglecloudspanner,
  SiGoogledataflow,
  SiGooglepubsub,
  SiJavascript,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiRust,
} from "react-icons/si";
import { TbLoadBalancer } from "react-icons/tb";

export const workExperiences = [
  {
    company: "Infocusp Innovations LLP.",
    position: "Software Development Engineer II",
    duration: "Jan 2023 - Present",
    location: "Ahmedabad, IN",
    description: [
      `Designed and implemented a Dataflow pipeline to process and transform weather data into image overlays for
       a 10-day forecast, with 6-hour intervals. Utilized Mercator projection for world map to visualize global tem-
       perature and precipitation data as color mesh layers, incorporating normalization and interpolation techniques
       to support higher zoom levels on the frontend using leaflet.js.`,
      "Reverse engineered the buildkit to develop a custom oci image build solution to keep separate docker build and generation process on parallel run",
    ],
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    company: "Infocusp Innovations LLP.",
    position: "Software Development Engineer",
    duration: "June 2022 - Dec 2024",
    location: "Ahmedabad, IN",
    description: [
      "Evaluated various Git manipulation modules in Python, selecting Pygit2 to build a module for extracting files and commit data efficiently, boosting pipeline speed by 900% with a custom module.",
      "Migrated a Python Dataflow pipeline to Golang, achieving an 80% reduction in runtime using go routines.",
      "Suggested Optimization in schema of BigQuery table, leading to 75% cost reduction.",
      "Developed a Dataflow pipeline in Golang to fetch file contents from a Git folder using go-git and classify licenses with licenseclassifier in Golang. Achieved 100% test coverage with unit tests.",
      "Mentored an internal Q&A project, guiding a colleague in building a platform for internal queries. Demonstrated adaptive mentoring, dynamic collaboration, and problem solving.",
      "Migrated a Python Dataflow pipeline to Golang, achieving an 80% reduction in runtime using go routines.",
      "Designed and orchestrated GCP Workflows, integrating services like Cloud Batch, BigQuery, Dataflow, and Pub/Sub to streamline data processing and automation.",
    ],
    skills: [
      { name: "Dataflow", icon: SiGoogledataflow },
      { name: "Pub/Sub", icon: SiGooglepubsub },
      { name: "Bigquery", icon: SiGooglebigquery },
      { name: "Docker", icon: SiDocker },
      { name: "Spanner", icon: SiGooglecloudspanner },
      { name: "Nginx", icon: SiNginx },
      { name: "Load balancer", icon: TbLoadBalancer },
      { name: "Go", icon: SiGo },
    ],
  },
  {
    company: "Infocusp Innovations LLP.",
    position: "Associate Software Engineer",
    duration: "Jan 2022 - May 2022",
    location: "Ahmedabad, IN",
    description: [
      "Optimized the discovery service by replacing a time-based polling mechanism (60 calls per hour) with a binary search approach, reducing API calls to just 6 per hour, significantly improving efficiency by 90%.",
      "Created Git GCP backend to deploy Git version on cloud storage in Rust.",
      "Implemented a log processing pipeline using rsyslog for log reception, a Go script for parsing, and Google Cloud Logging for storage, with automated log rotation via logrotate",
    ],
    skills: [
      { name: "Rust", icon: SiRust },
      { name: "Node", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "GCP", icon: SiGooglecloud },
    ],
  },
];
