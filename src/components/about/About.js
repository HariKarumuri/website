import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg1 py-3 about vh-100">
      <div className="container ">
        <h6 className="text-white text-center" id="about">
          About Me
        </h6>
        <h4 className="greenFont ">My Skills</h4>
        <div className="row">
          <div className="col-7 d-flex flex-column justify-content-center ">
            <p className="text-white">Programmig languages</p>

            <ul>
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>html</li>
              <li>css</li>
              <li>python</li>
            </ul>
          </div>
          <div className="col ">
            <p className="text-white">frameWorks</p>
            <ul>
              <li>React js</li>
              <li>node js</li>
              <li>bootstrap</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
