import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4em auto;
  grid-template-rows: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  height: 100%;

  svg {
    width: 4em;
    height: 4em;
  }
`;

export const InputContainer = styled.div``;

export const Range = styled.input`
  -webkit-appearance: slider-vertical;
  background: transparent;
  height: 60%;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  width: 1em;
  margin: auto;
`;
