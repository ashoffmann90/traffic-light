import React from 'react'

function Button({isRunning, onClick}) {

  return (
    <button onClick={onClick}>
      {isRunning ? 'Stop' : 'Start'}
    </button>
  )
}

export default Button