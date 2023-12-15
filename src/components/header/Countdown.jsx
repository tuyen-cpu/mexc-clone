import React, { useState, useEffect } from 'react';

const CountdownT = ({ days, hours, minutes, seconds }) => {
    const calculateTotalSeconds = () => {
        return days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
    };

    const [totalSeconds, setTotalSeconds] = useState(calculateTotalSeconds());

    useEffect(() => {
        const timer = setTimeout(() => {
            if (totalSeconds > 0) {
                setTotalSeconds(totalSeconds - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [totalSeconds]);

    const displayTime = () => {
        let remainingSeconds = totalSeconds;
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        remainingSeconds %= 24 * 60 * 60;
        const hours = Math.floor(remainingSeconds / (60 * 60));
        remainingSeconds %= 60 * 60;
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const { days: remainingDays, hours: remainingHours, minutes: remainingMinutes, seconds: remainingSeconds } =
        displayTime();

    return (
            <>
                {remainingDays}d : {remainingHours}h : {remainingMinutes}m : {remainingSeconds}s
            </>

    );
};
export default CountdownT;