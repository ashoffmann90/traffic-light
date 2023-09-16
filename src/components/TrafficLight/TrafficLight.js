import React from 'react'
import Light from '../Light'
import './TrafficLight.css'
import { GREEN, RED, YELLOW } from '../../constants'

function TrafficLight({ activeLight }) {
  return (
    <div className='light-container'>
      <Light
        color={RED}
        activeLight={activeLight}
      />
      <Light
        color={YELLOW}
        activeLight={activeLight}
      />
      <Light
        color={GREEN}
        activeLight={activeLight}
      />
    </div>
  )
}

export default TrafficLight
