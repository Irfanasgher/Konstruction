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
            <Col md={{span: 20, offset: 2 }} align='center' >
                <Title level={1} style={{fontWeight: 'lighter'}}>AWARDS</Title>          
            </Col>          
            <Col md={{span: 20, offset: 2 }} style={{marginTop: '30px', marginBottom: '40px'}}>
                <Row gutter={[20, 20]} >
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                </Row>  

                <Row gutter={[20, 20]} style={{marginTop: '30px'}}>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                    <Col md={{span: 6}}>
                        <img src='/images/Award22018.jpg' height='250px' />
                    </Col>
                </Row>        
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Awards;