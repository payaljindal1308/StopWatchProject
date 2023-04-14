import React from "react";

import { Component } from "react";


class Timer extends Component {

  constructor() {
    super()

    this.state = {
      Second: 0,
      Minute: 0,
      Hour: 0,
      isPaused: true,
      PauseContent: "Play",

    }

  }

  pauseMe = () => {

    if (!this.state.isPaused) {

      this.setState(prevState => ({

        isPaused: true,
        PauseContent: 'Play'

      }))
    }

    else {

      this.setState(prevState => ({

        isPaused: false,
        PauseContent: 'Pause'

      }))
    }
  }

  handleClick = () => {

    this.reset()

    this.setState({
      isPaused: false,
      PauseContent: "Pause"
    })


    this.startTimer = setInterval(() => {

      if (!this.state.isPaused) {

        if (this.state.Second == 59) {

          console.log('curr time', this, this.state.Second);

          this.setState(prevState => ({

            Second: 0,
            Minute: this.state.Minute + 1,


          }))


          if (this.state.Minute == 59) {



            this.setState(prevState => ({

              Minute: 0,
              Hour: this.state.Hour + 1,


            }))
          }
        } else {

          this.setState(prevState => ({
            Second: prevState.Second + 1
          }))


        }

      }

    }, 1000)


  }

  reset = () => {
    clearInterval(this.startTimer)
    this.setState({
      PauseContent: "Play",
      Second: 0,
      Minute: 0,
      Hour: 0
    })
  }

  render() {

    return (
      <div className="Second">

        <button onClick={this.handleClick}>Start</button>

        <button onClick={this.pauseMe}>{this.state.PauseContent}</button>
        <p className="sec">Seconds: {this.state.Second}</p>
        <p className="min">Minute: {this.state.Minute}</p>
        <p className="hr">Hour: {this.state.Hour}</p>
        <button onClick={this.reset}>Reset</button>

      </div>
    )
  }
}



export default Timer;