import React, { Component } from "react";

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
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justify-content-center"
          // style={styles.cursive}
        >
          <h1 className="display-4">Thank You Kindly</h1>
          {/* <p>Looking to meet your next best friend?</p> */}
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <section class="cards">
                <article>
                  <img
                    class="article-img"
                    src="https://res-3.cloudinary.com/westfielddg/image/fetch/c_pad,f_auto,q_auto/http://res.cloudinary.com/westfielddg/image/upload/tt1r9fjzpsjcgsqget90.png"
                    alt=" "
                  />
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="www.sephora.com"
                    >
                      SHOP
                    </a>
                  </div>{" "}
                </article>
                <article>
                  <img
                    class="article-img"
                    src="https://vignette.wikia.nocookie.net/malls/images/8/8c/Bloomingdale%27s_.jpg/revision/latest?cb=20170601143226"
                    alt=" "
                  />
                  {/* <h1 class="article-title">Title of article</h1> */}
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="www.sephora.com"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
                <article>
                  <img
                    class="article-img"
                    src="https://pmcdeadline2.files.wordpress.com/2015/08/amazon-featured-image.jpg?w=446&h=299&crop=1"
                    alt=" "
                  />
                  <div id="browse_app">
                    <a
                      class="btn btn-large btn-info shopbtn"
                      href="www.sephora.com"
                    >
                      SHOP
                    </a>
                  </div>
                </article>
                {/* <article>
                  <img
                    class="article-img"
                    src="http://placekitten.com/280/250"
                    alt=" "
                  />
                  <h1 class="article-title">Title of article</h1>
                </article>
                <article>
                  <img
                    class="article-img"
                    src="http://placekitten.com/310/210"
                    alt=" "
                  />
                  <h1 class="article-title">Title of article</h1>
                </article>
                <article>
                  <img
                    class="article-img"
                    src="http://placekitten.com/430/240"
                    alt=" "
                  />
                  <h1 class="article-title">Title of article</h1>
                </article> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registry;
