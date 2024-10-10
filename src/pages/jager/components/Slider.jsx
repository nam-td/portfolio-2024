import { forwardRef, useEffect, useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const projects = [
  {
    id: 1,
    name: "Project 1",
    category: "Branding",
    year: 2024,
    imagePath: "/jager/project-1.jpg",
  },
  {
    id: 2,
    name: "Project 2",
    category: "Branding",
    year: 2024,
    imagePath: "/jager/project-2.jpg",
  },
  {
    id: 3,
    name: "Project 3",
    category: "Packaging Design",
    year: 2023,
    imagePath: "/jager/project-3.jpg",
  },
  {
    id: 4,
    name: "Project 4",
    category: "TV Commercial",
    year: 2023,
    imagePath: "/jager/project-4.jpg",
  },
  {
    id: 5,
    name: "Project 5",
    category: "Branding",
    year: 2022,
    imagePath: "/jager/project-5.jpg",
  },
];

function FullscreenModal(props) {
  const { project, toggleModal, setToggleModal } = props;
  return (
    <AnimatePresence initial={true}>
      {toggleModal && (
        <motion.div
          className="fixed top-0 bottom-0 left-0 flex flex-col justify-start items-center w-full h-full max-h-[100%] bg-neutral-950/90 z-50 overflow-y-scroll overscroll-contain"
          data-lenis-prevent
          initial={{ opacity: 0, x: 150 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.05, duration: 0.7, ease: "anticipate" },
          }}
          exit={{
            opacity: 0,
            x: -150,
            transition: { duration: 0.7, ease: "anticipate" },
          }}
        >
          <div className="w-full max-w-[750px] p-6 flex flex-col gap-12">
            <div className="w-full flex flex-row justify-between items-center">
              <h3 className="text-2xl text-neutral-200 uppercase">
                {project.name}
              </h3>
              <span
                onClick={() => {
                  setToggleModal(false);
                }}
                className="text-neutral-200 cursor-pointer"
              >
                <IoClose size={28} />
              </span>
            </div>
            <img src={project.imagePath} alt={project.name} />
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio obcaecati assumenda praesentium officia illum atque ab,
              tenetur consequuntur dolorum voluptatibus magnam doloremque
              commodi ea quos eos harum! Non deserunt beatae, itaque pariatur
              eos ad tempore odit? A omnis earum aut voluptatum obcaecati
              voluptatem molestias enim fugiat, placeat eum corrupti illo vero
              vel, quasi deleniti et facere ut autem debitis, maxime incidunt
              hic reiciendis fuga nulla? Placeat, eius impedit. Eos, laudantium?
              Amet beatae laboriosam eaque numquam quidem suscipit, mollitia
              quisquam natus esse architecto repellendus voluptatem accusamus
              deserunt delectus ullam? Minima numquam consequatur architecto
              beatae, repudiandae recusandae rem eaque quos adipisci quae?
            </p>
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur culpa maiores omnis error saepe iste quidem provident.
              Cum quam at beatae voluptate incidunt enim tenetur, inventore
              excepturi. Unde exercitationem commodi aliquid pariatur labore
              laborum officia obcaecati adipisci, blanditiis rem odit a iste quo
              ipsa? Quia esse cum odit tempore!
            </p>
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur culpa maiores omnis error saepe iste quidem provident.
              Cum quam at beatae voluptate incidunt enim tenetur, inventore
              excepturi. Unde exercitationem commodi aliquid pariatur labore
              laborum officia obcaecati adipisci, blanditiis rem odit a iste quo
              ipsa? Quia esse cum odit tempore!
            </p>
            <p className="text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              pariatur culpa maiores omnis error saepe iste quidem provident.
              Cum quam at beatae voluptate incidunt enim tenetur, inventore
              excepturi. Unde exercitationem commodi aliquid pariatur labore
              laborum officia obcaecati adipisci, blanditiis rem odit a iste quo
              ipsa? Quia esse cum odit tempore!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Slide = (props) => {
  const { project, isVisible } = props;
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: 0.25, duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.8,
              transition: { duration: 0.5, ease: "anticipate" },
            }}
            className="w-full aspect-video absolute  top-0 left-0 overflow-hidden flex justify-center items-center rounded-sm"
          >
            <img
              src={project.imagePath}
              alt=""
              className="max-w-none w-full h-full object-cover"
            />
            <motion.button
              onClick={() => {
                setToggleModal(true);
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.75 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.5, ease: "anticipate" },
              }}
              className="absolute p-2 bottom-0 left-0 z-40 flex flex-row gap-2 items-center  text-white rounded-sm bg-neutral-950/30"
            >
              <RxOpenInNewWindow size={24} />
            </motion.button>
          </motion.div>
          <FullscreenModal
            project={project}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        </>
      )}
    </AnimatePresence>
  );
};
const Title = (props) => {
  const { project, isVisible } = props;
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: "anticipate" },
          }}
          className="w-full absolute top-0 left-0"
        >
          {project.name}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
const Subtitle = (props) => {
  const { project, isVisible } = props;
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: "anticipate" },
          }}
          className="w-full absolute top-0 right-0 text-right"
        >
          {project.category}
        </motion.p>
      )}
    </AnimatePresence>
  );
};
const Year = (props) => {
  const { project, isVisible } = props;
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 5,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: "anticipate" },
          }}
          className="w-full text-right leading-0"
        >
          {project.year}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

const Slider = forwardRef(function Slider(props, ref) {
  const [index, setIndex] = useState(0);

  const setIndexes = () => {
    if (index < 4) {
      setIndex(index + 1);
    }
    if (index >= 4) {
      setIndex(0);
    }
  };

  return (
    <div
      ref={ref}
      className="container h-screen xl:max-h-[900px] mx-auto my-[100px] p-4 flex flex-row justify-center items-center relative"
    >
      <div className="w-[450px] lg:w-[650px] aspect-video relative lg:p-12">
        {projects.map((project, i) => (
          <Slide
            project={project}
            isVisible={index === i ? true : false}
            key={project.id}
          />
        ))}
      </div>
      <div className="absolute bottom-[40px] px-4 z-10 w-full flex flex-row justify-between items-center gap-2 sm:gap-2">
        <div className="w-[58px] h-[38px] overflow-hidden relative text-base lg:text-xl text-neutral-800">
          {projects.map((project, i) => (
            <Year
              project={project}
              isVisible={index === i ? true : false}
              key={`year-${project.id}`}
            />
          ))}
        </div>
        <span className="w-full h-[1px] bg-neutral-500"></span>
        <span
          onClick={setIndexes}
          className="cursor-pointer block p-2 rounded-full border border-neutral-800"
        >
          <HiOutlineArrowLongRight size={20} />
        </span>
      </div>
      <div className="absolute top-[120px] px-4 z-10 w-full flex flex-row justify-between items-center">
        <div className="w-[200px] h-[40px] text-2xl lg:text-4xl font-bold font-kanit uppercase overflow-hidden relative">
          {projects.map((project, i) => (
            <Title
              project={project}
              isVisible={index === i ? true : false}
              key={`title-${project.id}`}
            />
          ))}
        </div>
        <div className="w-[170px] h-[24px] overflow-hidden text-sm lg:text-base relative">
          {projects.map((project, i) => (
            <Subtitle
              project={project}
              isVisible={index === i ? true : false}
              key={`category-${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Slider;
