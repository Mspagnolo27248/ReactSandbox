import React from "react";

function Heading() {
  const date = new Date(2021, 20, 10, 5);
  const time = date.getHours();
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
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
