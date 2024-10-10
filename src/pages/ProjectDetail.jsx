import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Serum - Advanced Wavetable Synthesizer",
    url: "serum",
    sourcode: 'https://github.com/nam-td/serum-synth-landingpage',
    techstack: ["react", "gsap", "threejs", "three fiber"],
    imgURL: [
      "/preview/serum-desktop-1.png",
      "/preview/serum-desktop-2.png",
      "/preview/serum-desktop-3.png",
      "/preview/serum-desktop-4.png",
      "/preview/serum-mobile-1.png",
      "/preview/serum-mobile-2.png",
      "/preview/serum-mobile-3.png",
    ],
  },
  {
    id: 2,
    name: "Young - Record Label",
    url: "record-label",
    sourcode: 'https://github.com/nam-td/record-label-landingpage',
    techstack: ["react", "gsap"],
    imgURL: [
        "/preview/record-label-desktop-1.png",
        "/preview/record-label-desktop-2.png",
        "/preview/record-label-mobile-1.png",
        "/preview/record-label-mobile-2.png",
      ],
  },
  {
    id: 3,
    name: "Jager - Digital Agency",
    url: "jager",
    sourcode: 'https://github.com/nam-td/digital-agency-landingpage',
    techstack: ["react", "framer motion"],
    imgURL: [
        "/preview/jager-desktop-1.png",
        "/preview/jager-desktop-2.png",
        "/preview/jager-desktop-3.png",
        "/preview/jager-mobile-1.png",
        "/preview/jager-mobile-2.png",
        "/preview/jager-mobile-3.png",
        "/preview/jager-mobile-4.png",
      ],
  },
  {
    id: 4,
    name: "Apexx - Archviz Studio",
    url: "apexx-studio",
    sourcode: 'https://github.com/nam-td/apexx-studio-landingpage',
    techstack: ["react", "gsap"],
    imgURL: [
        "/preview/apexx-desktop-1.png",
        "/preview/apexx-desktop-2.png",
        "/preview/apexx-mobile-1.png",
        "/preview/apexx-mobile-2.png",
        "/preview/apexx-mobile-3.png",
        "/preview/apexx-mobile-4.png",
        "/preview/apexx-mobile-5.png",
      ],
  },
];

const ProjectDetail = () => {
  const { projectURL } = useParams();
  const [project, setProject] = useState(null);
  const location = useLocation();

  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].url === projectURL) {
        setProject(projects[i]);
      }
    }
  }, []);
  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].url === projectURL) {
        setProject(projects[i]);
      }
    }
  }, [location, project]);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] py-12 flex flex-row justify-center items-center text-gray-200">
      {project !== null && (
        <div className="w-full max-w-[1000px] p-4 flex flex-col gap-y-2 items-center">
          <img
            src={project.imgURL[0]}
            alt={project.name}
            className="md:max-w-[800px] mb-4"
          />
          <div className="w-full mb-8 flex flex-row justify-center gap-x-4">
            <Link to={project.sourcode} className="px-4 py-2 bg-gray-800 rounded-full">Source Code</Link>
            <Link to={`/livedemo/${project.url}`} className="px-4 py-2 bg-blue-500 rounded-full">Live Demo</Link>
          </div>
          <h4 className="max-w-[600px] mb-8 text-3xl font-bold text-center md:text-5xl text-gray-300">
            {project.name}
          </h4>
          <ul className="w-full flex flex-row flex-wrap gap-x-2 gap-y-4 items-center justify-center text-sm md:text-base text-gray-500">
            <p>Build with:</p>
            {project?.techstack.map((tech) => (
              <li
                key={tech}
                className="px-4 py-1 border border-gray-500 rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="max-w-[500px] mb-8 text-center text-amber-600 text-sm">
            This is a mock project. All the information is either fictional or
            not associated with any real business.
          </span>
          <ul className="w-full flex flex-row flex-wrap gap-y-16 gap-x-4 lg:gap-16 justify-center items-center">
            {project.imgURL.map((img, i) => {
              const isMobile = img.includes("mobile");
              if (i > 0)
                return (
                  <li
                    key={i}
                    className={`${
                      isMobile
                        ? "h-[300px] sm:h-[400px] md:w-[280px] md:h-auto"
                        : "w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] md:w-[75%]"
                    } overflow-hidden`}
                  >
                    <img
                      src={img}
                      alt={project.name}
                      className={`${isMobile ? "h-full" : ""}`}
                    />
                  </li>
                );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
