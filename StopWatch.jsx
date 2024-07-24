import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    // side-effect
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h3>Timer: {count}</h3>
      <div onClick={handleStart}>Start</div>
      <div onClick={handleStop}>Stop</div>
    </div>
  );
};

export default StopWatch;
