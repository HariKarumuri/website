import React from "react";

const Cards = (props) => {
  return (
    <div className=" col-lg-4 col-sm-6  gy-2 gx-2  ">
      <div className="card bg1 ">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h3 className="card-title ">
            {props.title}{" "}
            <span class="badge primary-green">{props.language}</span>
          </h3>
          <p className="card-text">{props.des}</p>
          <a href={props.link} className="btn primary-green text-white link-btn" target="_blank">visit webpage</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
