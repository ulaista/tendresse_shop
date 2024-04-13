import React, { useEffect, useRef } from "react";
import slider1 from "../../img/slider/slider-1.jpg";
import slider2 from "../../img/slider/slider-2.jpg";

import "../../plugins/slick/slick.css";
import "../../plugins/animate/animate.css";
import "../../plugins/slick/slick-theme.css";
import "../../scss/templates/_slider.scss";

import $ from "../../plugins/jquery/dist/jquery.js";
import "../../plugins/slick/slick.min.js";

function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = $(sliderRef.current).slick({
      centerMode: true,
      centerPadding: "0",
      autoplay: true,
      infinite: true,
      arrows: true,
      prevArrow:
        "<button type='button' class='heroSliderArrow prevArrow'>‹</button>",
      nextArrow:
        "<button type='button' class='heroSliderArrow nextArrow'>›</button>",
      // dots: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 300,
      cssEase: "linear",
      useTransform: true,
      adaptiveHeight: true,
    });

    slider.on("afterChange", () => {
      animateSlide();
    });

    animateSlide();

    return () => {
      if (sliderRef.current) {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, []);

  function animateSlide() {
    $(sliderRef.current)
      .find(".slider-item")
      .find("p, h1, a")
      .removeClass("animated fadeInUp")
      .css("opacity", 0);

    setTimeout(() => {
      $(sliderRef.current)
        .find("[tabindex='0']")
        .find("p, h1, a")
        .addClass("animated fadeInUp")
        .css("opacity", 1);
    }, 10);
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div className="hero-slider" ref={sliderRef}>
        <div
          className="slider-item th-fullpage hero-area"
          style={{ backgroundImage: `url(${slider1})` }}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p>KNIT LOFT</p>
                <h1>
                  СВЯЗАНО <br /> С ЛЮБОВЬЮ
                </h1>
                <a className="btn" href="/shop">
                  {("shop")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          style={{ backgroundImage: `url(${slider2})` }}
          alt="slider"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-left">
                <p>KNIT LOFT</p>
                <h1>
                  НОВАЯ КОЛЛЕКЦИЯ <br /> 01.09.2023
                </h1>
                <a className="btn" href="/shop">
                {("shop")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
