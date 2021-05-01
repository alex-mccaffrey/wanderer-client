import React from "react";
import "./NotFound.css";

const NotFound = (props) => {
  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    setInterval(createStar, 100);
    function createStar() {
      var right = Math.random() * 500;
      var top = Math.random() * window.innerHeight;
      var star = document.createElement("div");
      star.classList.add("star");
      body.appendChild(star);
      setInterval(runStar, 10);
      star.style.top = top + "px";
      function runStar() {
        if (right >= window.innerWidth) {
          star.remove();
        }
        right += 3;
        star.style.right = right + "px";
      }
    }
  });

  return (
    <div className="text">
      <h1>404</h1>
      <hr />
        <div>Page Not Found</div>
        <div className="astronaut">
          <img
            src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
            alt=""
            className="src"
          />
        </div>
    </div>
  )
}

export default NotFound;
