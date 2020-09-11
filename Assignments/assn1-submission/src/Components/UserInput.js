import React from "react";

const UserInput = (props) => {
  return (
    <div style={{ border: 1, padding: 30, width: 60 }}>
      <input type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
};

export default UserInput;
