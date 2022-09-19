import React from "react";
import style from "./style.module.css";
import { Row, Col, Card, Typography } from "antd";

const { Meta } = Card;
const { Title, Text } = Typography;
const PortfolioGrid = () => {
  let data = [
    {
      img: "/images/sample1.jpg",
      title: "Entertain",
    },
    {
      img: "/images/sample2.jpg",
      title: "Powder Your Nose",
    },
    {
      img: "/images/sample3.jpg",
      title: "Get Fit",
    },
    {
      img: "/images/sample4.jpg",
      title: "Relax",
    },
    {
      img: "/images/sample5.jpg",
      title: "Display & Admire",
    },
    {
      img: "/images/sample6.jpg",
      title: "Organize",
    },
  ];
  return (
    <>
      <div className={style.content}>
        <Row>
          {data.map((item) => (
            <Col xs={24} md={12} lg={8}>
              <Card
                bordered={false}
                style={{
                  maxWidth: 550,
                  maxHeight: 600,
                  textAlign: "center",
                }}
              >
                <img src={item.img} className={style.img} alt="alt" />
                <Text className={style.title}>{item.title}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default PortfolioGrid;
