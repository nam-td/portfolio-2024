import React from "react";

const CounterBlock = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] m-auto min-h-[140px] px-2 flex justify-between">
        <div className="counter-1 w-[33.33%] py-[2rem] text-white bg-gray-400 flex flex-col gap-1 items-center">
          <p className="w-[80%] text-center font-kanit text-2xl font-bold tracking-wider xs:text-3xl 3cols:text-4xl 4cols:text-6xl">10</p>
          <div className="divider w-[80%] h-[1px] bg-white md:w-[60%] 4cols:w-[50%]"></div>
          <p className="w-[80%] text-center font-abel text-sm text-gray-200 xs:text-md 3cols:text-lg 4cols:text-2xl">years</p>
        </div>
        <div className="counter-1 w-[33.33%] py-[2rem] text-white bg-gray-500 flex flex-col gap-1 items-center">
          <p className="w-[80%] text-center font-kanit text-2xl font-bold tracking-wider xs:text-3xl 3cols:text-4xl 4cols:text-6xl">1077</p>
          <div className="divider w-[80%] h-[1px] bg-white md:w-[60%] 4cols:w-[50%]"></div>
          <p className="w-[80%] text-center font-abel text-sm text-gray-200 xs:text-md 3cols:text-lg 4cols:text-2xl">
            projects finished
          </p>
        </div>
        <div className="counter-1 w-[33.33%] py-[2rem] text-white bg-gray-600 flex flex-col gap-1 items-center">
          <p className="w-[80%] text-center font-kanit text-2xl font-bold tracking-wider xs:text-3xl 3cols:text-4xl 4cols:text-6xl">174</p>
          <div className="divider w-[80%] h-[1px] bg-white md:w-[60%] 4cols:w-[50%]"></div>
          <p className="w-[80%] text-center font-abel text-sm  text-gray-200 xs:text-md 3cols:text-lg 4cols:text-2xl">
            clients
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1440px] m-auto px-2 mb-12">
        <p className="w-full py-2 text-center font-abel text-white bg-gray-800 xs:text-md 3cols:text-lg 4cols:text-2xl">and still counting...</p>
      </div>
    </>
  );
};

export default CounterBlock;
