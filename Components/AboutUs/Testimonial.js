import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography } from "antd";
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

const Testimonial = () => {
  return (
    <>
      <div >
        <Row style={{padding: '20px'}}>          
          <Col md={{span: 20, offset: 2 }} align='center' >
                <Title level={1} style={{fontWeight: 'lighter'}}>TESTIMONIALS</Title>          
          </Col>

          <Col md={{span: 20, offset: 2 }} style={{marginTop: '30px'}}>
              <Row>
                  <Col md={{span: 12}}>
                    <img src='images/Zenith-Photoshoot-22.jpg' height='350px' className={style.image} />
                  </Col>
                  <Col md={{span: 12}} style={{marginTop: '40px'}}>
                    <Title level={4} style={{fontWeight: 'lighter' }}>“It was clear you were the most unique and different bid we had. All the other bids were pretty standard decking concepts, nothing particularly unique about it. We liked your design and we felt like it went well with the aesthetic of our house. We were excited we found something so unique.”</Title>            
                    <Title level={4} style={{fontWeight: 'lighter'}}> — ANDREA, DES MOINES</Title>            
                  </Col>
              </Row>
              <Title level={4} style={{fontWeight: 'lighter', marginTop: '40px'}}>“Nicholas did a great job helping us understand the true cost for a complete basement remodel. We had open communication throughout the entire process and he was able to take our vision and create an unbelieveable space for my family and I.” </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>— STEVE, WINDSOR HEIGHTS </Title> 

               <Title level={4} style={{fontWeight: 'lighter', marginTop: '40px'}}>“I worked with Kelly from Zenith Design + Build and she was incredibly helpful and responsive! I had a crazy question regarding a house that Nicholas completely rehabbed south of grand based on the pictures I had seen of his work that were online. Kelly was able to follow up with me extremely quickly by returning my call and sent follow up texts with the answers to my question! You can tell they are a great team that communicates well with the customer!!!” </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>— CLAIRE, WEST DES MOINES </Title> 

               <Title level={4} style={{fontWeight: 'lighter', marginTop: '40px'}}>“Nicholas is a top notch builder who takes time with my clients to explain the building process. He listens first, gives great suggestions, and then goes beyond expectations with his work. He and his team truly construct quality homes....I would highly recommend!” </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>— BETH, PELLA </Title> 

               <Title level={4} style={{fontWeight: 'lighter', marginTop: '40px'}}>“Nicholas Donlin with Zenith Design + Build is, in one word, astonishing!</Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>From the consultation, to the design work, and finally the remodeling, Nicholas chases down each task with energy unmatched by others. His enthusiasm seems to generate new ideas each time he visits a project, and he’s always quick to correct something if it could be made better. </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>Zenith Design + Build has earned award after award here in Des Moines for their breath taking work! The tours are always exciting! </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>Thank you for your contributions to the community, Nicholas and the team!” </Title>            
              <Title level={4} style={{fontWeight: 'lighter'}}>— GRANT, DES MOINES </Title>            
          </Col>

          <Col md={{span: 20, offset: 2 }} style={{marginTop: '20px', marginBottom: '20px'}}>
              <hr />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonial;
