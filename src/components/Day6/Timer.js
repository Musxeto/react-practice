import React,{useState, useEffect} from 'react'

function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [speed, setSpeed] = useState(1);
    
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
      setSpeed(1);
    };
  
    const speedUp = () => {
        if (speed === 1) {
        setSpeed(2);
        }
        else if(speed === 32){
            setSpeed(1);
        }
        else{
            setSpeed(speed*2);
        }
    };

    useEffect(() => {
        let interval;
      
        // Check if the timer is active
        if (isActive) {
          // Set up an interval to update the timer every second
          interval = setInterval(() => {
            // Calculate the new value for seconds by adding the speed
            let newSeconds = seconds + speed;
      
            // Check if the new seconds exceed 60
            if (newSeconds >= 60) {
              // If yes, update minutes by adding the whole minutes
              setMinutes((prevMinutes) => prevMinutes + Math.floor(newSeconds / 60));
              // Update seconds to the remainder after converting excess seconds to minutes
              newSeconds %= 60;
            }
      
            // Check if the total minutes exceed 60
            if (minutes >= 60) {
              // If yes, update hours by adding the whole hours
              setHours((prevHours) => prevHours + Math.floor(minutes / 60));
              // Update minutes to the remainder after converting excess minutes to hours
              setMinutes(minutes % 60);
            }
      
            // Update the seconds state with the new value
            setSeconds(newSeconds);
          }, 1000); // Run the interval every 1000 milliseconds (1 second)
        }
      
        // Clean up the interval when the component is unmounted or when isActive becomes false
        return () => clearInterval(interval);
      }, [isActive, seconds, minutes, hours, speed]);
      
  
    return (
    <div>
      <h1>Timer</h1>
      <p>{String(hours).padStart(2,'0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
      <div>
        <button className='button-funny' onClick={startTimer}>Start</button>
        <button className='button-funny' onClick={stopTimer}>Stop</button>
        <button className='button-funny' onClick={resetTimer}>Reset</button>
        <button className='button-funny' onClick={speedUp}>Speed Up</button>
      </div>
    </div>
  )
}

export default Timer
