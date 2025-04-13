import React from "react";
import "../ourclients/clients.css";

import imgURL1 from "../../assets/com-apple.svg";
import imgURL2 from "../../assets/com-adobe.svg";
import imgURL3 from "../../assets/com-broadband.svg";
import imgURL4 from "../../assets/com-cisco.svg";
import imgURL5 from "../../assets/com-meta.svg";
import imgURL6 from "../../assets/com-microsoft.svg";
import imgURL7 from "../../assets/com-oracle.svg";
import imgURL8 from "../../assets/com-salesforce.svg";
import imgURL9 from "../../assets/com-sap.svg";
import imgURL10 from "../../assets/com-tesla.svg";
import imgURL11 from "../../assets/com-uber.svg";
import imgURL12 from "../../assets/Amazon-Logo 1.svg";
import imgURL13 from "../../assets/com-broadband.svg";
import imgURL14 from "../../assets/com-tesla.svg";
import imgURL15 from "../../assets/com-oracle.svg";
import imgURL16 from "../../assets/com-salesforce.svg";
import imgURL17 from "../../assets/com-microsoft.svg";
import imgURL18 from "../../assets/com-oracle.svg";

const imageMarquee1 = [
  { imgURL: imgURL1 },
  { imgURL: imgURL2 },
  { imgURL: imgURL3 },
  { imgURL: imgURL4 },
  { imgURL: imgURL5 },
  { imgURL: imgURL6 },
  { imgURL: imgURL7 },
  { imgURL: imgURL8 },
  { imgURL: imgURL9 },
];

const imageMarquee2 = [
  { imgURL: imgURL10 },
  { imgURL: imgURL11 },
  { imgURL: imgURL12 },
  { imgURL: imgURL13 },
  { imgURL: imgURL14 },
  { imgURL: imgURL15 },
  { imgURL: imgURL16 },
  { imgURL: imgURL17 },
  { imgURL: imgURL18 },
];

export default function Clients() {
  return (
    <div className="teams my-5 mx-5">
      <h2> Clients</h2>
      
      <div className="image-display-container">
        <div className="image-display">
          {imageMarquee1.map((data, index) => {
            return (
              <div key={index} className="image-display-wrapper">
                <img src={data.imgURL} alt="" />
              </div>
            );
          })}
        </div>
        <div className="image-display">
          {imageMarquee2.map((data, index) => {
            return (
              <div key={index} className="image-display-wrapper">
                <img src={data.imgURL} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="imageTwo-display-container">
        <div className="imageTwo-display">
          {imageMarquee2.map((data, index) => {
            return (
              <div key={index} className="imageTwo-display-wrapper">
                <img src={data.imgURL} alt="" />
              </div>
            );
          })}
        </div>
        <div className="imageTwo-display">
          {imageMarquee2.map((data, index) => {
            return (
              <div key={index} className="imageTwo-display-wrapper">
                <img src={data.imgURL} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
