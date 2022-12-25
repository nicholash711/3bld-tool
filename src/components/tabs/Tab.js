import React from "react";
import { Button } from "./styles/Button.styled";
import "./Tab.css";

export default function Tab(props) {
  return (
    <div>
      <Button onClick={props.onClick} active={props.active}>
        {props.name}
      </Button>
    </div>
  );
}
