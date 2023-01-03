import styled from "styled-components";

export const Timer = styled.p`
  color: ${(props) =>
    props.start === "true" ? "lime" : props.isDown ? "red" : "black"};
  padding: 0;
  margin: 0;
`;
