import Carousel from "@/components/Carousel";
import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import EmailForm from "@/components/EmailForm";
import DividerLine from "@/components/DividerLine";

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
      <div id="education" style={{ margin: "5%" }}>
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
      <div id="experience" style={{ margin: "5%" }}>
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

  return (
    <main>
      <div style={{ margin: "3%" }}>
        {descriptionSection}

        <DividerLine />

        {educationSection}

        <DividerLine />

        {experienceSection}

        <DividerLine />

        {contactSection}
      </div>
    </main>
  );
}
