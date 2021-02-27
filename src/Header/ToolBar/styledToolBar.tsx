import styled from "styled-components";

export const Input = styled.input`
  width: 90%;
  padding: 1em;
  color: ${({ isError }) => (isError ? "red" : "black")};
  border: 1px solid ${({ isError }) => (isError ? "red" : "gray")};

  &::placeholder {
    color: ${({ isError }) => (isError ? "red" : "black")};
  }
`;

export const Label = styled.label`
  width: 90%;
  text-align: left;
  margin-bottom: 1em;
  color: ${({ isError }) => (isError ? "red" : "black")};
`;
