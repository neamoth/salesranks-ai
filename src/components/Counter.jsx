import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 2, start = 0 }) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const rafRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    const endTime = startTime + duration * 1000;

    const updateCount = (currentTime) => {
      if (currentTime >= endTime) {
        setCount(end);
        return;
      }

      const progress = (currentTime - startTime) / (duration * 1000);
      const nextCount = Math.floor(start + progress * (end - start));

      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      rafRef.current = requestAnimationFrame(updateCount);
    };

    rafRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, start]);

  return <div>{count}</div>;
};

export default Counter;
