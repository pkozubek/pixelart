import React from "react";
import * as Styled from "./StyledConfigurationType";

interface IConfigurationTypeProps {
  value: number;
  icon: JSX.Element;
  text: string;
  onChange?: (val: number) => void;
}

const ConfigurationType = (props: IConfigurationTypeProps) => {
  const onInputChange = (e) => {
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <Styled.Container>
      <Styled.Icon>{props.icon}</Styled.Icon>
      <Styled.InputContainer>
        <Styled.Range
          min={1}
          max={50}
          value={props.value}
          type="range"
          onChange={onInputChange}
        />
        <Styled.Input
          min={1}
          max={50}
          value={props.value}
          onChange={onInputChange}
        />
        <label>{props.text}</label>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default ConfigurationType;
