import React from "react";
import "./ContentContainer.css";
import PracticeTab from "./PracticeTab";
import InputTab from "./InputTab";
import MemoTab from "./MemoTab";
import OptionsTab from "./OptionsTab";

export default function ContentContainer({ curTab }) {
  const content = [<PracticeTab />, <MemoTab />, <InputTab />, <OptionsTab />];
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
