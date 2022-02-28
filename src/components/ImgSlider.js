import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={"/images/Slider-badag.jpg"} />
      </Wrap>
      <Wrap>
        <img src={"/images/Slider-badging.jpg"} />
      </Wrap>
      <Wrap>
        <img src={"/images/Slider-scale.jpg"} />
      </Wrap>
      <Wrap>
        <img src={"/images/Slider-scales.jpg"} />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 10px;
  cursor:pointer;
  box-sizing:border-box;

  .slick-list {
    overflow: visible;
  }

  ul li button::before{
      font-size:8px;
      color:rgb(150,158,171);
  }

  li.slick-active button::before {
      color:white;
    }
  }

  button.slick-arrow.slick-next,button.slick-arrow.slick-prev{
    z-index: 1;
  }
`;

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    box-shadow: 0px 26px 30px -10px rgb(0 0 0/69%),
      0px 16px 10px -10px rgb(0 0 0/69%);
    transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 4px solid white;
    }
  }
`;
