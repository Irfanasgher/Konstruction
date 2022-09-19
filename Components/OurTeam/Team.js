import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const Awards = () => {
  return (
    <>
      <div >
        <Row  style={{padding: '20px'}}>
            <Col md={{span: 20, offset: 2 }} align='center' style={{marginTop: '30px'}}>
                <Title level={1} style={{fontWeight: 'lighter'}}>OUR TEAM</Title>          
            </Col>          
            <Col md={{span: 20, offset: 2 }} style={{marginTop: '30px', marginBottom: '40px'}}>
                <Row gutter={[20, 20]} >
                    <Col md={{span: 6}}>
                        <img src='/images/images (1).jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/team-member-3.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/images.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Team-memeber-13.png' height='250px' />
                    </Col>
                </Row>  

                <Row gutter={[20, 20]} style={{marginTop: '30px'}}>
                <Col md={{span: 6}}>
                        <img src='/images/images (1).jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/team-member-3.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/images.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Team-memeber-13.png' height='250px' />
                    </Col>
                </Row>        
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Awards;