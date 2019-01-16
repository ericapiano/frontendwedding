import React, { Component } from "react";

import "./homepage.css";

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
          <br />
          <Countdown className="counter" date={`${year}-06-20T00:00:00`} />

          {/* <p>Looking to meet your next best friend?</p> */}
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              {/* <p>Looking to meet your next best friend?</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
