import React from "react";
import ExerciseCard from "../ExerciseCard";
import RepetitionExercise from "../RepetitionExercise";
import DurationExercise from "../DurationExercise";
import BackButton from "../BackButton";

class MenuScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: -1,
      exerciseName: "",
    };
  }

  showExerciseScreen(value) {
    this.setState({
      currentScreen: value.type === 0 ? 0 : 1,
      exerciseName: value.name,
    });
  }

  handleBackButton() {
    this.setState({ currentScreen: -1, exerciseName: "" });
  }

  render() {
    let screen;

    switch (this.state.currentScreen) {
      case 0:
        screen = (
          <>
            <BackButton
              name={this.props.name}
              onClick={() => this.handleBackButton()}
            />
            <RepetitionExercise name={this.state.exerciseName} />
          </>
        );
        break;
      case 1:
        screen = (
          <>
            <BackButton
              name={this.props.name}
              onClick={() => this.handleBackButton()}
            />
            <DurationExercise name={this.state.exerciseName} />
          </>
        );
        break;
      default:
        screen = (
          <>
            <div className="header">{this.props.name}</div>
            <p>
              <strong>Let's get physical!</strong>
              <br></br>
              Select an exercise below to start:
            </p>
            <div className="exercise-card-container">
              {this.props.contents.map((value) => (
                <ExerciseCard
                  key={value.id}
                  name={value.name}
                  type={value.type}
                  onClick={() => this.showExerciseScreen(value)}
                />
              ))}
            </div>
          </>
        );
        break;
    }

    return screen;
  }
}

export default MenuScreen;
