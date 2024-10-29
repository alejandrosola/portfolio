import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaTrello,
  FaAngular,
  FaReact,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";
import { RiJavaLine, RiNextjsFill } from "react-icons/ri";
import {
  SiPostgresql,
  SiNestjs,
  SiFlask,
  SiSpring,
  SiMongodb,
  SiMinio,
  SiTypescript,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

const stack: {
  [key: string]: { icon: JSX.Element; color: string; tooltip: string };
} = {
  html: { icon: <FaHtml5 />, color: "#e5522c", tooltip: "HTML" },
  css: { icon: <FaCss3Alt />, color: "#2d53e5", tooltip: "CSS" },
  git: { icon: <FaGitAlt />, color: "#f35825", tooltip: "Git" },
  scrum: { icon: <DiScrum />, color: "#0884cd", tooltip: "Scrum" },
  postgresql: {
    icon: <SiPostgresql />,
    color: "#396c94",
    tooltip: "PostgreSQL",
  },
  nestjs: { icon: <SiNestjs />, color: "#e12a54", tooltip: "NestJS" },
  flask: { icon: <SiFlask />, color: "#000000", tooltip: "Flask" },
  spring: { icon: <SiSpring />, color: "#6eb931", tooltip: "Spring" },
  mongodb: { icon: <SiMongodb />, color: "#6fad4c", tooltip: "MongoDB" },
  minio: { icon: <SiMinio />, color: "#c8324d", tooltip: "MinIO" },
  nextjs: { icon: <RiNextjsFill />, color: "#000000", tooltip: "NextJS" },
  angular: { icon: <FaAngular />, color: "#de0837", tooltip: "Angular" },
  react: { icon: <FaReact />, color: "#08d9ff", tooltip: "React" },
  vue: { icon: <FaVuejs />, color: "#47ba87", tooltip: "VueJS" },
  nodejs: { icon: <FaNodeJs />, color: "#58a149", tooltip: "NodeJS" },
  javascript: { icon: <FaJs />, color: "#f1dc55", tooltip: "Javascript" },
  typescript: {
    icon: <SiTypescript />,
    color: "#377cc8",
    tooltip: "TypeScript",
  },
  python: { icon: <FaPython />, color: "#3c78a8", tooltip: "Python" },
  java: { icon: <RiJavaLine />, color: "#dc3e16", tooltip: "Java" },
};

export default stack;
