import { useEffect, useRef, useState } from "react";
import { useAnimate, useInView, stagger } from "framer-motion";
import ClientLogo1 from "/jager/client-01.svg";
import ClientLogo2 from "/jager/client-02.svg";
import ClientLogo3 from "/jager/client-03.svg";
import ClientLogo4 from "/jager/client-04.svg";
import ClientLogo5 from "/jager/client-05.svg";
import ClientLogo6 from "/jager/client-06.svg";

function ClientList() {
  const [AnimTrigger, setAnimTrigger] = useState(false);
  const inview = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(inview);

  async function initialAnimation() {
    if (isInView === true && AnimTrigger === false) {
      animate([
        [
          "img",
          { opacity: [0, 1] },
          { duration: 1.5, delay: stagger(0.15), ease: "anticipate" },
        ],
      ]);
      setAnimTrigger(true);
    }
  }

  useEffect(() => {
    initialAnimation();
  }, [isInView]);
  return (
    <div className="w-full m-auto" ref={scope}>
      <div className="container m-auto my-[100px] px-4 " ref={inview}>
        <div className="flex flex-row gap-2 items-center">
          <h1 className="text-zinc-700 text-3xl leading-[0.8]">We Work With</h1>
        </div>
        <div className="w-full py-[100px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo1} alt="Client 1" className="" />
          </div>
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo2} alt="Client 2" className="" />
          </div>
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo3} alt="Client 3" className="" />
          </div>
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo4} alt="Client 4" className="" />
          </div>
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo6} alt="Client 6" className="" />
          </div>
          <div className="aspect-square flex flex-row justify-center items-center">
            <img src={ClientLogo5} alt="Client 5" className="" />
          </div>
        </div>
        <div className="divider w-full h-[1px] bg-black"></div>
      </div>
      <div className="container m-auto my-[100px] px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="card p-6 drop-shadow-md bg-gray-100">
            <div className="client flex flex-row gap-4 items-center">
              <div className="avt w-[60px] aspect-square">
                <img
                  src="/jager/client-1.jpg"
                  alt="client profile picture"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-0">
                <p className="font-bold text-lg">Sarah Davis</p>
                <p className="text-sm">Director, Super Food</p>
              </div>
            </div>
            <p className="mt-6 text-2xl">
              &quot;The team were very punctual, worked well with our busy
              schedule and were always on top&quot;.
            </p>
          </div>

          <div className="card p-6 drop-shadow-md bg-gray-100">
            <div className="client flex flex-row gap-4 items-center">
              <div className="avt w-[60px] aspect-square">
                <img
                  src="/jager/client-2.jpg"
                  alt="client profile picture"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-0">
                <p className="font-bold text-lg">Alicia Hart</p>
                <p className="text-sm">
                  Former Director of Marketing & Partnerships, In Motion
                </p>
              </div>
            </div>
            <p className="mt-6 text-2xl">
              &quot;They provided their own creative insights but still listened
              to our company&apos;s goals.&quot;.
            </p>
          </div>

          <div className="card p-6 drop-shadow-md bg-gray-100">
            <div className="client flex flex-row gap-4 items-center">
              <div className="avt w-[60px] aspect-square">
                <img
                  src="/jager/client-3.jpg"
                  alt="client profile picture"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-0">
                <p className="font-bold text-lg">Steven Collins</p>
                <p className="text-sm">CTO, Abstract</p>
              </div>
            </div>
            <p className="mt-6 text-2xl">
              &quot;Their communication and flexibility as changes came up are
              the most impressive.&quot;.
            </p>
          </div>

          <div className="card p-6 drop-shadow-md bg-gray-100">
            <div className="client flex flex-row gap-4 items-center">
              <div className="avt w-[60px] aspect-square">
                <img
                  src="/jager/client-4.jpg"
                  alt="client profile picture"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-y-0">
                <p className="font-bold text-lg">Harry Stewards</p>
                <p className="text-sm">Former CMO, Invision Square</p>
              </div>
            </div>
            <p className="mt-6 text-2xl">
              &quot;They listen to our comments and always try to find a
              solution for both sides.&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientList;
