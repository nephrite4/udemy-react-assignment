import React from "react";

const divStyle = {
  display: "inline-block",
  padding: 16,
  textAlign: "center",
  border: "1px solid black",
  margin: 16,
};

const CharComponent = (props) => {
  return (
    <div onClick={props.click} style={divStyle}>
      {props.char}
    </div>
  );
};

export default CharComponent;
