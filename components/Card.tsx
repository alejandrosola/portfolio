import { CardContent, CardMedia, Card as MuiCard } from "@mui/material";
import Text from "./Text";

interface CardProps {
  imgPath?: string;
  title: string;
  subtitle?: string;
  children: any;
  height: string;
  link?: string;
}

export default function Card({
  imgPath,
  title,
  subtitle,
  children,
  height,
  link,
}: CardProps) {
  function openLink(link: string): any {
    window.open(link, "_blank");
  }
  return (
    <MuiCard style={{ height: height }} className="card-container">
      <div style={{ margin: "6%" }}>
        <Text variant="h4">{title}</Text>
        <Text variant="h5">{subtitle}</Text>
        {imgPath && (
          <div className="card-media-container">
            <CardMedia
              className="card-media"
              component="img"
              height={height}
              image={imgPath}
              onClick={() => (link ? openLink(link) : {})}
              style={{ cursor: link ? "pointer" : "" }}
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
