import React, { Component } from "react";

const UserInput = (props) => {
  return (
    <div>
      <input onChange={props.change}></input>
      <p>Input Length : {props.length}</p>
    </div>
  );
};

export default UserInput;
