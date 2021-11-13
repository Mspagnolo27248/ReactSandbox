//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";
const date = new Date(2021, 20, 10, 19);
//Int between 0 - 23
const time = date.getHours();
//const am = String(date.getHours());
let greeting = "";
const customStyle = {
  color: "black",
  background: "white"
};
switch (true) {
  case time <= 12:
    greeting = "Good Morning";
    customStyle.color = "red";
    break;
  case time > 12 && time <= 18:
    greeting = "Good Afternoon";
    customStyle.color = "green";
    break;
  default:
    greeting = "Good Night";
    customStyle.color = "blue";
}
ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
