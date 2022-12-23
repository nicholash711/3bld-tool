import React from "react";
import Tab from "./Tab";
import { Container } from "./styles/Container.styled";
import "./TabMaster.css";

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

export default class TabMaster extends React.Component {
  handleClick = (tab) => {
    this.setState({ active: tab });
  };

  constructor(props) {
    super(props);
    this.state = { active: tabs[0] };
  }

  render() {
    return (
      <div>
        <Container>
          {tabs.map((tab) => (
            <Tab
              name={tab}
              active={this.state.active === tab}
              onClick={() => {
                this.handleClick(tab);
              }}
            />
          ))}
        </Container>
        <div className="Content">This is {this.state.active}</div>
      </div>
    );
  }
}
