import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends Component {
  state = {
    input: {
      text: "null",
      length: 0,
    },
  };

  inputHandler = (event) => {
    const currentState = { ...this.state.input };
    currentState.length = event.target.value.length;
    currentState.text = event.target.value;
    this.setState({ input: currentState });
  };

  deleteHandler = (index) => {
    var currentState = { ...this.state.input };
    var inputList = [...currentState.text];
    inputList.splice(index, 1);
    var newList = inputList.join("");
    currentState.text = newList;
    this.setState({ input: currentState });
    console.log("state : " + typeof this.state.input.text);
  };

  render() {
    let validation = null;
    if (this.state.input.length < 5) {
      validation = <ValidationComponent validation="Text too short" />;
    } else {
      validation = <ValidationComponent validation="Text long enough" />;
    }

    let charactersList = [...this.state.input.text];
    let characters = (
      <div>
        {charactersList.map((char, index) => {
          return (
            <CharComponent
              click={() => this.deleteHandler(index)}
              char={char}
              key={index}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <div>
          <UserInput
            change={this.inputHandler}
            length={this.state.input.length}
          />
          {validation}
          {characters}
        </div>
        <ol>
          <li>
            <s>
              Create an input field (in App component) with a change listener
              which outputs the length of the entered text below it (e.g. in a
              paragraph).
            </s>
          </li>
          <li>
            <s>
              Create a new component (=> ValidationComponent) which receives the
              text length as a prop
            </s>
          </li>
          <li>
            <s>
              Inside the ValidationComponent, either output "Text too short" or
              "Text long enough" depending on the text length (e.g. take 5 as a
              minimum length)
            </s>
          </li>
          <li>
            <s>
              Create another component (=> CharComponent) and style it as an
              inline box (=> display: inline-block, padding: 16px, text-align:
              center, margin: 16px, border: 1px solid black).
            </s>
          </li>
          <li>
            <s>
              Render a list of CharComponents where each CharComponent receives
              a different letter of the entered text (in the initial input
              field) as a prop.
            </s>
          </li>
          <li>
            <s>
              When you click a CharComponent, it should be removed from the
              entered text.
            </s>
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
