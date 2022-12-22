import React, { useState } from "react";
import Tab1 from "./Tab1";
import "./TabMaster.css";

function TabMaster() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <ul>
        <li>Tab1</li>
        <li>Tab2</li>
      </ul>
    </div>
  );
}

export default TabMaster;
