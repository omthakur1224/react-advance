import React, { useState, useEffect } from "react";
import Fitness from "./Fitness";
// Custom hook for managing timers
export const useTimer = (initialDuration, onTimerComplete) => {
    const [duration, setDuration] = useState(initialDuration);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isActive) {
            intervalId = setInterval(() => {
                setDuration((prevDuration) => prevDuration - 1);
            }, 1000);
        }

        if (duration === 0) {
            setIsActive(false);
            onTimerComplete();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive, duration, onTimerComplete]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setDuration(initialDuration);
    };

    return {
        duration,
        startTimer,
        pauseTimer,
        resetTimer,
    };
};

const FitnessTimerApp = () => {
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exercises, setExercises] = useState([
        { name: "Exercise 1", duration: 10 },
        { name: "Exercise 2", duration: 20 },
        { name: "Exercise 3", duration: 15 },
    ]);

    const exercise = exercises[exerciseIndex];

    const onTimerComplete = () => {
        if (exerciseIndex < exercises.length - 1) {
            setExerciseIndex((prevIndex) => prevIndex + 1);
        } else {
            setExerciseIndex(0);
        }
    };

    const { duration, startTimer, pauseTimer, resetTimer } = useTimer(
        exercise.duration,
        onTimerComplete
    );

    return (
        <div>
            <h1>Fitness Timer</h1>
            {
                exercises.map((exercise, index) =>
                    <div key={index}>
                        <Fitness exercise={exercise} onTimerComplete={onTimerComplete} />
                    </div>
                )}
        </div >
    );
};

export default FitnessTimerApp;
