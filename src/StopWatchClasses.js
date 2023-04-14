import React, {Component} from "react";
class StopWatchUsingClasses extends Component{
    constructor(){
        super()
        this.state = {
            seconds: 0,
        }
    }

    startHandler(){
        this.interval = setInterval(()=>{
            this.setState(previousState => ({
                seconds: previousState.seconds + 1
            }))
            },1000)
        }
    pauseHanlder(){
        clearInterval(this.interval)
    }
    resetHanlder(){
        clearInterval(this.interval)
        this.setState({
            seconds: 0
        })
    }
    displayTime(){
        let second = this.state.seconds%60;
        let minutes = this.seconds > 60 ? Math.floor(this.state.seconds/60) : 0;
        let hours = minutes > 60 ? Math.floor(this.state.seconds%3600) : 0;
        return `Hours: ${hours} Minutes: ${minutes} Seconds: ${this.state.seconds}`
        }
    render(){
        return(
            <div>
            <p style={{"borderColor": "black", "fontWeight":"Bold"}}>{this.displayTime()}</p>
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=> this.startHandler()}>Start</button>
            <button onClick={() => this.pauseHanlder()}>Pause</button>
            <button onClick={() => this.resetHanlder()}>Reset</button>
            </div>
            
        )
    }
}

export default StopWatchUsingClasses
