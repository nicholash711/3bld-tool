import React from "react";
import "./ContentContainer.css";
import InputTab from "./input/InputTab";
import MemoTab from "./memo/MemoTab";
import OptionsTab from "./options/OptionsTab";
import PracticeTab from "./practice/PracticeTab";
import SolveTab from "./solve/SolveTab";

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
