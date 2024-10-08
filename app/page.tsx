import Text from "@/components/Text";

export default function Home() {
  return (
    <main>
      <div style={{ margin: "3%" }}>
        <div style={{ marginTop: "2%" }}>
          <Text variant="h2">Desarrollador Fullstack</Text>
        </div>

        <Text variant="h4"> Hola! Soy Alejandro Solá </Text>
        <Text variant="h6" justify={true}>
          Descripción
          {/* <TextFile filename="/public/description.txt" /> */}
        </Text>
      </div>
    </main>
  );
}
