import React from "react";
import ActionButton from "../ActionButton";

class DurationExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      interval: null,
      buttonName: "Start",
    };
  }

  startTime() {
    this.setState({
      interval: setInterval(
        () =>
          this.setState((state) => {
            return {
              time: state.time + 1,
            };
          }),
        10
      ),
      buttonName: "Stop",
    });
  }

  stopTime() {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      buttonName: "Start",
    });
  }

  resetTime() {
    clearInterval(this.state.interval);
    this.setState({
      time: 0,
      interval: null,
      buttonName: "Start",
    });
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    let time = this.state.time;

    let centiseconds = Math.floor(time % 100);
    let seconds = Math.floor((time / 100) % 60);
    let minutes = Math.floor((time / (100 * 60)) % 60);

    let timeString =
      `${minutes < 10 ? "0" : ""}` +
      minutes +
      `:${seconds < 10 ? "0" : ""}` +
      seconds +
      `.${centiseconds < 10 ? "0" : ""}` +
      centiseconds;

    return (
      <>
        <div className="header">{this.props.name}</div>
        <div class="exercise-content-container">
          <div className="prominent-text">{timeString}</div>
          <div className="button-container">
            <ActionButton
              name={this.state.buttonName}
              onClick={() => {
                !this.state.interval ? this.startTime() : this.stopTime();
              }}
            />
            <ActionButton
              name="Reset"
              outlined={true}
              disabled={!this.state.interval && this.state.time === 0}
              onClick={() => {
                this.resetTime();
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default DurationExercise;
