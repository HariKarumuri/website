import React from "react";
import "./Header.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import image1 from './image1.png'

const Header = () => {
  return (
    <div className="bg2" id="home">
      <div className="container  ">
        <div className="row text-capitalize viewCont ">
          <div className="col-8 d-flex flex-column NameClass ">
            <h3>
              <span className="fs-5">Hey There!! I am</span> <br />
              <span className="fs-1 greenFont ">Hari Karumuri</span>
              <br />
              <span className="fs-3">
                <Typewriter
                  words={[
                    "Coder",
                    "Developer",
                    "Gamer",
                    "3D-Artist",
                    "Student",
                    "Desginer",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <p>
            I'm a student at Jain University, pursuing AI in CSE with a particular interest in web development, and I'm about to create an app called techcheck, an ecommerce software that recommends the ideal gadget for your specific needs.
            </p>
          </div>
          <div className="col d-flex justify-content-center align-items-center ImgClass">
            <figure>
              <img src={image1} alt="image of me" srcset="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
