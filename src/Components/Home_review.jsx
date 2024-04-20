import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../Images/review_1.jpg";
import two from "../Images/review_2.jpg";
import three from "../Images/review_3.jpg";
import four from "../Images/review_4.jpg";

const Card = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className=" w-3/4 mx-auto">
      <Slider {...settings}>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={one} alt="Placeholder" />
            </div>
            <div className="content">
              <p>
                While the food options are decent, the delivery times are
                inconsistent. Sometimes my order arrives early, but other times
                it's significantly delayed. It's frustrating when you're hungry
                and waiting for your meal. I hope they can improve their
                delivery service reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={two} alt="Placeholder" />
            </div>
            <div className="content">
              <p>
                While the food options are decent, the delivery times are
                inconsistent. Sometimes my order arrives early, but other times
                it's significantly delayed. It's frustrating when you're hungry
                and waiting for your meal. I hope they can improve their
                delivery service reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={three} alt="Placeholder" />
            </div>
            <div className="content">
              <p>
                While the food options are decent, the delivery times are
                inconsistent. Sometimes my order arrives early, but other times
                it's significantly delayed. It's frustrating when you're hungry
                and waiting for your meal. I hope they can improve their
                delivery service reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={four} alt="Placeholder" />
            </div>
            <div className="content">
              <p>
                While the food options are decent, the delivery times are
                inconsistent. Sometimes my order arrives early, but other times
                it's significantly delayed. It's frustrating when you're hungry
                and waiting for your meal. I hope they can improve their
                delivery service reliability.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Arrow components to style the default arrow icons
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ color: "black" }}
    >
      Next
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ color: "black" }}
    >
      Prev
    </div>
  );
};

export default Card;
