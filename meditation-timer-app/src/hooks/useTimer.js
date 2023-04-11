import { useState,useEffect } from 'react'
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
