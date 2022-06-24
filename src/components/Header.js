import React from "react";
import evansImg from "../images/IMG_2984p-min.jpg";
import "../App.css";

function Header() {
  return (
    <div>
      <img
        src={evansImg}
        alt="evans"
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          overflow: "hidden",
          borderWidth: 3,
        }}
      />
      <h1>
        Evans Kiprotich <span className="emoji">✔</span>
      </h1>
      <p>Full Stack Web Developer | Nairobi</p>
    </div>
  );
}

export default Header;
