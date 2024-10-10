import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const JagerFooter = forwardRef(function JagerFooter(props, ref) {
  const { navRefs } = props;
  const scrollTo = (section, e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={ref} className="w-full m-auto min-h-[100vh] bg-zinc-900">
      <div className="container m-auto px-4 py-[50px] lg:py-[150px] flex flex-row flex-wrap justify-start items-start gap-x-16 gap-y-32 text-white">
        <div className="w-full lg:w-[45%]">
          <div className="w-[200px] lg:w-[50%] max-w-[324px] mb-[150px]">
            <svg
              className="text-white"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162.16 30.77"
              preserveAspectRatio="xMinYMin meet"
              fill="currentColor"
              stroke="none"
            >
              <path
                d="M27.61,11.07V27.32a3.88,3.88,0,0,1-1.18,2.88,3.93,3.93,0,0,1-2.88,1.19H3.23V20.56H10V26H20.85V11.07Z"
                transform="translate(-3.23 -0.61)"
              />
              <path
                d="M53,11.07a4.06,4.06,0,0,1,4.06,4.06V31.39H50.26V24.63H39.43v6.76H32.67V15.13a4,4,0,0,1,4.07-4.06ZM50.26,19.2V16.5H39.43v2.7Z"
                transform="translate(-3.23 -0.61)"
              />
              <path
                d="M69.1,16.5V26H80v-2H71.13V18.53H86.72V31.39H66.4a3.93,3.93,0,0,1-2.88-1.19,3.88,3.88,0,0,1-1.18-2.88V15.13a4,4,0,0,1,4.06-4.06H86.72V16.5Z"
                transform="translate(-3.23 -0.61)"
              />
              <path
                d="M98.65,16.5v2h14.59v5.39H98.65v2h17.62v5.43H96a3.93,3.93,0,0,1-2.88-1.19,3.88,3.88,0,0,1-1.18-2.88V15.13A4,4,0,0,1,96,11.07h20.32V16.5Z"
                transform="translate(-3.23 -0.61)"
              />
              <path
                d="M141.76,11.07a4,4,0,0,1,4.06,4.06v5.43a3.94,3.94,0,0,1-1.18,2.87,3.9,3.9,0,0,1-2.88,1.2h-1.59l5.65,6.76h-7.06l-5.68-6.76H128.2v6.76h-6.76V11.07Zm-2.7,8.13V16.5H128.2v2.7Z"
                transform="translate(-3.23 -0.61)"
              />
              <path
                d="M165.39,6.5a6.05,6.05,0,1,1-6-5.89A5.92,5.92,0,0,1,165.39,6.5Zm-10.59,0a4.56,4.56,0,0,0,4.59,4.71,4.51,4.51,0,0,0,4.49-4.67,4.54,4.54,0,1,0-9.08,0Zm3.62,3.09h-1.36V3.7a11.71,11.71,0,0,1,2.26-.18,3.7,3.7,0,0,1,2.05.43,1.65,1.65,0,0,1,.57,1.3,1.51,1.51,0,0,1-1.22,1.36v.07a1.76,1.76,0,0,1,1.08,1.44,4.36,4.36,0,0,0,.43,1.47h-1.47a5,5,0,0,1-.47-1.44c-.11-.64-.47-.93-1.22-.93h-.65Zm0-3.34h.64c.76,0,1.37-.25,1.37-.86s-.4-.9-1.26-.9a3.6,3.6,0,0,0-.75.07Z"
                transform="translate(-3.23 -0.61)"
              />
            </svg>
          </div>

          <div className="w-[400px] flex flex-col gap-2">
            <div className="mb-[20px] flex flex-row gap-4 items-center">
              <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
              <p className="text-lg uppercase font-bold font-kanit">
                Stay in the know
              </p>
            </div>
            <form
              action=""
              className="w-full flex flex-row gap-4 items-center justify-between"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="px-[5px] py-[5px] bg-transparent outline-none"
              />
              <motion.button
                animate={{
                  x: ["0px", "10px", "0px"],
                  transition: {
                    duration: 1.75,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
              >
                <HiArrowRight fontSize="1.5rem" />
              </motion.button>
            </form>
            <div className="w-full h-[1px] bg-white"></div>
          </div>
        </div>

        <div className="w-full lg:w-[45%]">
          <p className="w-[70%] lg:w-[80%] text-2xl lg:text-3xl font-bold mb-[150px] font-kanit">
            We collaborate with ambitious brands and people.
          </p>
          <div className="w-full flex flex-row gap-x-32 items-start mb-[80px]">
            <ul className="">
              <li className="font-bold uppercase mb-[30px] font-kanit">
                Social
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
            <ul className="">
              <li className="font-bold uppercase mb-[30px] font-kanit">
                Pages
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[0], e);
                  }}
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[1], e);
                  }}
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[2], e);
                  }}
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[3], e);
                  }}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="w-full">
            <li className="font-bold uppercase mb-[30px] font-kanit">
              Offices
            </li>
            <li>
              <ul className="flex-col flex gap-y-1">
                <li>
                  36539 Virgie Crest, Suite 453, 74343, Streichfort, South
                  Carolina
                </li>
                <li>
                  29871 Turcotte Lodge, Suite 830, 56023, Ernestineton, New York
                </li>
                <li>
                  516 Daisha Walks, Suite 102, 97426, East Gradyfurt, Delaware
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default JagerFooter;
