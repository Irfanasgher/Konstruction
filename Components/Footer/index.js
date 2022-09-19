import React, { Component } from "react";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import style from "./style.module.css";
const { Title } = Typography;
// import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <Row className={style.container} align="bottom">
        <Col span={24}>
          <Row justify="center" align="middle">
            <Col sm={12} md={6}>
              <Title style={{ color: "white" }}>KONSTRUCTION</Title>
            </Col>
            <Col sm={12} md={6} className={style.col}>
              <ul>
                <li>
                  <a href="#work">How it works</a>
                </li>
                <li>
                  <a href="mailto:contact@mixrre.com">Contact</a>
                </li>
                <li>
                  <a href={"/"}>Download</a>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={style.col}>
              <ul>
                <li>Blog</li>
                <li>Terms of Services</li>
              </ul>
            </Col>
            <Col sm={12} md={6} className={style.col}>
              <ul>
                <li>contact@konstruction.com</li>
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
              </ul>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center" align="bottom">
            <p>Copyright &copy; 2020 KONSTRUCTION. All rights reserved.</p>
          </Row>
        </Col>
      </Row>
    );
  }
}
export default Footer;
