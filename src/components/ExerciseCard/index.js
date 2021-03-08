import React from "react";

class ExerciseCard extends React.Component {
  render() {
    return (
      <div className="exercise-card" onClick={this.props.onClick}>
        <div className="exercise-card-name">{this.props.name}</div>
        <div className="exercise-card-type">
          {this.props.type === 0 ? "Repetition" : "Duration"} Exercise
        </div>
      </div>
    );
  }
}

export default ExerciseCard;
