import React, { useState, useEffect } from "react";
import { Card, Typography, Row, Col, Button } from "antd";
import { Data } from "./data";
import style from "./style.module.css";
const { Meta } = Card;
const { Title, Text } = Typography;

const WhatWeDo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Title>
            <span>__ </span>WHAT WE DO? <span>__ </span>
          </Title>

          <Row>
            {data.map((item, index) => (
              <Col key={index} sm={24} md={12} lg={8}>
                <Row justify="center">
                  <Card
                    bordered={false}
                    style={{
                      maxWidth: 550,
                      maxHeight: 600,
                      backgroundColor: "#e8e8e8",
                      textAlign: "left",
                    }}
                  >
                    <img src={item.img} className={style.img} alt="alt" />
                    <Title>{item.name}</Title>
                    <p>{item.desc}</p>
                    <Button size="large" type="primary">
                      Read More
                    </Button>
                  </Card>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
export default WhatWeDo;
