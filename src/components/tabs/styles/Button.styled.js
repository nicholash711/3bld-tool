import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.active ? "#f5f2e1" : "#8f8f8f")};
  min-width: 130px;
  border-width: 0;
  border-radius: 10px 10px 0 0;
  padding: 2px 10px;
  font-size: 30px;

  &:hover {
    background: ${(props) => (props.active ? "#f5f2e1" : "#bcbcbc")};
  }
`;
