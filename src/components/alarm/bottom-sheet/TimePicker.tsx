/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';

const TimePicker = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    ampm: 'AM',
  });

  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  function slide1(y: WheelEvent) {
    if (!slider1.current) return;

    const slider = slider1.current as Slider;

    if ((y.target as HTMLDivElement).closest('.slider1')) {
      // eslint-disable-next-line no-unused-expressions
      y.deltaY > 0 ? slider.slickNext() : slider.slickPrev();
    }
  }

  function slide2(y: WheelEvent) {
    if (!slider2.current) return;

    const slider = slider2.current as Slider;

    if ((y.target as HTMLDivElement).closest('.slider2')) {
      // eslint-disable-next-line no-unused-expressions
      y.deltaY > 0 ? slider.slickNext() : slider.slickPrev();
    }
  }

  function slide3(y: WheelEvent) {
    if (!slider3.current) return;

    const slider = slider3.current as Slider;

    if ((y.target as HTMLDivElement).closest('.slider3')) {
      // eslint-disable-next-line no-unused-expressions
      y.deltaY > 0 ? slider.slickNext() : slider.slickPrev();
    }
  }

  useEffect(() => {
    function wheelHandler(e: WheelEvent) {
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
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 3,
    speed: 100,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // swipeToSlide: true,
    arrows: false,
    touchMode: true,
    adaptiveHeight: true,
  };

  return (
    <div>
      <div>{JSON.stringify(time)}</div>
      <Container>
        <StyledSlider
          {...settings}
          className="hours slider1"
          ref={slider1}
          afterChange={(i) => setTime((prev) => ({ ...prev, hours: i }))}
        >
          {hours.map((hour) => (
            <div key={hour}>{hour}</div>
          ))}
        </StyledSlider>
        <StyledSlider
          {...settings}
          className="minutes slider2"
          ref={slider2}
          afterChange={(i) => setTime((prev) => ({ ...prev, minutes: i }))}
        >
          {minutes.map((minutes) => (
            <div key={minutes}>{minutes}</div>
          ))}
        </StyledSlider>
        <StyledSlider
          {...settings}
          className="ampm slider3"
          ref={slider3}
          infinite
          afterChange={(i) => setTime((prev) => ({ ...prev, ampm: i } as any))}
        >
          <div>AM</div>
          <div>PM</div>
          <div>AM</div>
          <div>PM</div>
        </StyledSlider>
      </Container>
    </div>
  );
};

export default TimePicker;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 100px;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    display: flex;
    width: 100px;
    background-color: lightGrey;
  }

  .slick-slide {
    opacity: 0.1;
    transition: opacity 0.3s, font-size: 0.3s;
    font-size: 15px;
    text-align: center;
  }

  .slick-slide.slick-active,
  .slick-slide.slick-center {
    opacity: 0.5;
  }
  .slick-slide.slick-current {
    display: block;
    opacity: 1;
    font-weight: bold;
    font-size: 20px;
  }
`;

// default class: slick-slide slick-cloned
// active class: slick-slide slick-active
// center class: slick-slide slick-active slick-center slick-current

// slick-slider > slick-list > slick-track > slick-slide
