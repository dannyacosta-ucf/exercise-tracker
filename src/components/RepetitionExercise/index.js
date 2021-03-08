import React from "react";
import ActionButton from "../ActionButton";

class RepetitionExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increaseCount() {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  }

  resetCount() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <>
        <div className="header">{this.props.name}</div>
        <div className="exercise-content-container">
          <p>reps</p>
          <div className="prominent-text">{this.state.counter}</div>
          <div className="button-container">
            <ActionButton name="Add Rep" onClick={() => this.increaseCount()} />
            <ActionButton
              name="Reset"
              outlined={true}
              onClick={() => this.resetCount()}
            />
          </div>
        </div>
      </>
    );
  }
}

export default RepetitionExercise;
