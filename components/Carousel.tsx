"use client";

import Slider from "react-material-ui-carousel";
import Card from "./Card";
import Text from "./Text";

import { useMediaQuery, useTheme } from "@mui/material";

interface CarouselProps {
  cards: any[];
  autoplay?: boolean;
}

export default function Carousel({
  cards = [],
  autoplay = false,
}: CarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Slider
        autoPlay={autoplay}
        animation="slide"
        fullHeightHover
        navButtonsAlwaysVisible
        sx={{
          height: "50%",
          width: { md: "50%", xs: "90%" },
          justifyItems: "center",
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="slider-item">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              imgPath={card.imgPath}
              height={isMobile ? "550px" : "450px"}
            >
              <div>
                <Text variant="h6">{card.body}</Text>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </>
  );
}
