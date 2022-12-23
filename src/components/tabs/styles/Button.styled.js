import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.active ? "#00FF00" : "#FF0000")};
  border-radius: 10px 10px 0 0;
  padding: 2px 10px;
  margin: 0 2px;
  font-size: 30px;

  &:hover {
    background: ${(props) => (props.active ? "#00FF00" : "#00AA00")};
  }
`;
