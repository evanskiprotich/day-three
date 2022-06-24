import React from "react";
import skills from "../skills";
import "../App.css";

function Skills() {
  return (
    <div className="timeline" style={{ display: "inlineBlock" }}>
      <h1>Skills</h1>
      <ul className="batch line-row">
        {skills.map((skill) => (
          <li className="success" key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <p className="para">🕑 Joined on June 24, 2022</p>
    </div>
  );
}

export default Skills;
