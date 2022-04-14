import React from "react";
import Cards from './Cards'
import Data from './PortfolioApi'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <div className="bg2 py-3" id="portfolio">
      <div className="container">
        <h6 className="text-white text-center" id="#portfolio">
          portfolio
        </h6>
        <h4 className="greenFont ">projects</h4>
        <div className="row">
          
          {Data.map((val,index)=>{
            return <Cards key={index} title={val.title} des={val.des} language={val.language} image={val.image} link={val.link}/>
          })}
         
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
