import React, { useState } from "react";
import Tab from "./Tab";
import "./TabContainer.css";

export default function TabContainer({ setCurTab }) {
  const tabs = ["Solve", "Practice", "Memorize", "Input", "Options"];

  const handleClick = (tab, i) => {
    setActive(tab);
    setCurTab(i);
  };

  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="Tabs">
      {tabs.map((tab, i) => (
        <Tab
          name={tab}
          key={i}
          active={active === tab}
          onClick={() => {
            handleClick(tab, i);
          }}
        />
      ))}
    </div>
  );
}
