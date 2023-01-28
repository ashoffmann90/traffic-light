import React, { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";

function TrafficLights() {
  const [activeLight, setActiveLight] = useState("red");

  // // TODO
  // // pick active light
  // const changeLight = () => {
  //   let nextActiveLight;
  //   // if red, to green
  //   // if green, to yellow
  //   // if yellow, to red
  //   if (activeLight === "red") {
  //     nextActiveLight = "green";
  //   } else if (activeLight === "green") {
  //     nextActiveLight = "yellow";
  //   } else if (activeLight === "yellow") {
  //     nextActiveLight = "red";
  //   }
  //   setActiveLight(nextActiveLight)
  //   console.log('next', nextActiveLight)
  // };

  // useEffect(() => {
  //   setInterval(changeLight, 2000)
  // },[])

  // Above code caused flickering and did caused constant firing of setInterval

  
  useEffect(() => {
    const interval = setInterval(() => {
      let nextActiveLight
      if (activeLight === "red") {
        nextActiveLight = "green";
      } else if (activeLight === "green") {
        nextActiveLight = "yellow";
      } else if (activeLight === "yellow") {
        nextActiveLight = "red";
      }
      setActiveLight(nextActiveLight);
      console.log("next", nextActiveLight);
    }, 2000)
    return () => clearInterval(interval)
  }, [activeLight])

  return (
    <div>
      <TrafficLight activeLight={activeLight} />
    </div>
  );
}

export default TrafficLights;
