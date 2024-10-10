import FeatureNews1 from "/jager/branding.jpg";
import FeatureNews2 from "/jager/digital-marketing.jpg";
import FeatureNews3 from "/jager/wfh.jpg";
import {HiOutlineArrowLongRight} from 'react-icons/hi2'

function FeaturedNews() {
  return (
    <div className="w-full m-auto">
      <div className="container px-4 m-auto my-[150px] flex flex-col gap-y-[100px] justify-start">
          <h1 className=" text-3xl leading-[0.8]">
            Blog
          </h1>


        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-5">
            <img src={FeatureNews1} alt="Featured News 1 Thumbnail" />
            <div className="tags flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <h1 className="text-lg uppercase leading-[0.8]">
                  Tips
                </h1>
              </div>
              <div className="date text-md">01.05.2023</div>
            </div>
            <div className="divider w-full h-[1px] bg-black"></div>
            <h4 className="uppercase font-bold text-2xl">
              How to build brand awareness in 2023
            </h4>
            <a href="/">
              <HiOutlineArrowLongRight fontSize="1.25rem" />
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <img src={FeatureNews2} alt="Featured News 1 Thumbnail" />
            <div className="tags flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <h1 className=" text-lg uppercase leading-[0.8]">
                  Tips
                </h1>
              </div>
              <div className="date text-md">02.11.2023</div>
            </div>
            <div className="divider w-full h-[1px] bg-black"></div>
            <h4 className="uppercase font-bold text-2xl">
              10 Tips For Effective Digital Marketing
            </h4>
            <a href="/">
              <HiOutlineArrowLongRight fontSize="1.25rem"/>
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <img src={FeatureNews3} alt="Featured News 1 Thumbnail" />
            <div className="tags flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <h1 className=" text-lg uppercase leading-[0.8]">
                  Tips
                </h1>
              </div>
              <div className="date text-md">06.18.2023</div>
            </div>
            <div className="divider w-full h-[1px] bg-black"></div>
            <h4 className="uppercase font-bold text-2xl">
              5 Ways to Increase Productivity While Working Remotely
            </h4>
            <a href="/">
              <HiOutlineArrowLongRight fontSize="1.25rem"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
