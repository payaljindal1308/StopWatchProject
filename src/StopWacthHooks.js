
import React, { useRef, useState } from 'react';
import './App.css';

const StopWatch = () => {
  const [stop, setStop] = useState(1);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const handleStart = () => {
    setStop(0);
      let timer = setInterval(() => {
      if(!stop){
        if(seconds === 59){
          setSeconds(0)
          setMinutes(pre => pre + 1)
          if(minutes > 60){
            setMinutes(0)
            setHour(pre => pre+1)
          }
        }
        else{
          setSeconds(pre => pre + 1)
        }
      }
      else{
        clearInterval(timer)
      }
        },1000)

    }
  

  const handleStop = () => {
    setStop(1);
  }


  const handleReset = () => {
   setHour(0);
   setMinutes(0);
   setSeconds(0);
   setStop(1);
  }

  return (
    <div>
      <h3>Stopwatch</h3>
      <div className='stopwatch-card'>
        <p>{`Hour: ${hour} Minutes: ${minutes} Seconds: ${seconds}`}</p> 
        <div className='buttons'>
          <button onClick={() => handleStart()}>Start</button>
          <button onClick={() => handleStop()}>Stop</button>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
      </div>
  );
}

export default StopWatch;