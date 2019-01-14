import React, { Component } from "react";
import "./rsvp.css";

class RSVP extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">Répondez S'il Vous Plaît</h1>

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

export default RSVP;
