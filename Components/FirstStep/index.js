import React from "react";
import { Row, Col, Typography, Button } from "antd";
import style from "./style.module.css";
const { Title } = Typography;

const FirstStep = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Row justify="center">
            <Title>THE FIRST STEP TOWARDS YOUR DREAM SPACE IS FREE</Title>
          </Row>
          <Row>
            <Col sm={24} md={8}>
              <Row justify="end">
                <img src="/images/book.png" alt="Book View" />
              </Row>
            </Col>
            <Col sm={24} md={10} className={style.para}>
              <p>
                Our FREE Remodeling Checklist will help you better understand
                why you want to remodel your home.
              </p>
              <p>
                Remodeling your home is a big commitment. If you’ve never done
                one before, or if you’re interested in one, you probably have
                many questions…
              </p>
              <p>
                After listening to many homeowner’s questions and concerns, we
                wanted to help eliminate the headaches and frustrations that are
                common when it comes to remodeling your home. Our FREE
                Remodeling Checklist contains the essential details to get your
                remodel started on the path of success.
              </p>
              <Button
                size="large"
                type="primary"
                style={{ fontSize: "1.1rem", fontWeight: "bold" }}
              >
                DOWNLOAD YOUR FREE REMODELING CHECKLIST
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default FirstStep;
