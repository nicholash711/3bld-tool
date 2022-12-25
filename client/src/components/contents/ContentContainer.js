import React from "react";
import "./ContentContainer.css";
import PracticeTab from "./Practice/PracticeTab";
import InputTab from "./Input/InputTab";
import MemoTab from "./Memo/MemoTab";
import OptionsTab from "./Options/OptionsTab";

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
