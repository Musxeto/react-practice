import React,{useState, useEffect} from 'react'

function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    const startTimer = () => {
      setIsActive(true);
    };
  
    const stopTimer = () => {
      setIsActive(false);
    };
  
    const resetTimer = () => {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setIsActive(false);
    };
  
    useEffect(() => {
      let interval;
  
      if (isActive) {
        interval = setInterval(() => {
          if (seconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            setSeconds(0);
  
            if (minutes === 59) {
              setHours((prevHours) => prevHours + 1);
              setMinutes(0);
            }
          } else {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [isActive, seconds, minutes, hours]);
  
    return (
    <div>
      <h1>Timer</h1>
      <p>{String(hours).padStart(2,'0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
      <div>
        <button className='button-funny' onClick={startTimer}>Start</button>
        <button className='button-funny' onClick={stopTimer}>Stop</button>
        <button className='button-funny' onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
