import Carousel from "@/components/Carousel";
import Text from "@/components/Text";

const educations = [
  {
    title: "Licenciatura en Informática",
    subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
    body: "Actualmente cursando el 4to año de la Licenciatura en Informática. 18 materias aprobadas, 66.67% de avance.",
  },
  {
    title: "Analista Programador Universitario",
    subtitle: "Universidad Nacional de la Patagonia San Juan Bosco",
    body: "Recibido de la carrera en marzo de 2024.",
  },
  {
    title: "CS50 - Introduction to Computer Science",
    subtitle: "Universidad de Harvard",
    body: "Curso realizado en 2020.",
  },
  {
    title: "CS50 - Introduction to Artificial Intelligence",
    subtitle: "Universidad de Harvard",
    body: "Curso realizado en 2023.",
  },
];

export default function Home() {
  return (
    <main>
      <Text variant="h1">Hola! Esto es mi formación.</Text>
      <br style={{ margin: "5%" }} />
      <Carousel cards={educations} />
    </main>
  );
}
