import React, { useState , useRef} from "react";


function HooksCounter(){
    const interval = useRef(null);
    const [seconds, setSeconds] = useState(0);

    const startHandler = () => {
        if(interval.current){
            clearInterval(interval.current)
        }
        console.log(interval.current)
            interval.current = setInterval(() => {
                setSeconds(pre => pre + 1)
            },1000)
        }
            

    const resetHandler = () => {
        console.log("reset handler rendered")
        setSeconds(0);
        clearInterval(interval.current);
    }

    const stopHandler = () => {
        console.log("Stop handler rendered")
        clearInterval(interval.current)
    }
    
    const displayTime = () => {
        console.log("Display rendered");
        let second = seconds%60;
        let minutes = seconds > 60 ? Math.floor(seconds/60) : 0;
        let hours = minutes > 60 ? Math.floor(seconds%3600) : 0;
        return `Hours: ${hours} Minutes: ${minutes} Seconds: ${second}`
        }

return (
    <div>
    <h1>Stop Watch</h1>
    <p style={{"borderColor": "black", "fontWeight":"Bold"}}>{displayTime()}</p>
    <button style={{"margin": "2px", "padding": "5px","fontWeight":"Bold" }} onClick={startHandler}>Start</button>
    <button style={{"margin": "2px", "padding": "5px","fontWeight":"Bold" }} onClick={stopHandler}>Pause</button>
    <button style={{"margin": "2px", "padding": "5px","fontWeight":"Bold" }} onClick={resetHandler}>Reset</button>
    </div>
)
}
export default HooksCounter

