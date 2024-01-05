import React from 'react'
import Light from './Light'
import '../App.css'
import { COLORS } from '../constants'

function TrafficLight({ activeLight }) {
  return (
    <div className='light-container'>
      <Light
        color={COLORS.RED}
        activeLight={activeLight}
      />
      <Light
        color={COLORS.YELLOW}
        activeLight={activeLight}
      />
      <Light
        color={COLORS.GREEN}
        activeLight={activeLight}
      />
    </div>
  )
}

export default TrafficLight
