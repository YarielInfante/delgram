import React from "react";
import { Image } from "semantic-ui-react";
import Carousel from "semantic-ui-carousel-react";

const ImageCarousel = () => {
  const elements = [
    {
      render: () => {
        return <Image size="medium" src="https://picsum.photos/300/500" />;
      },
    },
    {
      render: () => {
        return <Image src="https://picsum.photos/300/500" />;
      },
    },
    {
      render: () => {
        return <Image src="https://picsum.photos/300/500" />;
      },
    },
  ];

  return (
    <div style={{ width: 250 }}>
      <Carousel
        elements={elements}
        duration={3000}
        animation="fade"
        showNextPrev={false}
        showIndicators={false}
      />
    </div>
  );
};

export default ImageCarousel;
