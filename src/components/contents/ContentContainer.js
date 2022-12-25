import React from "react";
import "./ContentContainer.css";
import PracticeTab from "./PracticeTab";
import InputTab from "./InputTab";
import MemoTab from "./MemoTab";

export default function ContentContainer({ curTab }) {
  const content = [<PracticeTab />, <MemoTab />, <InputTab />];
  return (
    <div>
      {curTab > -1 && curTab < content.length ? (
        content[curTab]
      ) : (
        <div>Cannot find Content</div>
      )}
    </div>
  );
}
