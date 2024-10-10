import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { forwardRef } from "react";
const LandingPageAbout = forwardRef(function LandingPageAbout(props, ref) {
  const inview = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(inview);
  const [AnimTrigger, setAnimTrigger] = useState(false);

  async function initialAnimation() {
    if (isInView === true && AnimTrigger === false) {
      await animate([
        [
          ".inview-anim",
          { opacity: [0, 1], y: ["50px", "0px"] },
          { duration: 1.5, delay: stagger(0.2), ease: "anticipate" },
        ],
      ]);
      setAnimTrigger(true);
    }
  }

  useEffect(() => {
    initialAnimation();
  }, [isInView]);
  return (
    <div ref={ref}>
      <div className="" ref={inview}>
        <div className="w-full m-auto" ref={scope}>
          <div className="container m-auto xl:h-screen xl:w-[90%] xl:mb-16 flex flex-row gap-y-16 items-center justify-start">
            <div className="w-full max-w-[1200px] px-4 py-16 flex flex-col items-start gap-y-20 text-xl md:text-2xl xl:text-3xl">
              <p className="inview-anim">
                Jager is a digital marketing agency that helps businesses grow
                online. Founded in 2009 by John Jager, a former Google employee,
                Jager has grown from a small start-up to a leading agency with
                over 100 clients across various industries.
              </p>
              <p className="inview-anim">
                We offer a range of services, such as web design, SEO, social
                media marketing, content creation, and email marketing. Our team
                of experts has the skills and experience to create effective and
                engaging campaigns that reach your target audience and drive
                conversions. Whether you need a new website, a boost in organic
                traffic, or a viral social media post, we can help you achieve
                your goals. Jager is more than just an agency, we are your
                partner in digital success.
              </p>
              <a
                href="#"
                className="inview-anim flex flex-row gap-2 items-center px-4 py-2 border border-black rounded-3xl text-sm font-bold hover:text-white hover:bg-zinc-800 "
              >
                <span>Learn More</span>
                <HiOutlineArrowLongRight fontSize="1.25rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LandingPageAbout;
