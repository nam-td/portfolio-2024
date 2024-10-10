import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiGreensock } from "react-icons/si";

const About = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-center items-center text-gray-300 text-lg">
      <div className="w-full max-w-[650px] p-8 flex flex-col gap-y-8">
        <p>
          Hi there, I&apos;m Nam. You can also call me Nate. Being a front-end web developer
          with a background in graphic design, I&apos;m passionate about building and
          delivering not only properly{" "}
          <span className="font-bold text-blue-400">functioning</span>{" "}
          experience on the web but also exciting{" "}
          <span className="font-bold text-blue-400">interactive</span>{" "}
          experience.{" "}
        </p>

        <p>The technologies I&apos;m familiar with: </p>

        <ul className="flex flex-col gap-y-4">
          <li className="flex flex-row gap-x-3 items-center text-sky-500">
            <span>
              <FaReact size={32}/>
            </span>
            <span>React JS</span>
          </li>

          <li className="flex flex-row gap-x-3 items-center">
            <span>
              <SiThreedotjs size={28}/>
            </span>
            <span>Three JS</span>
          </li>
          <li className="flex flex-row gap-x-3 items-center text-sky-400">
            <span>
              <SiTailwindcss size={32}/>
            </span>
            <span>Tailwind CSS</span>
          </li>
          <li className="flex flex-row gap-x-3 items-center text-green-500">
            <span>
              <SiGreensock size={32}/>
            </span>
            <span>GSAP</span>
          </li>
          <li className="flex flex-row gap-x-3 items-center">
            <span>
              <SiFramer size={28}/>
            </span>
            <span>Framer Motion</span>
          </li>
        </ul>

        <p>
          If you&apos;re in need of a new landing page for your business or marketing
          campaign. Don&apos;t hesitate to <span className= "text-blue-400">reach out</span>. I also offer consultant and
          design service as well.
        </p>
      </div>
    </div>
  );
};

export default About;
