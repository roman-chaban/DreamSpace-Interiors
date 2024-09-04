import { useEffect, useState } from 'react';

export const useCountdown = (endDate: Date) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    });
    return () => {
      clearTimeout(timer);
    };
  });

  function getTimeRemaining() {
    const currentTime = new Date();
    let timeDifference = Number(endDate) - Number(currentTime);
    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    let seconds = Math.floor((timeDifference / 1000) % 60);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  return timeRemaining;
};
