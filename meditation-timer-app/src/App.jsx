import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MeditationTimerApp from './components/MeditationTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MeditationTimerApp />
    </div>
  )
}

export default App
