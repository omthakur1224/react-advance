import { useState } from 'react'

import './App.css'
import MyComponent from './components/Timer'
import PomodoroTimerApp from './components/Pomodoro'
import FitnessTimerApp from './components/FitnessTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyComponent />
      <PomodoroTimerApp />
      <FitnessTimerApp />
    </div>
  )
}

export default App
