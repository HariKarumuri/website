import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg2">
      <div className="container p-3">
        <div className="row icons-row gx-5">
          <div className="col d-flex justify-content-center">
            <FontAwesomeIcon icon={faFacebook} className="greenFont iconss" onClick={()=>{window.open('https://www.facebook.com/hari.karumuri.7','_blank')}}  />

            <FontAwesomeIcon icon={faGithub} className="greenFont iconss" onClick={()=>{window.open('https://github.com/HariKarumuri','_blank')}} />

            <FontAwesomeIcon icon={faInstagram} className="greenFont iconss" onClick={()=>{window.open('https://www.instagram.com/hari_karumuri/','_blank')}} />
          </div>
          <div className="col d-flex justify-content-center">
            <FontAwesomeIcon icon={faAt} className="greenFont iconss" />
            <h6>harikarumuri1086@gmail.com</h6>
          </div>
          <div className="col d-flex justify-content-center">
            <FontAwesomeIcon icon={faPhone} className="greenFont iconss" />
            <p>+917661908534</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
