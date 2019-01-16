import React, { Component } from "react";
import perfectImg from "../images/perfect.png";

import "./registry.css";
// import dogpic from "./images/pups.jpg";

// const styles = {
//   cursive: {
//     // backgroundImage: `url(${dogpic})`,
//     // backgroundSize: "cover",
//     // backgroundPosition: "center",
//     // backgroundBlendMode: "multiply",
//     // // backgroundColor: "red",
//     // color: "white",
//     // textShadow: "0 0 10px black",
//     // minHeight: "45vh"
//   }
// };

class Registry extends Component {
  state = {};
  // shoppingSites = [
  //   {
  //     name:"potteryBarn",
  //     linkURL:"",
  //     imageURL""
  //   }
  // ]
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">Thank You Kindly</h1>
          {/* <p>Looking to meet your next best friend?</p> */}
          <p>
            <img
              src={perfectImg}
              alt="Notice! This service is temporarily out of order."
            />
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <section class="cards">
                <article>
                  <img
                    class="article-img"
                    src="https://jobapplications.net/wp-content/uploads/bloomingdales-logo.png"
                    alt="Bloomingdales"
                  />
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="https://www.bloomingdales.com/"
                    >
                      SHOP
                    </a>
                  </div>{" "}
                </article>
                <article>
                  <img
                    class="article-img"
                    src="https://g.foolcdn.com/art/companylogos/square/BBBY.png"
                    alt="Bed Bath and Beyond"
                  />
                  {/* <h1 class="article-title">Title of article</h1> */}
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="https://www.bedbathandbeyond.com/"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
                <article>
                  <img
                    class="article-img"
                    src="https://pmcdeadline2.files.wordpress.com/2015/08/amazon-featured-image.jpg?w=446&h=299&crop=1"
                    alt="Amazon"
                  />
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="https://www.amazon.com/"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
