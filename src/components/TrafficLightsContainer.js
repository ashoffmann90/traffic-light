import React, { useEffect, useState, useMemo } from 'react'
import TrafficLight from './TrafficLight'
import { COLORS } from '../constants'

function TrafficLights({ isRunning }) {
  let lightOrder = useMemo(() => [COLORS.GREEN, COLORS.YELLOW, COLORS.RED], [])
  const [activeLightIndex, setActiveLightIndex] = useState(0)

  // REFACTOR
  useEffect(() => {
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        if (activeLightIndex <= lightOrder.length - 1) {
          setActiveLightIndex(activeLightIndex + 1)
        }
        if (activeLightIndex === lightOrder.length - 1) {
          setActiveLightIndex(0)
        }
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [activeLightIndex, isRunning, lightOrder])

  // ORIGINAL
  // useEffect(() => {
  //   if (isRunning) {
  //     const timeoutId = setTimeout(() => {
  //       let nextActiveLight
  //       if (activeLight === RED) {
  //         nextActiveLight = GREEN
  //       } else if (activeLight === GREEN) {
  //         nextActiveLight = YELLOW
  //       } else if (activeLight === YELLOW) {
  //         nextActiveLight = RED
  //       }
  //       setActiveLight(nextActiveLight)
  //     }, 1000)
  //     return () => clearTimeout(timeoutId)
  //   }
  // }, [activeLight, isRunning])

  return (
    <div>
      <TrafficLight activeLight={lightOrder[activeLightIndex]} />
    </div>
  )
}

export default TrafficLights
