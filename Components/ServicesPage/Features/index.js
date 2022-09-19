import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const Features = () => {
  return (
    <>
      <div className={style.content}>
        {/* <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft"> */}
        <Row gutter={[10, 30]}>
          <Col sm={24} md={4} style={{ textAlign: "center" }}>
            <img src="/images/check-bubble.png" alt="check bubble" />
          </Col>
          <Col sm={24} md={18}>
            <Title level={2}>
              EXPAND YOUR LIVING SPACE BY FINISHING YOUR BASEMENT
            </Title>
            <Text className={style.para}>
              If you’re in need of more living space, finishing your basement is
              an excellent way to increase the size of your home. Add an
              additional bedroom, bathroom, bar, play area, or home theater.
            </Text>
          </Col>
        </Row>
        {/* </ScrollAnimation> */}

        <Row gutter={[10, 30]}>
          <Col sm={24} md={4} style={{ textAlign: "center" }}>
            <img src="/images/info-bubble.png" alt="info bubble" />
          </Col>
          <Col sm={24} md={18}>
            <Title level={2}>BASEMENTREMODELING IS A GOOD INVESTMENT</Title>
            <Text className={style.para}>
              According to Remodeling Magazine, finishing your basement can
              bring a 70% return on investment. For example, if you spent
              $40,000 on improvements, it would increase the value of the
              property by about $28,000, which is more than what any other home
              improvement delivers. According to Nerdwallet (and Zenith), expect
              to spend 15-20% of your home value on finishing your basement.
            </Text>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
