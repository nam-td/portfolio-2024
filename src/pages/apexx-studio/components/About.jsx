import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="about" className="max-w-[1440px] m-auto px-2 mt-12 3cols:px-4 mb-40">
        <h1 className="mb-6 4cols:mb-8 font-kanit text-2xl font-bold text-gray-500 border-b border-gray-500">
          OUR TEAM
        </h1>

        <div className="flex flex-col gap-y-6 3cols:items-center md:flex-row md:justify-between md:gap-x-4 md:items-start 4cols:justify-start 4cols:gap-x-8">
          <div className="w-full max-w-[600px] md:w-[48%] flex flex-col gap-y-4">
            <img className="w-full" src="/apexx/team.jpg" alt="Apexx Team" />
            <p className="font-roboto text-gray-700">
              Apexx Studio - We are an Arch Viz studio that provides high
              quality 3d rendering services to clients ranging from architects
              to real estate developers. With years of experience, our team
              always tries to put creative and technical knowledge together to
              create photorealistic presentations of future spaces and
              architecture. Since 2013, we've finished and delivered thousands
              of projects.
            </p>
          </div>

          <div className="w-full md:w-[48%] flex flex-col gap-y-6">
            <div className="title-tag w-full min-h-fit flex gap-2">
              <div className="w-[5px] h-auto bg-gray-700"></div>
              <h1 className="text-xl font-kanit font-bold text-gray-700 ">
                Our values
              </h1>
            </div>
            <div className="quote-block w-full m-auto p-4 bg-gray-200">
              <div className="quote-title flex gap-2 items-center">
                <FaQuoteLeft className="text-md text-gray-500" />
                <p className="font-kanit font-bold text-lg text-amber-700">
                  Freedom
                </p>
              </div>
              <p className="font-roboto text-md text-black">
                Freedom is our foundational value that celebrates creativity and
                encourages people to be themselves. Our corporate culture is
                deep-rooted in freedom of imagination, freedom of expression,
                freedom to be unique and respected.
              </p>
            </div>
            <div className="quote-block w-full m-auto p-4 bg-gray-200">
              <div className="quote-title flex gap-2 items-center">
                <FaQuoteLeft className="text-md text-gray-500" />
                <p className="font-kanit font-bold text-lg text-amber-700">
                  Growth and development
                </p>
              </div>
              <p className="font-roboto text-md text-black">
                Apexx drives our curiosity and desire to grow together by
                learning and exploring unseen horizons. We strongly believe that
                being a top-notch team today means making a difference every
                day! We constantly push the boundaries of aesthetics by blurring
                the limits between real and virtual.
              </p>
            </div>
            <div className="quote-block w-full m-auto p-4 bg-gray-200">
              <div className="quote-title flex gap-2 items-center">
                <FaQuoteLeft className="text-md text-gray-500" />
                <p className="font-kanit font-bold text-lg text-amber-700">
                  Rationality and logic
                </p>
              </div>
              <p className="font-roboto text-md text-black">
                When faced with a hurdle we focus on solutions and jump! Our
                efficiency is the result of rationally polished workflows and
                our true-and-tested systematic approach to visual communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
