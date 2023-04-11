import React, { useState, useEffect } from "react";
import Meditation from "./Meditation.jsx";
import { useTimer } from "../hooks/useTimer.js";
// Custom hook for managing timers

const MeditationTimerApp = () => {
    const [meditationIndex, setMeditationIndex] = useState(0);
    const [meditations, setMeditations] = useState([
        { name: "Meditation Technique 1", duration: 300 }, // 5 minutes
        { name: "Meditation Technique 2", duration: 600 }, // 10 minutes
        { name: "Meditation Technique 3", duration: 900 }, // 15 minutes
    ]);

    const meditation = meditations[meditationIndex];

    const onTimerComplete = () => {
        // Move on to the next meditation technique or reset to the first technique
        if (meditationIndex < meditations.length - 1) {
            setMeditationIndex((prevIndex) => prevIndex + 1);
        } else {
            setMeditationIndex(0);
        }
    };

    const { duration, startTimer, pauseTimer, resetTimer } = useTimer(
        meditation.duration,
        onTimerComplete
    );

    const handleStart = () => {
        startTimer();
    };

    const handlePause = () => {
        pauseTimer();
    };

    const handleReset = () => {
        resetTimer();
    };

    return (
        <div>
            <h1>Meditation Timer</h1>
            {
                meditations.map((exercise, index) =>
                    <div key={index}>
                        <Meditation exercise={exercise} onTimerComplete={onTimerComplete} />
                    </div>
                )}
        </div>
    );
};

export default MeditationTimerApp;
