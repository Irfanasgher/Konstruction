import React from "react";
import style from "./style.module.css";

import Feature from "./Features";
import Portfolio from "./PortfolioGrid";
import StartTransformation from "./StartTransformation";
import PortFolioCarousel from "./PortfolioCarousel";
import Review from "./../common/Review";

import { Typography } from "antd";

const { Title } = Typography;

const ServicesModule = ({ title }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Title>{title}</Title>
          <img src="/images/Sample-img.jpg" alt="demoltion alt" width="100%" />
          <Feature />
          <Portfolio />
          <StartTransformation />
          <PortFolioCarousel />
          <div className={style.reviewContainer}>
            <Review />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesModule;
