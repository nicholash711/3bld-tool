import React, { useState } from "react";
import Tab from "./Tab";
import "./TabContainer.css";

export default function TabContainer({ setCurTab }) {
  const tabs = [
    { name: "Practice", key: 0 },
    { name: "Memorization", key: 1 },
    { name: "Input", key: 2 },
    { name: "Options", key: 3 },
  ];

  const handleClick = (tab) => {
    setActive(tab.name);
    setCurTab(tab.key);
  };

  const [active, setActive] = useState(tabs[0].name);

  return (
    <div className="Tabs">
      {tabs.map((tab) => (
        <Tab
          name={tab.name}
          key={tab.key}
          active={active === tab.name}
          onClick={() => {
            handleClick(tab);
          }}
        />
      ))}
    </div>
  );
}
