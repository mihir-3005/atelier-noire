// components/CountdownTimer.tsx
"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ initialHours = 48 }: { initialHours?: number }) {
    const [timeLeft, setTimeLeft] = useState({ hours: initialHours, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-mono text-3xl md:text-5xl font-light tracking-widest">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
        </div>
    );
}
