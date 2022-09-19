import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const WhoWeAre = () => {
  return (
    <>
      <div >
        <Row  style={{padding: '20px'}}>          
          <Col md={{span: 20, offset: 2 }} >
              <Col md={{span: 12}} style={{marginTop: '50px'}}>
                  <img src='images/Zenith-Photoshoot-51.jpg' height='450px' className={style.image} />
              </Col>
            <Title level={1} className={style.who}>WHO WE ARE</Title>            
          </Col>

          <Col md={{span: 20, offset: 2 }} >
            <Title level={2} style={{fontWeight: 'lighter', marginTop: '40px'}}>ZENITH IS A DESIGN-BUILD COMPANY BASED IN WEST DES MOINES, IOWA.  </Title>            
            <Title level={4} style={{fontWeight: 'lighter', marginTop: '30px'}}>At Zenith Design + Build we believe a remodel or building a home is an experience and a process, both of which are handled with the utmost care to give our home owners the best experience and home their budget allows. We enjoy working with discerning clients, people for whom quality, service, integrity and aesthetics matter deeply.  </Title>            
            <Title level={4} style={{fontWeight: 'lighter', marginTop: '20px'}}>We appreciate architecture and design as much as we care about materials and craftsmanship. We enjoy helping our clients shape their dream home, one that enables them to experience a life enriched: aesthetically, functionally, and energetically. </Title>            
            <Title level={4} style={{fontWeight: 'lighter', marginTop: '20px', textDecoration: 'underline'}}>The Zenith Experience</Title>            
            <Title level={4} style={{fontWeight: 'lighter', marginTop: '-10px'}}>
                -Innovative, Functional Design <br />
                -Daily Clean Up <br />
                -Thorough Communication <br />
                -On Budget & On Time  <br />
                -Attention to Detail <br />
                -Exceeded Expectations <br />
                -5 Year Warranty 
            </Title>            
            <Title level={4} style={{fontWeight: 'lighter'}}>The BEST home improvement experience you’ve ever had! </Title>
          </Col>

          <Col md={{span: 20, offset: 2 }} style={{marginTop: '20px', marginBottom: '20px'}}>
              <hr />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhoWeAre;
