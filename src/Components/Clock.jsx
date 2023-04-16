import "../Style/Clock.css";
import { useState } from "react";

const Clock = () => {
  const [timeVal, setTimeVal] = useState(new Date());
  setInterval(() => {
    let curr = new Date();
    setTimeVal(curr);
  }, 60000);

  return (
    <div className="container">
      <div className="digital">
        <div className="digital-time">
          {timeVal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      <div className="clock-container">
        <div className="middle-circle"></div>
        <div className="hour">
          <div
            className="hour-hand"
            style={{
              transform: `rotateZ(${
                timeVal.getHours() * 30 + timeVal.getMinutes() / 2
              }deg)`,
            }}
          ></div>
        </div>
        <div className="minute">
          <div
            className="minute-hand"
            style={{ transform: `rotateZ(${timeVal.getMinutes() * 6}deg)` }}
          ></div>
        </div>
        {/* <div className="second">
          <div
            className="second-hand"
            style={{ transform: `rotateZ(${timeVal.getSeconds() * 6}deg)` }}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Clock;
