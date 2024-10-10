import { useState } from "react";
import { createContext } from "react";
import React from "react";

export const FullscreenImageContext = createContext({});

export const FullscreenImageContextProvider = ({ children }) => {
  const [imageFullscreen, setImageFullscreen] = useState({
    url: "",
    width: 0,
    height: 0
  });
  const [triggerFullscreen, setTriggerFullscreen] = useState(false);

  return (
    <FullscreenImageContext.Provider
      value={{
        imageFullscreen,
        setImageFullscreen,
        triggerFullscreen,
        setTriggerFullscreen,
      }}
    >
      {children}
    </FullscreenImageContext.Provider>
  )
};
