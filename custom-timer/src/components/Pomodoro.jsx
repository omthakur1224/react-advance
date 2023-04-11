import React, { useState, useEffect, useRef } from 'react';

const useTimer = (initialTime = 0, interval = 1000) => {
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(initialTime);
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime - interval / 1000);
            }, interval);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning, interval]);

    return { time, isRunning, startTimer, pauseTimer, resetTimer };
};

const PomodoroTimerApp = () => {
    const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutes in seconds
    const [breakDuration, setBreakDuration] = useState(5 * 60); // 5 minutes in seconds

    const {
        time,
        isRunning,
        startTimer,
        pauseTimer,
        resetTimer
    } = useTimer(workDuration);

    const toggleTimer = () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    };

    const resetPomodoro = () => {
        resetTimer();
        setWorkDuration(25 * 60);
        setBreakDuration(5 * 60);
    };

    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <p>Work Duration: {workDuration / 60} minutes</p>
            <p>Break Duration: {breakDuration / 60} minutes</p>
            <p>Time Remaining: {time.toFixed(0)} seconds</p>
            <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
            <button onClick={resetPomodoro}>Reset</button>
        </div>
    );
};

export default PomodoroTimerApp;
