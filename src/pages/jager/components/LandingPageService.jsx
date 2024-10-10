import {
  HiOutlineArrowLongRight,
  HiOutlineCircleStack,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import { BsWindowFullscreen, BsPen } from "react-icons/bs";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useAnimate, stagger, useInView } from "framer-motion";
import { forwardRef } from "react";

const LandingPageService = forwardRef(function LandingPageService(props, ref) {
  const inview1 = useRef(null);
  const inview2 = useRef(null);
  const inview3 = useRef(null);
  const inview4 = useRef(null);
  const inview5 = useRef(null);
  const inview6 = useRef(null);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [scope, animate] = useAnimate();
  const isInView1 = useInView(inview1);
  const [AnimTrigger1, setAnimTrigger1] = useState(false);
  const isInView2 = useInView(inview2);
  const [AnimTrigger2, setAnimTrigger2] = useState(false);
  const isInView3 = useInView(inview3);
  const [AnimTrigger3, setAnimTrigger3] = useState(false);
  const isInView4 = useInView(inview4);
  const [AnimTrigger4, setAnimTrigger4] = useState(false);
  const isInView5 = useInView(inview5);
  const [AnimTrigger5, setAnimTrigger5] = useState(false);
  const isInView6 = useInView(inview6);
  const [AnimTrigger6, setAnimTrigger6] = useState(false);
  const liStyle = {
    transform: "translateX(-50px)",
  };
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  async function initialAnimation(isInView, AnimTrigger, index) {
    if (isInView === true && AnimTrigger === false) {
      await animate([
        [
          `#list-${index} li`,
          { x: "0px", opacity: 1 },
          { duration: 1.25, delay: stagger(0.15), ease: "anticipate" },
        ],
        [
          `#line-${index}`,
          { width: "100%", opacity: 1 },
          { duration: 1.75, ease: "easeOut", at: 0.2 },
        ],
      ]);
      if (index === 1) setAnimTrigger1(true);
      if (index === 2) setAnimTrigger2(true);
      if (index === 3) setAnimTrigger3(true);
      if (index === 4) setAnimTrigger4(true);
      if (index === 5) setAnimTrigger5(true);
      if (index === 6) setAnimTrigger6(true);
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    initialAnimation(isInView1, AnimTrigger1, 1);
    initialAnimation(isInView2, AnimTrigger2, 2);
    initialAnimation(isInView3, AnimTrigger3, 3);
    initialAnimation(isInView4, AnimTrigger4, 4);
    initialAnimation(isInView5, AnimTrigger5, 5);
    initialAnimation(isInView6, AnimTrigger6, 6);
  }, [isInView1, isInView2, isInView3, isInView4, isInView5, isInView6]);

  return (
    <div ref={ref}>
      <div className="w-full m-auto bg-zinc-900" ref={scope}>
        <div className="container px-4 py-16 m-auto xl:min-h-screen lg:px-8 lg:py-32  text-white text-xl">
          <div className="w-full mb-[80px] lg:mb-[150px] flex flex-row justify-between items-center ">
            <h1 className="text-xl lg:text-3xl leading-[0.8] font-orbitron">
              What We Offer
            </h1>
            <div className="flex flex-row gap-6 items-center">
              <span className="hidden lg:block">Explore Services</span>
              <span>
                <HiOutlineArrowLongRight fontSize="1.5rem" />
              </span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-[80px]">
            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-1 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <MdManageSearch
                    fontSize={screenSize.width < 1024 ? "3rem" : "2rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  Research & Analytics
                </h3>
              </div>
              <ul
                id="list-1"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview1}
              >
                <li style={liStyle} className="opacity-0">
                  Analyse client business
                </li>
                <li style={liStyle} className="opacity-0">
                  Research opportunities
                </li>
                <li style={liStyle} className="opacity-0">
                  Create information architecture
                </li>
                <li style={liStyle} className="opacity-0">
                  Study the target audience
                </li>
              </ul>
            </div>

            <div
              id="line-1"
              className="w-[0%] h-[1px] bg-white opacity-0"
            ></div>

            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-3 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <BsWindowFullscreen
                    fontSize={screenSize.width < 1024 ? "1.5rem" : "1.6rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  web design
                </h3>
              </div>
              <ul
                id="list-2"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview2}
              >
                <li style={liStyle} className="opacity-0">
                  Design Audit
                </li>
                <li style={liStyle} className="opacity-0">
                  Industry Competitors Research
                </li>
                <li style={liStyle} className="opacity-0">
                  Content Architecture
                </li>
                <li style={liStyle} className="opacity-0">
                  Visual Concept
                </li>
                <li style={liStyle} className="opacity-0">
                  UI/UX Design
                </li>
                <li style={liStyle} className="opacity-0">
                  Web 3 Design
                </li>
              </ul>
            </div>

            <div
              id="line-2"
              className="w-[0%] h-[1px] bg-white opacity-0"
            ></div>

            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-3 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <HiOutlineCircleStack
                    fontSize={screenSize.width < 1024 ? "1.75rem" : "2rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  product design
                </h3>
              </div>
              <ul
                id="list-3"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview3}
              >
                <li style={liStyle} className="opacity-0">
                  User Journeys
                </li>
                <li style={liStyle} className="opacity-0">
                  UX Design
                </li>
                <li style={liStyle} className="opacity-0">
                  UI Concept
                </li>
                <li style={liStyle} className="opacity-0">
                  UI Design
                </li>
                <li style={liStyle} className="opacity-0">
                  Design system & UI Kit
                </li>
                <li style={liStyle} className="opacity-0">
                  Product Maintenance
                </li>
              </ul>
            </div>

            <div
              id="line-3"
              className="w-[0%] h-[1px] bg-white opacity-0"
            ></div>

            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-3 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <HiOutlinePaintBrush
                    fontSize={screenSize.width < 1024 ? "1.75rem" : "2rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  creative
                </h3>
              </div>
              <ul
                id="list-4"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview4}
              >
                <li style={liStyle} className="opacity-0">
                  Promo Videos
                </li>
                <li style={liStyle} className="opacity-0">
                  Sound design for video
                </li>
                <li style={liStyle} className="opacity-0">
                  Color correction
                </li>
                <li style={liStyle} className="opacity-0">
                  Interaction Design
                </li>
                <li style={liStyle} className="opacity-0">
                  3D motion design
                </li>
              </ul>
            </div>

            <div
              id="line-4"
              className="w-[0%] h-[1px] bg-white opacity-0"
            ></div>

            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-3 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <BsPen
                    fontSize={screenSize.width < 1024 ? "1.5rem" : "1.6rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  Copywriting
                </h3>
              </div>
              <ul
                id="list-5"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview5}
              >
                <li style={liStyle} className="opacity-0">
                  Website, Advertising & Social copy
                </li>
                <li style={liStyle} className="opacity-0">
                  Email marketing
                </li>
                <li style={liStyle} className="opacity-0">
                  Product descriptions
                </li>
                <li style={liStyle} className="opacity-0">
                  Direct Response Copywriting
                </li>
                <li style={liStyle} className="opacity-0">
                  Sales and Landing Pages
                </li>
                <li style={liStyle} className="opacity-0">
                  Up-sell / Down-sell Pages
                </li>
              </ul>
            </div>

            <div
              id="line-5"
              className="w-[0%] h-[1px] bg-white opacity-0"
            ></div>

            <div className="flex flex-col gap-8">
              <div className="w-full flex flex-row gap-3 lg:gap-8 items-center">
                <div className="lg:w-[80px] lg:h-[80px] rounded-full flex flex-row justify-center items-center lg:bg-white">
                  <FaArrowUpRightDots
                    fontSize={screenSize.width < 1024 ? "1.5rem" : "1.6rem"}
                    color={screenSize.width < 1024 ? "white" : "black"}
                  />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold uppercase font-kanit">
                  Search engine optimisation
                </h3>
              </div>
              <ul
                id="list-6"
                className="pl-8 lg:pl-[130px] list-disc flex flex-col gap-8"
                ref={inview6}
              >
                <li style={liStyle} className="opacity-0">
                  SEO Strategy
                </li>
                <li style={liStyle} className="opacity-0">
                  Google Profile Optimization
                </li>
                <li style={liStyle} className="opacity-0">
                  Keyword Research
                </li>
                <li style={liStyle} className="opacity-0">
                  On-Page SEO
                </li>
                <li style={liStyle} className="opacity-0">
                  Link-Building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LandingPageService;
