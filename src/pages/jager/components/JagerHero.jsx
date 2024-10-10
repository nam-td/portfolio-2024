import { motion } from "framer-motion";

function JagerHero() {
  return (
    <div className="w-full container m-auto pt-[80px]">
      <motion.div className="w-full min-h-[500px] xl:h-[calc(100vh-70px)] px-16 overflow-hidden flex flex-row flex-wrap justify-center items-center">
        <img
          src="/jager/banana.png"
          alt="Duct Tapped Banana"
          className="w-full md:w-[50%] lg:w-[40%] max-w-[700px] aspect-square"
        />
        <h3 className="w-full md:w-[60%] lg:w-[45%] text-3xl md:text-4xl xl:text-6xl uppercase font-orbitron font-bold">
          Design for the human touch in a digital world.
        </h3>
      </motion.div>
    </div>
  );
}

export default JagerHero;
