import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col } from "antd";
import style from "./VideoSection.module.css";
class banner extends Component {
  render() {
    return (
      <div className={style.container}>
        <section id="heroVideo" className={style.heroVideo}>
          <figure className={style.figure}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={style.video}
              poster="videoThumbnail.png"
            >
              <source src="/homePageVideo.mp4" type="video/mp4" />
            </video>
          </figure>
        </section>
        <div
          className={`${style.banner} d-flex flex-column justify-content-end align-items-center`}
        >
          <Row>
            <Col xs={24} md={16} className={`${style.thinkBig}`}>
              <h1>Dare to think big. Expect bigger results.</h1>
              <p>
                Thrive in the world's largest and most established affiliate
                marketing network designed to help you achieve intelligent,
                scalable, and sustainable growth.
              </p>
            </Col>
            {/* <Col xs={24} md={8} className={`${style.stats}`}>
              <Carousel
                controls={false}
                indicators={false}
                fade={true}
                interval={3000}
              >
                <Carousel.Item>
                  <h1>141M+ Customers.</h1>
                  <p>Drive more online and offline transactions</p>
                </Carousel.Item>
                <Carousel.Item>
                  <h1>1B+ Monthly</h1>
                  <p>Reach more global customers</p>
                </Carousel.Item>
                <Carousel.Item>
                  <h1>157M Annually</h1>
                  <p>Drive more online and offline transactions</p>
                </Carousel.Item>
              </Carousel>
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}
export default banner;
