"use client";

import Slider from "react-material-ui-carousel";
import Card from "./Card";
import Text from "./Text";

interface CarouselProps {
  cards: any[];
}

export default function Carousel({ cards = [] }: CarouselProps) {
  return (
    <>
      <Slider
        className="slider-container"
        autoPlay={false}
        animation="slide"
        fullHeightHover
        sx={{ height: "50%", width: "50%", justifyItems: "center" }}
      >
        {cards.map((card, index) => (
          <div key={index} className="slider-item">
            <Card
              title={card.title}
              subtitle={card.subtitle}
              imgPath={card.imgPath}
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
