import React from "react";
import { Row, Col, Typography, Button } from "antd";
import style from "./style.module.css";

const { Title, Text } = Typography;

const StartTransformation = () => {
  return (
    <>
      <div className={style.content}>
        <Row>
          <Col xs={24} md={6} lg={4} style={{ textAlign: "center" }}>
            <img src="/images/cta-icon.jpg" />
          </Col>
          <Col xs={24} md={18} lg={20}>
            <Text className={style.title}>START MY TRANSFORMATION</Text> <br />
            <Text className={style.text}>
              Get that extra room you’ve always wanted and increase the value of
              your home. Get in touch today for a free estimate on your basement
              finishing / remodeling project and discover why Zenith Design +
              Build is among the best in the Des Moines Metro. Free Estimate /
              Consult by Nicholas Donlin, Owner
            </Text>
            <Row className={style.buttons}>
              <Col xs={12} md={4}>
                <Button type="primary">SCHEDULE AN ESTIMATE</Button>
              </Col>
              <Col xs={12} md={4}>
                <Button type="primary">GIVE US A CALL</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StartTransformation;
