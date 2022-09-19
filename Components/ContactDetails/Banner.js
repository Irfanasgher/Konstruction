import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const Banner = () => {
  return (
    <>
      <div >
        <Row className={style.bannerimage} >          
          <Col sm={24} md={18} >
            <Title level={1} style={{color: 'white', fontWeight: 'lighter'}}>CONTACT</Title>            
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Banner;
