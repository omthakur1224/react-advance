import { useState, useEffect } from 'react';

const useTimer = (initialTime = 0) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        let intervalId;
        if (time > 0) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [time]);

    const startTimer = () => {
        setTime(initialTime);
    };

    const stopTimer = () => {
        setTime(0);
    };

    return { time, startTimer, stopTimer };
};

// Usage
const MyComponent = () => {
    const { time, startTimer, stopTimer } = useTimer(60);

    return (
        <div>
            <h2>Time: {time} seconds</h2>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};
export default MyComponent