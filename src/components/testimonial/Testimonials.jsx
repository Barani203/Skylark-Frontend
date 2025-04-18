import React from "react";
import "../testimonial/testimonial.css";
import image from '../../assets/candidateimage.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonial =[
    {
        id:1,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
    {
        id:2,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
    {
        id:3,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
    {
        id:4,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
    {
        id:5,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
    {
        id:6,
        massage:`This platform helped me land a role that actually values my 8+ years of experience. The offers were relevant and high quality.`,
        logo:image,
        name:'Sandy',
        role:'Senior Software Engineer'

    },
]
export default function Testimonials() {
          // Custom Arrow Buttons
  const CustomArrow = ({ onClick, direction }) => (
    <button className={`testimonial-arrow ${direction}`} onClick={onClick}>
      {direction === "next" ? "›" : "‹"}
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true, // Pauses autoplay when hovered
    nextArrow: <CustomArrow direction="front" />,
    prevArrow: <CustomArrow direction="back" />,
  };
  return (
    <div className=" testimonial-section w-auto py-4">
      <Slider {...settings}>
{
    testimonial.map((state,index)=>(
        <div className="testimmonial-top w-auto ">
        <div key={index} className="testimonial">
          <div className="message">
            <p className="px-5">
              {state.massage}
            </p>
          </div>
          <div>
            <div className="testmonial-img">
                <img src={state.logo} alt="candidate img" />
            </div>
            <div className="testmonial-details">
                <h6>{state.name}</h6>
                <p>{state.role}</p>
            </div>
          </div>
        </div>
        </div>
    ))
}
      </Slider>
    </div>
  );
}
