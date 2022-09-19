import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const WhoItAllStarted = () => {
  return (
    <>
      <div >
        <Row style={{padding: '20px'}}>          
          <Col md={{span: 20, offset: 2 }} >
              <Col md={{span: 12}}>
                  <img src='images/Zenith-Photoshoot-22.jpg' height='450px' className={style.image} />
              </Col>
            <Title level={1} className={style.whoAll}>Who It All Started</Title>            
          </Col>

          <Col md={{span: 20, offset: 2 }} >
              <Title level={4} style={{fontWeight: 'lighter', marginTop: '40px'}}>Zenith Design + Build was started by Nicholas Donlin, an Iowa native and graduate of the Construction Engineering program at Iowa State University. Nicholas started the company because he couldn’t shake the vision of wanting to see a better approach to construction and design. He was tired of hearing a negative response to contracting projects in the remodeling business, and wanted to do something about it. Zenith has since won several awards for innovative work and has added team members who share this passion. </Title>            
          </Col>

          <Col md={{span: 20, offset: 2 }} style={{marginTop: '20px', marginBottom: '20px'}}>
              <hr />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhoItAllStarted;
