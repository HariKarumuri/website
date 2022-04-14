import React from "react";
import "./Header.css";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

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
              a student at jain university ,persuing AI in CSE Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Voluptatibus, itaque.
            </p>
          </div>
          <div className="col d-flex justify-content-center align-items-center ImgClass">
            <figure>
              <img src="https://assets.stickpng.com/images/5f439d47777cdb0004f2ecae.png" alt="image of me" srcset="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
