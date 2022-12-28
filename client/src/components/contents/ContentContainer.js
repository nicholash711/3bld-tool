import React from "react";
import "./ContentContainer.css";
import InputTab from "./Input/InputTab";
import MemoTab from "./Memo/MemoTab";
import OptionsTab from "./Options/OptionsTab";
import PracticeTab from "./Practice/PracticeTab";
import SolveTab from "./Solve/SolveTab";

export default function ContentContainer({ curTab }) {
  const content = [
    <SolveTab />,
    <PracticeTab />,
    <MemoTab />,
    <InputTab />,
    <OptionsTab />,
  ];
  return (
    <div className="Content">
      {curTab > -1 && curTab < content.length ? (
        content[curTab]
      ) : (
        <div>Currently not implemented :/</div>
      )}
    </div>
  );
}
