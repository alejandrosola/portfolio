import Carousel from "@/components/Carousel";
import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import EmailForm from "@/components/EmailForm";
import DividerLine from "@/components/DividerLine";
import { Box, Tooltip } from "@mui/material";
import Timeline from "@/components/Timeline";
import stack from "./utils/stackIcons";
import RoundIcon from "@/components/RoundIcon";

export default function Home() {
  const educations = [
    {
      title: "Licenciatura en Informática",
      subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
      body: "Actualmente cursando el 4to año de la Licenciatura en Informática. 18 materias aprobadas, 66.67% de avance.",
      imgPath: "/unpsjb.png",
      link: "https://www.unp.edu.ar/ingenieria/index.php/es/?view=article&id=381:licenciatura-en-informatica&catid=70:carreras-contenido",
    },
    {
      title: "Analista Programador Universitario",
      subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
      body: "Recibido de la carrera en marzo de 2024.",
      imgPath: "/unpsjb.png",
      link: "https://www.unp.edu.ar/ingenieria/index.php/es/?view=article&id=380:analista-programador-universitario&catid=70:carreras-contenido",
    },
    {
      title: "CS50 - Introduction to Computer Science",
      subtitle: "Universidad de Harvard",
      body: "Curso realizado en 2020.",
      imgPath: "/cs50.png",
      link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
    },
    {
      title: "CS50 - Introduction to Artificial Intelligence",
      subtitle: "Universidad de Harvard",
      body: "Curso realizado en 2023.",
      imgPath: "/cs50.png",
      link: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
    },
  ];

  /* Maquetado de paginas web mediante el uso de Wordpress. (DIVI, Elementor, Woocomerce). Maquetado responsive de Sitios web. 
  (HTML, CSS, Javascript,Bootstrap, React.js, Tailwind.css). Uso de Git/GitLab. Maquetado de email marketing. */

  const experiences = [
    {
      title: "Desarrollador fullstack - MIC",
      subtitle: "Pasantía remunerada - CAMAD",
      time: "Agosto 2023 - Diciembre 2023",
      body: "MIC - Mapa Interactivo Cultural es una app para que la cultura, el deporte y el turismo esté en tus manos en un sólo lugar, promoviendo los consumos culturales de tu ciudad.",
      stack: [
        "NextJS",
        "NestJS",
        "Javascript",
        "Typescript",
        "PostgreSQL",
        "MinIO",
        "Git",
        "Scrum",
      ],
      imgPath: "/mic.png",
      link: "https://mapainteractivocultural.ar",
    },
    {
      title: "Desarrollador fullstack - CVA Gaming",
      time: "Marzo 2024 - Septiembre 2024",
      subtitle: "Desarrollador Fullstack",
      body: "CVA Gaming es una plataforma web de apuestas online. Desarrollada  con Flask, Vue y MongoDB",
      stack: ["Flask", "Vue", "Python", "Javascript", "Mongodb", "Git"],
      imgPath: "/cva.png",
      link: "https://cvagaming.com.ar",
    },
    {
      title: "Auxiliar alumno",
      time: "Septiembre 2023 - Actualidad",
      subtitle:
        "Programación Orientada a Objetos - Licenciatura en informática",
      body: "Auxiliar alumno en la materia Programación Orientada a Objetos dictada en el segundo año de la Licenciatura en informática",
      stack: ["Java", "Git"],
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
        <Timeline items={experiences} />
        {/* <Carousel cards={experiences} /> */}
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
      icon: stack["nextjs"].icon,
      color: stack["nextjs"].color,
      tooltip: stack["nextjs"].tooltip,
    },
    {
      icon: stack["nestjs"].icon,
      color: stack["nestjs"].color,
      tooltip: stack["nestjs"].tooltip,
    },
    {
      icon: stack["java"].icon,
      color: stack["java"].color,
      tooltip: stack["java"].tooltip,
    },
    {
      icon: stack["html"].icon,
      color: stack["html"].color,
      tooltip: stack["html"].tooltip,
    },
    {
      icon: stack["css"].icon,
      color: stack["css"].color,
      tooltip: stack["css"].tooltip,
    },
    {
      icon: stack["git"].icon,
      color: stack["git"].color,
      tooltip: stack["git"].tooltip,
    },
    {
      icon: stack["scrum"].icon,
      color: stack["scrum"].color,
      tooltip: stack["scrum"].tooltip,
    },
    {
      icon: stack["postgresql"].icon,
      color: stack["postgresql"].color,
      tooltip: stack["postgresql"].tooltip,
    },
    {
      icon: stack["flask"].icon,
      color: stack["flask"].color,
      tooltip: stack["flask"].tooltip,
    },
    {
      icon: stack["spring"].icon,
      color: stack["spring"].color,
      tooltip: stack["spring"].tooltip,
    },
    {
      icon: stack["mongodb"].icon,
      color: stack["mongodb"].color,
      tooltip: stack["mongodb"].tooltip,
    },
    {
      icon: stack["minio"].icon,
      color: stack["minio"].color,
      tooltip: stack["minio"].tooltip,
    },
    {
      icon: stack["angular"].icon,
      color: stack["angular"].color,
      tooltip: stack["angular"].tooltip,
    },
    {
      icon: stack["react"].icon,
      color: stack["react"].color,
      tooltip: stack["react"].tooltip,
    },
    {
      icon: stack["vue"].icon,
      color: stack["vue"].color,
      tooltip: stack["vue"].tooltip,
    },
    {
      icon: stack["nodejs"].icon,
      color: stack["nodejs"].color,
      tooltip: stack["nodejs"].tooltip,
    },
    {
      icon: stack["javascript"].icon,
      color: stack["javascript"].color,
      tooltip: stack["javascript"].tooltip,
    },
    {
      icon: stack["python"].icon,
      color: stack["javascript"].color,
      tooltip: stack["javascript"].tooltip,
    },
  ];

  const knowledgeSection = (
    <>
      <div id="contact">
        <Text variant="h2">Conocimientos</Text>
        <Box className="knowledge-container">
          {knowledge.map((item, index) => (
            <RoundIcon key={index} item={item} />
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
