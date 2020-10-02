import React, { Component } from "react";

export class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: "",
      decimal: 0,
    };
    this.baseState = this.state;
  } //the states that are used throught the app

  // this function changes the state when the input is typed into the input field
  handleBinaryChange = (event) => {
    this.setState({
      binary: event.target.value,
    });
  };

  //this function converts the new binary state into decimal. The built in method parseInt does the conversion.
  convertToBinary = () => {
    this.setState({
      decimal: parseInt(this.state.binary, 2),
    });
  };

  // This function enables the use of the enter key for submission.
  handleUserKeyPress = (e) => {
    if (e.key === "Enter") {
      this.convertToBinary(onsubmit);
    }
  };

  //this resets the state so the app can be refreshed
  resetHandler = () => {
    this.setState(this.baseState);
  };

  // this function ensures that only zero's and ones are entered into the input field.
  keyPressHandler = (e) => {
    let num = /[^0-1]/gi;
    e.target.value = e.target.value.replace(num, "");
  };

  // this function shows the updated states after each re-render
  componentDidUpdate() {
    console.log(`binary ${this.state.binary}`);
    console.log(`decimal ${this.state.decimal}`);
  }
  render() {
    const { binary, decimal } = this.state;
    return (
      <div>
        <h1 className="title">BINARY TO DECIMAL CONVERTER</h1>
        <input
          className="userInput"
          type="text"
          value={binary}
          maxLength="8"
          placeholder="Enter value"
          onChange={this.handleBinaryChange}
          onKeyUp={this.keyPressHandler}
          onKeyPress={this.handleUserKeyPress}
        ></input>
        <button
          type="submit"
          className="convertButton"
          onClick={this.convertToBinary}
        >
          Convert
        </button>
        <button className="resetButton" onClick={this.resetHandler}>
          reset
        </button>
        <p className="result">Decimal:</p>
        <h1 className="decimalResult">{decimal}</h1>
      </div>
    );
  }
}

export default Converter;
