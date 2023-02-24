import React, { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";

function TrafficLights({isRunning}) {
  const [activeLight, setActiveLight] = useState("red");
  
  useEffect(() => {
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        let nextActiveLight
        if (activeLight === "red") {
          nextActiveLight = "green";
        } else if (activeLight === "green") {
          nextActiveLight = "yellow";
        } else if (activeLight === "yellow") {
          nextActiveLight = "red";
        }
        setActiveLight(nextActiveLight);
        // console.log("next", nextActiveLight);
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [activeLight, isRunning])

  return (
    <div>
      <TrafficLight activeLight={activeLight} />
    </div>
  );
}

export default TrafficLights;
