import React, { Component } from "react";

import "./homepage.css";
import perfectImg from "../images/perfect.png";
import Countdown from "../../Countdown.js";

class Homepage extends Component {
  state = {};
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();

    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center">
          <h1 className="display-4">Jack and Jill</h1>
          {/* <br /> */}

          <p>
            <img src={perfectImg} alt="sorry, image not found." />
          </p>
          <p className="date">June 22, 2019</p>
          <Countdown className="counter" date={`${year}-06-22T17:00:00`} />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
