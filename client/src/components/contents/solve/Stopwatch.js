import React, { useEffect } from "react";
import "./SolveTab.css";
import { Timer } from "./styles/Timer.styled";

export default function Stopwatch({ time, setTime, start, isDown, active }) {
  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [active, setTime]);

  useEffect(() => {
    if (start) {
      setTime(0);
    }
  }, [start, setTime]);

  return (
    <div className="stopwatch">
      <Timer start={start ? "true" : "false"} isDown={isDown}>
        {Math.floor(time / 6000) > 0
          ? `${String(Math.floor(time / 6000))}:`
          : ""}
        {Math.floor(time / 6000) > 0
          ? String(Math.floor(time / 100) % 60).padStart(2, "0")
          : String(Math.floor(time / 100))}
        .{String(time % 100).padStart(2, "0")}
      </Timer>
    </div>
  );
}
