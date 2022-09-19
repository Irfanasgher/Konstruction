import React from "react";
import style from "./style.module.css";
import { Typography, Carousel } from "antd";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { Carousel } from "react-responsive-carousel";

const { Title, Text } = Typography;

const PortFolioCarousel = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <>
      <div className={style.container}>
        <Text className={style.title}>- BASEMENT FINISHING PORTFOLIO -</Text>
        <Carousel autoplay>
          <div style={{ height: "70vh", overflow: "hidden" }}>
            <img src="images/slider1.jpg" width="100%" />
          </div>
          <div style={{ height: "70vh", overflow: "hidden" }}>
            <img src="images/slider2.jpg" width="100%" />
          </div>
          <div style={{ height: "70vh", overflow: "hidden" }}>
            <img src="images/slider3.jpg" width="100%" />
          </div>
          <div style={{ height: "70vh", overflow: "hidden" }}>
            <img src="images/slider1.jpg" width="100%" />
          </div>
          <div style={{ height: "70vh", overflow: "hidden" }}>
            <img src="images/slider2.jpg" width="100%" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default PortFolioCarousel;
