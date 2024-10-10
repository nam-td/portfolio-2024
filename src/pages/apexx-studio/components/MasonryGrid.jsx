import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import Card from "./Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const MasonryGrid = (props) => {
  let columnContainer = [];

  const cols = parseInt(props.columns);

  const cardRefs = useRef(new Array());

  const defaultDimensions = { width: null, height: null };
  const [windowDimensions, setWindowDimensions] = useState(defaultDimensions);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const el = useRef();
  const tl = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {});

  useEffect(() => {
    setWindowDimensions(getWindowDimensions);

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  for (let i = 0; i < cols; i++) {
    let temp = [];
    columnContainer.push(temp);
  }
  for (let i = 0; i < props.data.length; i++) {
    const column = i % props.columns;
    let temp = [props.data[i]];
    columnContainer[column] = [...columnContainer[column], ...temp];
  }
  
  if (columnContainer.length !== 0) {
    return (
      <div id="work" className="max-w-[1440px] m-auto mt-12 px-2 4cols:px-4 mb-40">
        <h1 className="mb-6 4cols:mb-8 font-kanit text-2xl font-bold text-gray-500 border-b border-gray-500">
          OUR WORK
        </h1>
        <div
          ref={el}
          className="w-full flex flex-row flex-wrap justify-center items-start gap-4 overflow-hidden"
        >
          {columnContainer.map((column, index) => (
            <div
              key={index}
              className="w-[calc((100%_-_1.5rem)/2)] 3cols:w-[calc((100%_-_2rem)/3)] 4cols:w-[calc((100%_-_4rem)/4)] flex flex-col gap-2 justify-start"
            >
              {column.map((image) => {
                return (
                  <Card
                    key={image.id}
                    id={image.id}
                    cardRef={(el) => (cardRefs.current[image.id] = el)}
                    imagePath={image.path}
                    windowWidth={windowDimensions.width}
                    windowHeight={windowDimensions.height}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MasonryGrid;
