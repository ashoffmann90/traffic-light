import React, { useEffect, useState } from 'react'
import './TrafficLight.css'

function TrafficLight({activeLight}) {
  

  return (
    <div className="light-container">
      <div
        className="light"
        id={activeLight === "red" ? "red-light-on" : "red-light-off"}
      ></div>
      <div
        className="light"
        id={activeLight === "yellow" ? "yellow-light-on" : "yellow-light-off"}
      ></div>
      <div
        className="light"
        id={activeLight === "green" ? "green-light-on" : "green-light-off"}
      ></div>
    </div>
  );
}

export default TrafficLight