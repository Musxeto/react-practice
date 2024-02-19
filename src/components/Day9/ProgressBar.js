import React, { useState, useEffect } from 'react';

function ProgressBar({ duration }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
      }, duration / 100);
    }

    return () => clearInterval(interval);
  }, [progress, duration]);

  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: 'azure',
          transition: 'width 0.3s ease-in-out',
        }}
      ></div>
      <h3>{progress}% Completed</h3>
    </div>
  );
}

export default ProgressBar;
