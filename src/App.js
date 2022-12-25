import React, { useState } from "react";
import "./App.css";
import ContentContainer from "./components/contents/ContentContainer";
import TabContainer from "./components/tabs/TabContainer";

function App() {
  const [curTab, setCurTab] = useState(0);
  return (
    <div className="App">
      <TabContainer setCurTab={setCurTab} />
      <ContentContainer curTab={curTab} />
    </div>
  );
}

export default App;
