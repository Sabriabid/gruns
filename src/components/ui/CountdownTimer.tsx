"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value }: { value: number }) {
  const str = String(value).padStart(2, "0");
  return (
    <span className="inline-flex gap-0.5">
      {str.split("").map((d, i) => (
        <span
          key={i}
          className="bg-brand-dark text-white w-6 h-8 inline-flex items-center justify-center rounded text-sm font-bold"
        >
          {d}
        </span>
      ))}
    </span>
  );
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-brand-dark">
      <Digit value={time.days} />
      <span><span className="hidden sm:inline">Jours</span><span className="sm:hidden">J</span></span>
      <Digit value={time.hours} />
      <span><span className="hidden sm:inline">Heures</span><span className="sm:hidden">H</span></span>
      <Digit value={time.minutes} />
      <span><span className="hidden sm:inline">Min</span><span className="sm:hidden">M</span></span>
      <Digit value={time.seconds} />
      <span><span className="hidden sm:inline">Sec</span><span className="sm:hidden">S</span></span>
    </div>
  );
}
