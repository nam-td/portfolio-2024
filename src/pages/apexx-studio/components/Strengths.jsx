import React from "react";
import { TiTick } from "react-icons/ti";
const Strengths = () => {
  return (
    <div className="strengths w-full max-w-[1440px] m-auto px-4 flex flex-col md:flex-row gap-8 items-center md:items-center md:justify-between 4cols:justify-center 4cols:items-center md:gap-x-8 4cols:gap-x-10 4cols:h-screen">
      <div className="w-full 3cols:w-[550px]">
        <img 
        className="w-full"
        src="/apexx/landing-page/meeting.jpg" alt="team meeting" 
        />
      </div>
      <div className="w-full max-w-[600px] flex flex-col gap-y-8">
        <h1 className="text-2xl xs:text-3xl font-kanit font-bold text-gray-700 text-center md:text-left">
          Why working with us?
        </h1>
        <div className="w-[90%] m-auto md:m-0">
          <div className="item-title flex gap-2">
            <TiTick className="text-2xl text-amber-700" />
            <h2 className="text-xl font-kanit font-bold text-amber-700">
              Pursuit of perfection
            </h2>
          </div>
          <p className="font-roboto text-md text-justify">
            “If we chase perfection, we can reach excellence.” This observation
            thoroughly describes our approach to work. At Apexx, we are
            committed to providing quality rendering services to our clients
            that surpass the standards of our competitors.
          </p>
        </div>
        <div className="w-[90%] m-auto md:m-0">
          <div className="item-title flex gap-2">
            <TiTick className="text-2xl text-amber-700" />
            <h2 className="text-xl font-kanit font-bold text-amber-700">
              Fast turn around
            </h2>
          </div>
          <p className="font-roboto text-md text-justify">
            One of our core values is speed! We know that architectural projects
            can be extremely time-sensitive, especially when winning prestigious
            architecture contests or government-funded projects is at stake. We
            keep in mind your goals and deadlines from the very beginning till
            we deliver the results you celebrate.
          </p>
        </div>
        <div className="w-[90%] m-auto md:m-0">
          <div className="item-title flex gap-2">
            <TiTick className="text-2xl text-amber-700" />
            <h2 className="text-xl font-kanit font-bold text-amber-700">
              We work with global talents
            </h2>
          </div>
          <p className="font-roboto text-md text-justify">
            As a team-oriented business, we constantly seek remarkably gifted
            people. It's like a quest! We are so bloody good at attracting
            top-tier artists from around the world to collaborate within your
            project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strengths;
