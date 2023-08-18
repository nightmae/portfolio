import { useEffect, useState } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <p>
      {seconds} seconds
    </p>
  );
};

export default Countdown;
