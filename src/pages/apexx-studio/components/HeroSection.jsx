import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {

  function scrollToContact() {
    const element = document.querySelector(`#contact`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero w-full h-screen max-w-[1440px] px-0 pt-[64px] pb-8 m-auto relative flex flex-col justify-between items-center overflow-hidden 3cols:justify-start 3cols:gap-y-6">
      <div className="hero-images w-full h-[calc(65%_-_64px)] xs:h-[calc(70%_-_64px)] 4cols:h-[calc(78%_-_64px)] overflow-hidden">
        <div className="clipper w-full h-full m-auto overflow-hidden flex justify-center">
          <img
            className="w-full h-full object-cover"
            src="/apexx/Bobak_Studio+Vessel_Office_The_Black_Forest_House_pov-5.jpg"
            alt="hero section image"
          />
        </div>
      </div>

      <div className="hero-text-block w-full max-w-[580px] px-2 flex flex-col gap-4">
        <h1 className="text-2xl xs:text-3xl font-kanit font-bold text-gray-700 text-center">
          Looking for high-end architecture visualization service?
        </h1>
        <p className="w-[90%] m-auto text-md font-roboto text-gray-900 text-center">
          At Apexx Studio, we've been working with architects and real estate
          developers for almost a decade to deliver top-notch architecture
          visualizations.
        </p>
        <div className="cta w-full flex justify-center items-center">
          <Link
            to="#"
            className="bg-zinc-500 text-white px-6 py-2 rounded-3xl font-kanit"
            onClick={scrollToContact}
          >
            Let's Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
