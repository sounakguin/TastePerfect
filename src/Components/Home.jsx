import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "/Images/Banner.png";
import Aimg from "/Images/Food-Plate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Biriyani from "/Images/Biriyani.png";
import Burger from "/Images/buger.jpg";
import Cake from "/Images/cake.jpg";
import Chocolate from "/Images/chocolate.jpg";
import Chinese from "/Images/Chinese.jpg";
import Dhosa from "/Images/Dhosa.jpeg";
import Pasta from "/Images/pasta.jpg";
import Juse from "/Images/juice.jpg";
import Momo from "/Images/Momos.jpg";
import Pizza from "/Images/pizza.jpg";
import Rasgulla from "/Images/Rasgulla.jpg";
import Home_Product_Gallary from "../Components/Home_Product_Gallary";
import Home_review from "../Components/Home_review";
import Booking from "../Components/Sitbook";
import { Link } from "react-router-dom";

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-full flex flex-wrap items-center justify-center py-8 md:py-16 px-4 md:px-0">
        <div className="text-white text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 ml-4 md:ml-16">
            Order the Finest
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 ml-4 md:ml-16">
            Takeaway Food to Your Door
          </h2>
          <p className="text-base md:text-xl mb-4 ml-4 md:ml-16">
            Even Order To The Park Or Outdoor Events With Our Location
            Technology
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/Products">
              <button className="bg-white text-black ml-auto md:ml-16 md:mt-5  px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-300 transition duration-300">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 md:pl-8">
          <img
            className="w-full md:h-auto rounded-lg"
            src={Banner}
            alt="Banner"
          />
        </div>
      </div>

      <p className="font-bold text-center pt-10 text-3xl">
        What's on your mind?
      </p>

      <Slider {...settings} className="pt-8 w-3/4 mx-auto">
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
      <p className="text-center text-black font-bold mt-16 text-4xl ">
        About US
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          className="h-auto md:h-80 mt-10 md:mt-10 md:mr-10 ml-16"
          src={Aimg}
          alt="Image"
        />
        <div className="md:w-2/5">
          <p className="text-center text-2xl md:text-1xl italic text-yellow-500">
            <strong>Why Choose Us</strong>
          </p>
          <p className="pt-4 text-center">
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
        </div>
      </div>

      <p className="text-center font-bold text-4xl font-mono pt-10">
        Our Food Gallery
      </p>
      <Home_Product_Gallary />
      <p className="text-center font-bold text-4xl font-mono pt-3 hidden md:block">
        Our Customer reviews
      </p>
      <div className="hidden md:block">
        <Home_review />
      </div>

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
