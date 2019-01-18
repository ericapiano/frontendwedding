import React, { Component } from "react";
import "./aboutparty.css";
import perfectImg from "../images/perfect.png";
import bride from "../images/bride.png";
import groom from "../images/groom.png";

import { Container, Row, Col } from "reactstrap";

class AboutParty extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">We couldn't do it without you</h1>

          <p>
            <img src={perfectImg} alt="sorry, image not found." />
          </p>
        </div>

        <div>
          <Container />
          <Row className="row">
            <Col className="column" xs="6">
              <p>
                <img
                  className="weddingParty"
                  src={bride}
                  alt="sorry, image not found."
                />
              </p>

              <img
                className="partyPic"
                src="https://image.shutterstock.com/mosaic_250/2967241/657764164/stock-photo-portrait-of-beautiful-redhead-girl-smiling-looking-at-camera-657764164.jpg"
                alt="Maid of Honor"
              />

              <img
                className="partyPic"
                src="https://createherstock.com/wp-content/uploads/2018/05/createherstock-downtown-isha-gaines-40-640x360.jpg"
                alt="Bridesmaid"
              />

              <img
                className="partyPic"
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&h=350"
                alt="Bridesmaid"
              />

              <img
                className="partyPic"
                src="https://image.shutterstock.com/image-photo/portrait-smiling-young-black-woman-260nw-562454995.jpg"
                alt="Bridesmaid"
              />
            </Col>
            <Col className="column" xs="6">
              <p>
                <img
                  className="weddingParty"
                  src={groom}
                  alt="sorry, image not found."
                />
              </p>

              <img
                className="partyPic"
                src="https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA="
                alt="Best Man"
              />

              <img
                className="partyPic"
                src="https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?k=6&m=544358094&s=612x612&w=0&h=Z4tSUuw-aZyxXqwvBgi9j0O3QZzQzcpJVCm6nulS1kw="
                alt="Groomsman"
              />

              <img
                className="partyPic"
                src="https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id613557584?k=6&m=613557584&s=612x612&w=0&h=QmWtAj6dSDCAUFDRg1Dix3Cr90GeUjEVmF3KTnSFXwY="
                alt="Groomsman"
              />

              <img
                className="partyPic"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcNiV3Ri3UJbB1WMc7QavbylTC-6xllP3oRD25usnm73LJCC8"
                alt="Groomsman"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutParty;
