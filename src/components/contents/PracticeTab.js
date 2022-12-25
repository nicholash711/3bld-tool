import React, { Component } from "react";

export default class PracticeTab extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", value: "" };
  }

  handleOnChange = (event) => {
    this.setState({ temp: event.target.value });
  };

  handleOnSubmit = (event) => {
    this.setState({ value: this.state.temp });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleOnChange} />
          <input type="button" value="Submit" onClick={this.handleOnSubmit} />
        </form>
        The current value is: <font size="6">{this.state.value}</font>
      </div>
    );
  }
}
