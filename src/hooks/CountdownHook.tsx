// Sheet that holds the logic for a countdown timer
// TODO: Should use a library that are timezone-independent

import { useState, useEffect } from 'react';
import { parseDate } from '../utils/Dates';

const useCountDown = (endDate: string, hours = 0, minutes = 0) => {
  const countDownDate = parseDate(endDate).setHours(hours, minutes, 0, 0);

  const [countDown, setCountDown] = useState<number>(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): Array<number> => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountDown };
