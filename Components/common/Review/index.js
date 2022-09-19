import React, { Component } from "react";
import style from "./style.module.css";
import { Typography, Space } from "antd";

const { Text, Title } = Typography;
const Review = () => {
  return (
    <div className={style.content}>
      <Title> - WHY KONSTRUCTION? -</Title>
      <Title level={2}>CHECK OUT OUR CUSTOMER REVIEWS.</Title>

      <i>
        At Zenith Design + Build we believe building and remodeling a home is an
        experience and a process, both of which are handled with the utmost care
        to give our home owners the best experience and home their budget
        allows. We enjoy working with discerning clients, people for whom
        quality, service, integrity and aesthetics matter deeply. Serving the
        Des Moines Metro.
      </i>
      <p>- CLAIRE, WEST DES MOINES</p>
    </div>
  );
};

export default Review;
