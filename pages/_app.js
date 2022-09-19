import React from "react";
import App from "next/app";

import "../styles/antd.less";
// import "animate.css/animate.min.css";
import "../styles/globals.css";

import AOS from "aos";
import "aos/dist/aos.css";

class MyApp extends App {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} />
        <style jsx="true" global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;523;600;700;800&display=swap");

          body {
            margin: 0;
            font-family: "Roboto", sans-serif;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default MyApp;
