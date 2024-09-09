import { CardContent, CardMedia, Card as MuiCard } from "@mui/material";
import Text from "./Text";

interface CardProps {
  imgPath?: string;
  title: string;
  subtitle?: string;
  children: any;
}

export default function Card({
  imgPath,
  title,
  subtitle,
  children,
}: CardProps) {
  return (
    <MuiCard>
      <div style={{ margin: "6%" }}>
        <Text variant="h2">{title}</Text>
        <Text variant="h5">{subtitle}</Text>
        {imgPath && (
          <div className="card-media-container">
            <CardMedia
              className="card-media"
              component="img"
              alt="green iguana"
              height="1"
              image={imgPath}
            />
          </div>
        )}
        <CardContent>
          <div style={{ marginTop: "1%" }}>{children}</div>
        </CardContent>
      </div>
    </MuiCard>
  );
}
