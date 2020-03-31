import React, { Component } from "react";

export default class InputStateMachine extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToState = this.goToState.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      name: "display",
      machine: this.generateState("display", props.initialValue)
    };
  }

  generateState(stateName, stateParam) {
        const previousState = this.state ? { ...this.state.machine } : {};
        console.log(this.state);

        switch (stateName) {
        case "display":
        return {
            processing: false,
            error: null,
            value: stateParam || previousState.value,
            editing: false,
            editValue: null
        };
        case "saving":
        return {
            processing: true,
            error: null, // Reset any previous error
            value: previousState.value,
            editing: true, // Keep the edit view active until save is finished
            editValue: previousState.editValue
        };
        case "edit":
        return {
            processing: false,
            error: null,
            value: previousState.value,
            editing: true,
            editValue: stateParam
        };
        case "save_error":
        return {
            processing: false,
            error: stateParam,
            value: previousState.value,
            editing: true, // Keep the edit box open
            editValue: previousState.editValue
        };
        case "loading": // Same as default
        default:
        return {
            processing: true,
            error: null,
            value: null,
            editing: false,
            editValue: null
        };
        }
  }

  goToState(stateName, stateParam) {
    this.setState({
      name: stateName,
      machine: this.generateState(stateName, stateParam)
    });
  }

  handleSubmit(e) {
    this.goToState("edit", e.target.value);
  }

  save(valueToSave, event) {
      if (event.key === "Enter") {
          this.goToState("saving");
      }


    // Simulate saving the data ...
    setTimeout(() => this.goToState("display", valueToSave), 2000);
  }

  render() {
    const { processing, error, value, editing, editValue } = this.state.machine;

    if (processing) {
      return <p>Processing ...</p>;
    } else if (editing) {
      return (
        <div>
          <input
            type="text"
            onChange={this.handleSubmit}
            value={editValue || value}
            onKeyUp={event => this.save(editValue, event)}
          />
          {error && <p>Error: {error}</p>}
          {/* <button onClick={event => this.save(editValue, event)}>Save</button> */}
        </div>
      );
    } else {
      return (
        <div>
          <p onDoubleClick={() => this.goToState("edit", value)}>{value}</p>
          <button onClick={() => this.goToState("edit", value)}>Edit</button>
        </div>
      );
    }
  }
}
