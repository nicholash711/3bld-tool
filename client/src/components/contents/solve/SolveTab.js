import React from "react";
import Timer from "./Timer";
import Solves from "./Solves";
import "./SolveTab.css";

export default function SolveTab() {
  return (
    <div className="solve">
      <Timer />
      <Solves />
    </div>
  );
}
