import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { GoScreenFull } from "react-icons/go";

const Card = ({ id, imagePath, windowWidth, windowHeight, cardRef }) => {
  const thumbnail = useRef();

  const [displayFull, setDislayFull] = useState(false);
  const [displayFullStyle, setDisplayFullStyle] = useState("");
  const [imageRatio, setImageRatio] = useState("");
  const [clippingWidth, setClippingWidth] = useState(null);
  const [clippingHeight, setClippingHeight] = useState(null);

  function setClippingDimension() {
    setClippingWidth(thumbnail.current.naturalWidth);
    setClippingHeight(thumbnail.current.naturalHeight);
  }

  function checkImageRatio() {
    if (thumbnail.current.naturalWidth == thumbnail.current.naturalHeight)
      setImageRatio("square");
    if (thumbnail.current.naturalWidth > thumbnail.current.naturalHeight)
      setImageRatio("landscape");
    if (thumbnail.current.naturalWidth < thumbnail.current.naturalHeight)
      setImageRatio("portrait");
  }

  function generateImageStyle() {
    if (windowWidth < windowHeight) {
      if (imageRatio === "square" || imageRatio === "landscape")
        setDisplayFullStyle("w-full");
      if (imageRatio === "portrait")
        setDisplayFullStyle("h-[80%]");
    }
    if (windowWidth > windowHeight) {
      if (imageRatio === "square" || imageRatio === "portrait")
        setDisplayFullStyle("h-[90%]");
      if (imageRatio === "landscape")
        setDisplayFullStyle("w-[80%]");
    }
  }

  useEffect(() => {
    setClippingDimension();
    checkImageRatio();
  }, []);

  useEffect(() => {
    generateImageStyle();
  }, [imageRatio]);

  useEffect(() => {
    generateImageStyle();
  }, [windowWidth, windowHeight]);

  return (
    <>
      <div
        className="card overflow-hidden w-full pb-2 flex flex-col gap-1 border-b border-b-gray-300"
        ref={cardRef}
      >
        <Link
          to="#"
          className={`thumbnail-clipping w-full aspect-[${clippingWidth} / ${clippingHeight}] relative overflow-hidden rounded group`}
          onClick={() => {
            setDislayFull(true);
          }}
        >
          <img
            src={imagePath}
            alt="architecture visualization work"
            className="thumbnail w-full"
            ref={thumbnail}
          />

          <div className="overlay opacity-0 pointer-events-none w-full h-full absolute left-0 top-0 z-50 bg-gray-900/70 text-white flex justify-center items-center group-hover:opacity-100 transition-all duration-1000 ease-in-out">
            <GoScreenFull className="text-xl text-gray-300" />
          </div>
        </Link>
      </div>
      <div
        className={`display-full w-screen h-screen fixed z-500 top-0 left-0 bottom-0 right-0 bg-black/80 flex justify-center items-center text-white  ${
          !displayFull
            ? "opacity-0 pointer-events-none"
            : "opacity-1 pointer-events-auto"
        } transition-all duration-1000 ease-out`}
        onClick={() => {
          setDislayFull(false);
        }}
      >
        <img
          src={imagePath}
          alt="architecture visualization work"
          className={displayFullStyle}
        />
      </div>
    </>
  );
};

export default Card;
