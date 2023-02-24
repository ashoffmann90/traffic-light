import React from 'react'
import Light from './Light';
import './TrafficLight.css'

function TrafficLight({activeLight}) {
  

  return (
    <div className="light-container">
      <Light color='red' activeLight={activeLight} />
      <Light color='yellow' activeLight={activeLight} />
      <Light color='green' activeLight={activeLight} />
    </div>
  );
}

export default TrafficLight