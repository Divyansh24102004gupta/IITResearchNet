import React from "react";
import {FaUniversity} from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "IIT Bombay",
      location: "Mumbai, India",
      openPositions: 10,
      icon: <FaUniversity />,
    },
    {
      id: 2,
      title: "IIT Dehli",
      location: "Dehli, India",
      openPositions: 5,
      icon: <FaUniversity />,
    },
    {
      id: 3,
      title: "IIT Patna",
      location: "Bihta, Patna, India",
      openPositions: 20,
      icon: <FaUniversity />,
    },
  ];
  return (
    <div className="companies" style={{backgroundColor:"transparent"}}>
      <div className="container text-2xl text-white">
        <h3>Top IITs for research</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id} style={{backgroundColor:"#1F2937"}}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;