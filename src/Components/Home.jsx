import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../Images/Banner.png";
import Aimg from "../Images/Food-Plate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Biriyani from "../Images/Biriyani.png";
import Burger from "../Images/buger.jpg";
import Cake from "../Images/cake.jpg";
import Chocolate from "../Images/chocolate.jpg";
import Chinese from "../Images/Chinese.jpg";
import Dhosa from "../Images/Dhosa.jpeg";
import Pasta from "../Images/pasta.jpg";
import Juse from "../Images/juice.jpg";
import Momo from "../Images/Momos.jpg";
import Pizza from "../Images/pizza.jpg";
import Rasgulla from "../Images/Rasgulla.jpg";
import Home_Product_Gallary from "../Components/Home_Product_Gallary";
import Home_review from "../Components/Home_review";
import Booking from "../Components/Sitbook";
import { Link } from "react-router-dom";

export default function Home() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-full flex flex-wrap items-center justify-center py-16 px-4 md:px-0">
        <div className="text-white text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ml-16">
            Order the Finest
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ml-16">
            Takeaway Food to Your Door
          </h2>
          <p className="text-lg md:text-xl mb-8 ml-16">
            Even Order To The Park Or Outdoor Events With Our Location
            Technology
          </p>
          <Link to="/Products">
            <button className="bg-white text-black px-8 py-3 rounded-full ml-16 font-bold shadow-md hover:bg-gray-300 transition duration-300">
              Order Now
            </button>
          </Link>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 md:pl-8">
          <img
            className="w-full md:h-auto rounded-lg"
            src={Banner}
            alt="Banner"
          />
        </div>
      </div>

      <div className="flex flex-wrap relative pt-10">
        <p className="ml-48 pl-2 font-bold">What's on your mind?</p>
        <FontAwesomeIcon
          className="absolute right-64 border border-sky-500 h-8 rounded-full bg-yellow-300 text-black cursor-pointer"
          icon={faArrowLeft}
          onClick={slidePrev}
        />
        <FontAwesomeIcon
          className="absolute right-52 border border-sky-500 h-8 rounded-full bg-yellow-300 text-black cursor-pointer"
          icon={faArrowRight}
          onClick={slideNext}
        />
      </div>
      <Slider {...settings} className="pt-8 w-3/4 mx-auto" ref={sliderRef}>
        {Home_category.map((category, index) => (
          <div key={index} className="product-container">
            <div className="card2">
              <img
                className="h-44 w-full object-cover "
                src={category.Images}
                alt="Image"
              />
              <div className="text-center pt-4">
                <strong>{category.Name}</strong>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-center text-black font-bold mt-16 text-4xl ">About US</p>
      <div className="flex justify-center">
        <img className="h-80 mt-20 " src={Aimg} alt="Image" />
        <p className="pt-16 w-2/5  ">
          <p className="text-center text-1xl italic text-yellow-500">
            <strong>Why Choose Us</strong>
          </p>
          <p className="pt-4">
            Online food ordering platforms revolutionize dining, offering
            unparalleled convenience and choice. Customers can place orders
            anytime, anywhere with internet access, saving time and resources.
            With a vast array of culinary options, from international cuisine to
            local favorites, diverse tastes are catered to. A standout feature
            is the seamless reordering process, allowing customers to
            effortlessly replicate favorite orders with a few clicks. By
            streamlining the process and eliminating re-entering details, these
            platforms make mealtime hassle-free and enjoyable. Empowering
            customers to indulge in their preferred meals with ease, whether at
            home, work, or on the move, they elevate convenience and
            satisfaction in dining experiences.
          </p>
        </p>
      </div>
      <p className="text-center font-bold text-4xl font-mono pt-10">
        Our Food Gallery
      </p>
      <Home_Product_Gallary />
      <p className="text-center font-bold text-4xl font-mono pt-3">
        Our Customer reviews
      </p>
      <Home_review />
      <p className="text-center font-bold text-4xl font-mono pt-10 bg-white pb-6">
        Send Us Massage
      </p>
      <Booking />
      <p className="pt-14 bg-white"></p>
    </div>
  );
}

const Home_category = [
  { Images: Biriyani, Name: "Biriyani" },
  { Images: Burger, Name: "Burger" },
  { Images: Cake, Name: "Cake" },
  { Images: Chinese, Name: "Chinese" },
  { Images: Chocolate, Name: "Chocolate" },
  { Images: Dhosa, Name: "Dhosa" },
  { Images: Juse, Name: "Juice" },
  { Images: Rasgulla, Name: "Rasgulla" },
  { Images: Momo, Name: "Momo" },
  { Images: Pasta, Name: "Pasta" },
  { Images: Pizza, Name: "Pizza" },
];
