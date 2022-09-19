import React, { useState, useEffect } from "react";
import { Card, Typography, Row, Col, Button } from "antd";
import style from "./style.module.css";
import { Data } from "./data";
const { Meta } = Card;
const { Title, Text } = Typography;

const FeaturedProjects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Title>
          <span>__ </span>FEATURED PROJECTS <span>__ </span>
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
                    textAlign: "center",
                  }}
                >
                  <img src={item.img} className={style.img} alt="alt" />
                  <Meta className={style.title} description={item.name} />
                </Card>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeaturedProjects;
