import {useState} from 'react'
import './App.css'
import TrafficLights from './components/TrafficLights';
import Button from './components/Button/Button';

function App() {
  const [isRunning, setIsRunning] = useState(true)
  
  const onClick = (e) => {
    setIsRunning(!isRunning)
  }

  return (
    <div className="App">
      <TrafficLights isRunning={isRunning} />
      <Button onClick={onClick} isRunning={isRunning}/>
    </div>
  );
}

export default App;
