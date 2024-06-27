import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassCard from "./ClassCard";
import "./ClassCarousel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CustomSlider: React.FC = () => {

    const sliderRef = useRef<Slider>(null);
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-slider-container">
      <Slider ref={sliderRef} {...settings}>
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </Slider>
      <button
        className="custom-prev-button mt-[50px]"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ArrowBackIosIcon className="!w-[67px] !h-[67px] ml-6" />
      </button>
      <button
        className="custom-next-button mt-[50px]"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ArrowForwardIosIcon className="!w-[67px] !h-[67px] ml-2" />
      </button>
    </div>
  );
};

export default CustomSlider;
