import React, { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight/TrafficLight";
import { RED, YELLOW, GREEN } from "../constants";

function TrafficLights({ isRunning }) {
  const [activeLight, setActiveLight] = useState(RED);

  useEffect(() => {
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        let nextActiveLight;
        if (activeLight === RED) {
          nextActiveLight = GREEN;
        } else if (activeLight === GREEN) {
          nextActiveLight = YELLOW;
        } else if (activeLight === YELLOW) {
          nextActiveLight = RED;
        }
        setActiveLight(nextActiveLight);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [activeLight, isRunning]);

  return (
    <div>
      <TrafficLight activeLight={activeLight} />
    </div>
  );
}

export default TrafficLights;
