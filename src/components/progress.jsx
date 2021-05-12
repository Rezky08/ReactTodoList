import React, { useState } from "react";

function Progress({ progressRate, progressColor }) {
  const [rate, setRate] = useState(progressRate ? progressRate : 10);
  const [color, setColor] = useState(progressColor ? progressColor : "pink");

  return (
    <div className="flex flex-row items-center gap-3">
      <div className="progress--container w-5/6 rounded-full ">
        <div
          className={`progress--fill progress--${color} h-full rounded-full`}
          style={{ width: `${rate}%` }}
        ></div>
      </div>
      <div className="w-1/6">
        <span className="progress--rate-text">{rate}%</span>
      </div>
    </div>
  );
}

export default Progress;
