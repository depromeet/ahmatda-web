import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';

const TimePicker = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  function slide1(y) {
    if (!slider1.current) return;
    if (y.target.closest('.slider1')) {
      y.wheelDelta > 0 ? slider1.current.slickNext?.() : slider1.current.slickPrev?.();
    }
  }

  function slide2(y) {
    if (!slider2.current) return;
    if (y.target.closest('.slider2')) {
      y.wheelDelta > 0 ? slider2.current.slickNext?.() : slider2.current.slickPrev?.();
    }
  }

  function slide3(y) {
    if (!slider3.current) return;
    if (y.target.closest('.slider3')) {
      y.wheelDelta > 0 ? slider3.current.slickNext?.() : slider3.current.slickPrev?.();
    }
  }

  useEffect(() => {
    function wheelHandler(e) {
      if (slider1) {
        slide1(e);
      }
      if (slider2) {
        slide2(e);
      }
      if (slider3) {
        slide3(e);
      }
    }

    window.addEventListener('wheel', wheelHandler);

    return () => window.removeEventListener('wheel', wheelHandler);
  }, []);

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 100,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    adaptiveHeight: false,
    afterChange: (e) => {},
  };

  return (
    <Container>
      <Slider {...settings} className="slider-entity hours slider1" ref={slider1}>
        {hours.map((hour) => (
          <div key={hour}>{hour}</div>
        ))}
      </Slider>
      <Slider {...settings} className="slider-entity minutes slider2" ref={slider2}>
        {minutes.map((minutes) => (
          <div key={minutes}>{minutes}</div>
        ))}
      </Slider>
      <Slider {...settings} infinite={false} className="slider-entity ampm slider3" ref={slider3}>
        <div>AM</div>
        <div>PM</div>
      </Slider>
    </Container>
  );
};

export default TimePicker;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 300px;
  height: 150px;
  overflow: hidden;
  position: relative;

  .slick-slide {
    opacity: 0.1;
    font-size: 20px;
    text-align: center;
    background: transparent;
    outline: none;
  }

  .slick-slide {
    transition: opacity 0.3s, font-size: 0.3s;
  }
  .slick-slide div {
    outline: none;
    padding: 5px 0 10px;
    margin: 0 10px 0 0;
  }

  .slick-active {
    opacity: 1;
    font-size: 30px;
    background: transparent;
  }

  .mask {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 10%;
    /* margin: 0 15px; */
    pointer-events: none;
    display: flex;
  }

  .mask .mask-item {
    width: 100px;
    height: 60px;
    text-align: center;
    border-top: 1px solid black !important;
    border-bottom: 1px solid black !important;
    position: relative;
    margin: 0 15px;
  }

  .mask .mask-item span {
    position: absolute;
    bottom: 0;
    left: 25%;
    color: grey;
    font-size: 12px;
  }
`;
