import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="Output">
      <p>My Username is {props.userName}.</p>
      <p>{props.paragraph}</p>
      <p>{props.user}</p>
    </div>
  );
};

export default UserOutput;
