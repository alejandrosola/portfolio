import Carousel from "@/components/Carousel";
import Text from "@/components/Text";

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

export default function Home() {
  return (
    <main>
      <div style={{ margin: "5%" }}>
        <Text variant="h1">Formación</Text>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Carousel cards={educations} />
      </div>
    </main>
  );
}
