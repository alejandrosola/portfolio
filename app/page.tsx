import Text from "@/components/Text";
import TextFile from "@/components/TextFile";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div>
        <div style={{marginTop: "2%"}}>
          <Text variant="h1">Desarrollador Fullstack</Text>
        </div>

        <Text variant="h2"> Hola! Soy Alejandro Solá </Text>

        <Text variant="h6" justify={true}> 
          <TextFile filename="/public/description.txt"/>
        </Text>
        
        <Typography className="dark-text justify-text">
        
        </Typography>
      </div>
    </main>
  );
}
