import React, { useState } from "react";

function Time() {
  let timeStart = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(timeStart);

  function refreshTime() {
    let timeNew = new Date().toLocaleTimeString("it-IT");
    setTime(timeNew);
  }

  return (
    <div className="container">
      <center>
        <h1>{time}</h1>
      </center>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}

export default Time;
