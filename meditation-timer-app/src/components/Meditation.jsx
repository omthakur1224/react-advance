import React from 'react'
import { useTimer } from '../hooks/useTimer';

const Meditation = ({ exercise, onTimerComplete }) => {
    const { duration, startTimer, pauseTimer, resetTimer } = useTimer(
        exercise.duration,
        onTimerComplete
    );
    return (
        <div>
            <h2>Exercise: {exercise.name}</h2>
            <h3>Time Remaining: {duration} seconds</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Meditation
