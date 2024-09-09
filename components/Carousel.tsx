"use client";

import Slider from "react-material-ui-carousel";
import Text from "./Text";

interface CarouselProps {
  cards: any[];
}

export default function Carousel({ cards = [] }: CarouselProps) {
  return (
    <>
      <Slider className="slider-container" autoPlay={false} animation="slide">
        {cards.map((card, index) => (
          <div key={index} className="slider-item">
            <Text variant="h2">{card.title}</Text>
            <Text variant="h5">{card.subtitle}</Text>
            <Text variant="h6">{card.body}</Text>
          </div>
        ))}
      </Slider>
    </>
  );
}
