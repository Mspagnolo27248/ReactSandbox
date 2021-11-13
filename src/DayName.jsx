import React from "react";

const weekDay = new Date().getDay();
let daywk = "";
switch (weekDay) {
  case 0:
    daywk = "Sunday";
    break;
  case 1:
    daywk = "Monday";
    break;
  case 2:
    daywk = "Tuesday";
    break;
  case 3:
    daywk = "Wednesday";
    break;
  case 4:
    daywk = "Thursday";
    break;
  case 5:
    daywk = "Friday";
    break;
  case 6:
    daywk = "Saturday";
    break;
  case 7:
    daywk = "None";
    break;
  default:
    daywk = "bad";
}
function DayOfWeek() {
  return (
    <div>
      <h2>{"Today is " + daywk}</h2>
    </div>
  );
}

export default DayOfWeek;
