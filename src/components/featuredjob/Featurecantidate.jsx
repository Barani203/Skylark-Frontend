import React from "react";
import "../featuredjob/featurecandidate.css";
import logo from "../../assets/candidateimage.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiLocationOn } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
const candidate = [
    {
      id: 1,
      name:'sandy',
      company: "Wipro",
      location: "Chennai",
      role:'java Full Stack',
      img: logo,
    },
    {
      id: 2,
      name:'Kumar',
      company: "Wipro",
      location: "Chennai",
      role:'java Full Stack',
      img: logo,
    },
    {
      id: 3,
      name:'sandy',
      company: "Wipro",
      location: "Chennai",
      role:'java Full Stack',
      img: logo,
    },
    {
      id: 4,
      name:'Ravi',
      company: "Google",
      location: "Chennai",
      role:'java Full Stack',
      img: logo,
    },
  ];
  
export default function Featurecantidate() {
      // Custom Arrow Buttons
  const CustomArrow = ({ onClick, direction }) => (
    <button className={`custom-arrow ${direction}`} onClick={onClick}>
      {direction === "next" ? "›" : "‹"}
    </button>
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="feature-section">
      <div className="feature-header py-4  my-4 mx-3">
        <h1>Featured Candidates</h1>
      </div>
      <Slider {...settings}>
      {
        candidate.map((state)=>(
         <div className="w-auto" key={state.id}>
                 <div  className="candidate-card">
        <div className="candidate-image py-4 px-1 mx-2">
          <img src={state.img} alt="" />
          <div className="employee-details">
            <h6 className="my-3">{state.name}</h6>
            <p>{state.company}</p>
          </div>
        </div>
        <div className="company-details">
          <p className="my-2">
            <CiLocationOn color="#7B1FA2" />
            <b>{state.location}</b> Ready to Relocate
          </p>
          <h6 className="my-3">Excepted CTC ₹1,20,000</h6>
          <p className="my-1"> {state.role}</p>
          <button className="rounded-4 my-3" style={{backgroundColor:'#7B1FA2'}}>View Profile</button>
        </div>
        
      </div>
         </div>
        ))
      }
      </Slider>
      <button className="rounded-4 my-4" style={{backgroundColor:'#7B1FA2'}}>View More</button>
    </div>
  );
}

   
    