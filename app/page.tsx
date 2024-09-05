import Text from "@/components/Text";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div>
        <div style={{marginTop: "2%"}}>
          <Text variant="h1">Desarrollador Fullstack</Text>
        </div>

        <Text variant="h2"> Hola! Soy Alejandro Solá </Text>

        <Text variant="h6" justify={true}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus, nibh faucibus fermentum aliquam, dolor nibh mollis enim, et egestas lectus orci nec dui. Nunc varius velit eu neque luctus ornare. In hac habitasse platea dictumst. Integer efficitur vestibulum pretium. Nulla elit neque, finibus eu nisi eu, efficitur condimentum lectus. Vestibulum rutrum quis risus at condimentum. Aenean pellentesque posuere ligula, vel malesuada tortor varius porta. Sed sed metus tellus. Aenean interdum ultricies orci, quis consequat est porta nec. Donec at sem sollicitudin, imperdiet elit sollicitudin, consequat mi.  </Text>
        
        <Typography className="dark-text justify-text">
        
        </Typography>
      </div>
    </main>
  );
}
