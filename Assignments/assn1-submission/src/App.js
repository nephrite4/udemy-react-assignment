import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    user: "ReactStater99",
  };

  inputChangeHandler = (event) => {
    this.setState({ user: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div>
          <UserInput change={this.inputChangeHandler} name={this.state.user} />
          <UserOutput
            userName="ReactMeister88"
            paragraph="I want to be the very best."
          />
          <UserOutput userName="ReactNoob87" />
          <UserOutput
            userName={this.state.user}
            paragraph="This component changes based on Input field."
          />
        </div>
        <ol>
          <li>
            <s>Create TWO new components: UserInput and UserOutput</s>
          </li>
          <li>
            <s>
              UserInput should hold an input element, UserOutput two paragraphs
            </s>
          </li>
          <li>
            <s>
              Output multiple UserOutput components in the App component (any
              paragraph texts of your choice)
            </s>
          </li>
          <li>
            <s>
              Pass a username (of your choice) to UserOutput via props and
              display it there
            </s>
          </li>
          <li>
            <s>
              Add state to the App component (=> the username) and pass the
              username to the UserOutput component
            </s>
          </li>
          <li>
            <s>
              Add a method to manipulate the state (=> an event-handler method)
            </s>
          </li>
          <li>
            <s>
              Pass the event-handler method reference to the UserInput component
              and bind it to the input-change event
            </s>
          </li>
          <li>
            <s>
              Ensure that the new input entered by the user overwrites the old
              username passed to UserOutput
            </s>
          </li>
          <li>
            <s>
              Add two-way-binding to your input (in UserInput) to also display
              the starting username
            </s>
          </li>
          <li>
            <s>
              Add styling of your choice to your components/ elements in the
              components - both with inline styles and stylesheets
            </s>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
