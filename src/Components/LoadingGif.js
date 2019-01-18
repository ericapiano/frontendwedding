import React from "react";
import "./LoadingGif.css";
const LoadingGif = () => {
  return (
    <div class="loadingGif">
      <img src={require("../Pages/images/loading.gif")} />;
    </div>
  );
};

export default LoadingGif;
