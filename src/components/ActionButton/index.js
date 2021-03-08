import React from "react";

class ActionButton extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.outlined ? "action-button outlined" : "action-button"
        }
        disabled={this.props.disabled}
        onClick={this.props.disabled ? undefined : this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default ActionButton;
