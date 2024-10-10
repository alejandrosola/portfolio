import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import { Grid2 as Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <main>
      <div style={{ margin: "3%" }}>
        <div style={{ marginTop: "2%" }}>
          <Text variant="h2">Desarrollador Fullstack</Text>
        </div>
        <Text variant="h4"> Hola! Soy Alejandro Solá </Text>
        <Text variant="h6" justify={true}>
          <TextFile filename="/public/description.txt" />
        </Text>
      </div>
      <div style={{ margin: "3%" }} id="contact">
        <Text variant="h2">Contacto</Text>

        <EmailForm />
      </div>
    </main>
  );
}
