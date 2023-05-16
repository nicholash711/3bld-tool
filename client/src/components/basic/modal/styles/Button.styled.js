import styled from "styled-components";

export const Button = styled.button`
  background-color: gray;
  border-width: 0;
  border-radius: 20px;
  min-width: 30px;
  min-height: 30px;
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  &:hover {
    background: lightgray;
  }
`;
