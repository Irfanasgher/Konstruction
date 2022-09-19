import React, { Component } from "react";
import style from "./Quality.module.css";
class Content extends Component {
  state = {};
  render() {
    return (
      <div className={style.container} text-center>
        <div className={style.content}>
          <h1>QUALITY BUILT. INSPIRED DESIGN. EXEMPLARY SERVICE</h1>
          <h3>CREATING THE BEST REMODELING AND HOME BUILDING EXPERIENCE.</h3>

          <p>
            At Zenith Design + Build we believe building and remodeling a home
            is an experience and a process, both of which are handled with the
            utmost care to give our home owners the best experience and home
            their budget allows. We enjoy working with discerning clients,
            people for whom quality, service, integrity and aesthetics matter
            deeply. Serving the Des Moines Metro.
          </p>
          <br></br>
          <br></br>
          <h3>REMODELING TRANSFORMATIONS &amp; CUSTOM HOME BUILDING</h3>
          <p>
            Your local home remodeling &amp; building contractor for life. From
            exterior to interior and everything in between.
          </p>
        </div>
      </div>
    );
  }
}

export default Content;
