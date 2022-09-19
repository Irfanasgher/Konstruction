import React from "react";
import style from "./style.module.css";
import { Row, Col, Typography, Form, Input, Button } from "antd";
const { TextArea } = Input;
// import ScrollAnimation from "react-animate-on-scroll";
const { Title, Text } = Typography;

import {
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
  } from "@ant-design/icons";

const Detail = () => {
  return (
    <>
      <div >
        <Row style={{marginTop: '50px', marginBottom: '50px', padding: '20px'}}> 
            <Col md={{ span: 9, offset: 2 }} >
                <Title level={1} style={{fontWeight: 'lighter'}}>CONTACT ZENITH DESIGN + BUILD</Title>            
                <Title level={2} >PHONE <br/> <span style={{fontWeight: 'lighter', textDecoration: 'underline'}}>(515) 518-0237</span></Title>            
                <Title level={2} >ADDRESS <br/> <span style={{fontWeight: 'lighter', textDecoration: 'underline'}}>1961 GRAND AVENUE <br/>WEST DES MOINES, IA 50265</span></Title>    
                <Title level={2} >SOCIAL</Title>
                <div className={style.icons}>
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    <FacebookFilled className={style.icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    <TwitterSquareFilled className={style.icon} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    <InstagramFilled className={style.icon} />
                  </a>
                </div> 
                <div style={{marginTop: '30px'}}>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1_wV22amgac2Wt4gvMqstKu57Fg0" width="100%" height="480"></iframe>    
                </div>   
            </Col> 

            <Col md={{ span: 9, offset: 2 }} >
                <Title level={2} className={style.started}>LET’S GET STARTED ON YOUR REMODEL  OR CUSTOM HOME BUILD! SEND A MESSAGE BELOW FOR A FREE ESTIMATE  FROM NICHOLAS DONLIN, OWNER.</Title>
                <Row>
                    {/* <Col md={{span: 24}}>
                        <h2 style={{display: 'block'}}>Name *</h2>
                    </Col> */}
                    <br />
                    <Col md={{span: 11}}>
                        <h2 >Name *</h2>
                        <Input  allowClear  />
                        <br />
                        <Form.Item
                            name="nickname"
                            label="First Name"
                        >
                        </Form.Item>
                    </Col>
                    <Col md={{span: 11, offset: 2}}>
                        
                        <h2 style={{visibility: 'hidden'}}>Name *</h2>
                        <Input  allowClear  />
                        <br />
                        <Form.Item
                            name="nickname"
                            label="Last Name"
                        >
                        </Form.Item>
                    </Col>
                    <Col md={{span: 24}}>
                        <h2>Phone *</h2>

                        <Row gutter={[20]}>
                            <Col md={{span: 5}}>
                                <Input  allowClear  />
                                <br />
                                <Form.Item
                                    name="nickname"
                                    label="(###)"                            
                                >
                                </Form.Item>
                            </Col>
                            <Col md={{span: 5}}>
                                <Input  allowClear  />
                                <br />
                                <Form.Item
                                    name="nickname"
                                    label="###"                            
                                >
                                </Form.Item>
                            </Col>
                            <Col md={{span: 5}}>
                                <Input  allowClear  />
                                <br />
                                <Form.Item
                                    name="nickname"
                                    label="###"                            
                                >
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{span: 24}}>
                        <h2>Email Address *</h2>                                                                       
                        <Input  allowClear  />
                    </Col>

                    <Col md={{span: 24}} style={{marginTop: '30px'}}>
                        <h2>Message *</h2>                                                
                        <TextArea  rows={6}/>
                    </Col>
                </Row>
                <Col md={{span: 24}} style={{marginTop: '30px'}}>
                    <Button type="primary" >
                        SEND MESSAGE
                    </Button>
                </Col>
                
            </Col>
        </Row>
      </div>
    </>
  );
};

export default Detail;
