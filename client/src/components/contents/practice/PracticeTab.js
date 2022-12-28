import React, { Component } from "react";

export default class PracticeTab extends Component {
  constructor(props) {
    super(props);
    var temp = sessionStorage.getItem("practiceTemp");
    var value = sessionStorage.getItem("practiceValue");
    this.state = {
      temp: temp === null ? "" : temp,
      value: value === null ? "" : value,
    };
  }

  componentWillUnmount() {
    sessionStorage.setItem("practiceTemp", this.state.temp);
    sessionStorage.setItem("practiceValue", this.state.value);
  }

  handleChange = (event) => {
    this.setState({ temp: event.target.value });
  };

  handleButton = (event) => {
    this.setState({ value: this.state.temp });
    this.setState({ temp: "" });
    event.preventDefault();
  };

  render() {
    return (
      <div className="Practice">
        <form onSubmit={this.handleButton}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Type Something"
            value={this.state.temp}
          />
          <input type="button" value="Submit" onClick={this.handleButton} />
        </form>
        Last value inputted is: <font size="6">{this.state.value}</font>
      </div>
    );
  }
}
