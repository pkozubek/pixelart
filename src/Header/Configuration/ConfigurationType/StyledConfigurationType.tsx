import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4em 2em;
  grid-template-rows: 90% 10%;
  height: calc(100% - 4px);
  margin-right: 1em;
  padding: 4px;
`;

export const Icon = styled.div`
  height: 100%;

  svg {
    width: 4em;
    height: 4em;
  }
`;

export const InputContainer = styled.div`
  margin-left: 1em;
`;

export const Range = styled.input`
  -webkit-appearance: slider-vertical;
  background: transparent;
  height: 80%;
  width: 1em;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  width: 1.2em;
  height: 20%;
  margin: auto;
`;
