import React, { useEffect, useState } from "react";
import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
import Stopwatch from "./Stopwatch";
import config from "../../../config/config";
import "./SolveTab.css";

export default function Timer() {
  // state initialization
  const [scramble, setScramble] = useState("");
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [stop, setStop] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [downTime, setDownTime] = useState(0);
  const [allowStart, setAllowStart] = useState(false);

  const api = config.api_url;

  // generate a scramble on mount
  useEffect(() => {
    getScramble(setScramble);
  }, []);

  // handles how long the spacebar has been pressed
  useEffect(() => {
    let timer = null;
    if (isDown) {
      timer = setInterval(() => {
        setDownTime((time) => time + 10);
        if (downTime >= 300) {
          setAllowStart(true);
        }
      }, 10);
    } else {
      setDownTime(0);
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isDown, downTime]);

  // handle event for when spacebar is held down
  const handleKeyDown = (event) => {
    // check if key is being held down
    if (event.repeat) {
      event.preventDefault();
      return;
    }

    if (event.key === " ") {
      event.preventDefault();
      if (isActive) {
        getScramble(setScramble);
        setIsActive(false);
        setStop(true);
        // send http request to send solve to db
        sendData(scramble, time);
      } else {
        setIsDown(true);
      }
    }
  };

  const sendData = (scramble, time) => {
    const data = { scramble: scramble, time: time / 100 };
    fetch(`${api}/solves`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error("error has occured:\n" + error);
      });
  };

  // handle when spacebar is released
  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.key === " ") {
      setIsDown(false);
      if (allowStart && !isActive && !stop) {
        setIsActive(true);
        setAllowStart(false);
      } else {
        setStop(false);
      }
    }
  };

  return (
    <div
      className="timer"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="scramble">{scramble}</div>
      <Stopwatch
        time={time}
        setTime={setTime}
        start={allowStart}
        isDown={isDown}
        active={isActive}
      />
    </div>
  );
}

async function getScramble(setScramble) {
  let scramble = await randomScrambleForEvent("333bf");
  setScramble(scramble.toString());
}
