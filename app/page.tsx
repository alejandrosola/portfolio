import Carousel from "@/components/Carousel";
import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import EmailForm from "@/components/EmailForm";
import DividerLine from "@/components/DividerLine";
import { Box, Tooltip } from "@mui/material";
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
} from "react-icons/si";
import { useRouter } from "next/router";

export default function Home() {
  const educations = [
    {
      title: "Licenciatura en Informática",
      subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
      body: "Actualmente cursando el 4to año de la Licenciatura en Informática. 18 materias aprobadas, 66.67% de avance.",
      imgPath: "/unpsjb.png",
    },
    {
      title: "Analista Programador Universitario",
      subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
      body: "Recibido de la carrera en marzo de 2024.",
      imgPath: "/unpsjb.png",
    },
    {
      title: "CS50 - Introduction to Computer Science",
      subtitle: "Universidad de Harvard",
      body: "Curso realizado en 2020.",
      imgPath: "/cs50.png",
    },
    {
      title: "CS50 - Introduction to Artificial Intelligence",
      subtitle: "Universidad de Harvard",
      body: "Curso realizado en 2023.",
      imgPath: "/cs50.png",
    },
  ];

  const experiences = [
    {
      title: "Mapa Interactivo Cultural",
      subtitle: "Pasantía remunerada - CAMAD",
      body: "Pasantía de una aplicación de blablabla",
      imgPath: "/cs50.png",
    },
    {
      title: "Auxiliar alumno",
      subtitle:
        "Programación Orientada a Objetos - Licenciatura en informática",
      body: "Auxiliar en la materia blablabla",
      imgPath: "/unpsjb.png",
    },
    {
      title: "CVA Magazine",
      subtitle: "Desarrollador Fullstack",
      body: "Desarrollador fullstack de una página web con Flask, Vue y MongoDB",
      imgPath: "/unpsjb.png",
    },
  ];

  const descriptionSection = (
    <>
      <div style={{ marginTop: "2%" }}>
        <Text variant="h2">Desarrollador Fullstack</Text>
      </div>
      <Text variant="h4"> Hola! Soy Alejandro Solá </Text>
      <Text variant="h6" justify={true}>
        <TextFile filename="/public/description.txt" />
      </Text>
    </>
  );

  const educationSection = (
    <>
      <div id="education">
        <Text variant="h2">Formación</Text>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Carousel cards={educations} />
      </div>
    </>
  );

  const experienceSection = (
    <>
      <div id="experience">
        <Text variant="h2">Experiencia</Text>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Carousel cards={experiences} />
      </div>
    </>
  );

  const contactSection = (
    <>
      <div id="contact">
        <Text variant="h2">Contacto</Text>

        <EmailForm />
      </div>
    </>
  );

  const knowledge = [
    {
      icon: <FaHtml5 />,
      color: "#e5522c",
      tooltip: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      color: "#2d53e5",
      tooltip: "CSS",
    },
    {
      icon: <FaGitAlt />,
      color: "#f35825",
      tooltip: "Git",
    },
    {
      icon: <FaTrello />,
      color: "#0884cd",
      tooltip: "Trello",
    },
    {
      icon: <SiPostgresql />,
      color: "#396c94",
      tooltip: "PostgreSQL",
    },
    {
      icon: <SiNestjs />,
      color: "#e12a54",
      tooltip: "NestJS",
    },
    {
      icon: <SiFlask />,
      color: "#000000",
      tooltip: "Flask",
    },
    {
      icon: <SiSpring />,
      color: "#6eb931",
      tooltip: "Spring",
    },
    {
      icon: <SiMongodb />,
      color: "#6fad4c",
      tooltip: "MongoDB",
    },
    {
      icon: <SiMinio />,
      color: "#c8324d",
      tooltip: "MinIO",
    },
    {
      icon: <RiNextjsFill />,
      color: "#000000",
      tooltip: "NextJS",
    },
    {
      icon: <FaAngular />,
      color: "#de0837",
      tooltip: "Angular",
    },
    {
      icon: <FaReact />,
      color: "#08d9ff",
      tooltip: "React",
    },
    {
      icon: <FaVuejs />,
      color: "#47ba87",
      tooltip: "Vue.js",
    },
    {
      icon: <FaNodeJs />,
      color: "#58a149",
      tooltip: "NodeJS",
    },
    {
      icon: <FaJs />,
      color: "#f1dc55",
      tooltip: "Javascript",
    },
    {
      icon: <FaPython />,
      color: "#3c78a8",
      tooltip: "Python",
    },
    {
      icon: <RiJavaLine />,
      color: "#dc3e16",
      tooltip: "Java",
    },
  ];

  const knowledgeSection = (
    <>
      <div id="contact">
        <Text variant="h2">Conocimientos</Text>
        <Box className="knowledge-container">
          {knowledge.map((item, index) => (
            <Tooltip key={index} title={item.tooltip}>
              <Box
                className="icon-item"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </Box>
            </Tooltip>
          ))}
        </Box>
      </div>
    </>
  );

  return (
    <main>
      <div style={{ margin: "3%" }}>
        {descriptionSection}

        <DividerLine />

        {educationSection}

        <DividerLine />

        {experienceSection}

        <DividerLine />

        {knowledgeSection}

        <DividerLine />

        {contactSection}
      </div>
    </main>
  );
}
