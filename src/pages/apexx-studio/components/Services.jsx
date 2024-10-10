import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="services w-full max-w-[1440px] m-auto px-4 4cols:px-4 mt-12 mb-40">
      <h1 className="mb-6 4cols:mb-8 font-kanit text-2xl font-bold text-zinc-500 border-b border-gray-500">
        OUR SERVICES
      </h1>
      <div className="w-full flex flex-col 3cols:flex-row 3cols:flex-wrap gap-y-8 items-center 3cols:justify-center 3cols:gap-x-4 3cols:items-stretch 4cols:justify-between">
        <div className="service-card w-full 3cols:w-[40%] 4cols:w-[23%] min-h-[450px] shadow-2xl">
          <div className="service-thumbnail w-full aspect-video overflow-hidden flex justify-center items-end rounded-t-lg">
            <img
              src="/apexx/BYVisuals_studio_Powerhouse_Company_Donaumarina_Tower_cam_3.jpg"
              alt=""
            />
          </div>
          <div className="service-textblock w-full p-5 flex flex-col gap-3 items-start">
            <h2 className="font-kanit font-bold text-lg text-amber-700">
              Exterior Rendering
            </h2>
            <p className="font-roboto">
              It is an excellent way to present real estate to potential
              investors and customers. Our customers receive high-quality 3D
              images of future or ongoing projects.
            </p>
          </div>
        </div>

        <div className="service-card w-full 3cols:w-[40%] 4cols:w-[23%] min-h-[450px] shadow-2xl">
          <div className="service-thumbnail w-full aspect-video overflow-hidden flex justify-center items-end rounded-t-lg">
            <img
              src="/apexx/BYVisuals_Manhattan_Apartment_NY_2019_cam_02.jpg"
              alt=""
            />
          </div>

          <div className="service-textblock w-full p-5 flex flex-col gap-3 items-start">
            <h2 className="font-kanit font-bold text-lg text-amber-700">
              Interior Rendering
            </h2>
            <p className="font-roboto">
              It is a modern tool, actively used by builders and designers,
              which allows you to create a three-dimensional picture of the
              interior space. Interior visualization helps seamlessly plan and
              see the future concept of the room.
            </p>
          </div>
        </div>

        <div className="service-card w-full 3cols:w-[40%] 4cols:w-[23%] min-h-[450px] shadow-2xl">
          <div className="service-thumbnail w-full aspect-video overflow-hidden flex justify-center items-end rounded-t-lg">
            <img src="/apexx/landing-page/3d-floor-plan.jpg" alt="" />
          </div>

          <div className="service-textblock w-full p-5 flex flex-col gap-3 items-start">
            <h2 className="font-kanit font-bold text-lg text-amber-700">
              3D Floorplan
            </h2>
            <p className="font-roboto">
              Accurate creation of an apartment or house plan, taking into
              account the location of the furniture and all the details of the
              decor. It is a functional tool for planning and designing a room.
            </p>
          </div>
        </div>

        <div className="service-card w-full 3cols:w-[40%] 4cols:w-[23%] min-h-[450px] shadow-2xl">
          <div className="service-thumbnail w-full aspect-video overflow-hidden flex justify-center items-end rounded-t-lg">
            <img src="/apexx/landing-page/animation.jpg" alt="" />
          </div>

          <div className="service-textblock w-full p-5 flex flex-col gap-3 items-start">
            <h2 className="font-kanit font-bold text-lg text-amber-700">
              3D Animation Rendering
            </h2>
            <p className="font-roboto">
              It is a modern way of visualization of architectural objects in
              dynamics. Various techniques allow you to get the atmosphere
              presented in motion and achieve the effect of the most realistic
              perception.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
