import '../App.css'

function Button({ isRunning, onClick }) {
  return <button onClick={onClick}>{isRunning ? 'Stop' : 'Start'}</button>
}

export default Button
