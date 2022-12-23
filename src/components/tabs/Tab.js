import React from "react";
import { Button } from "./styles/Button.styled";
import "./Tab.css";

function Tab(props) {
  return (
    <div>
      <Button onClick={props.onClick} active={props.active}>
        {props.name}
      </Button>
    </div>
  );
}

export default Tab;
