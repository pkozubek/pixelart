import React, { SyntheticEvent } from "react";
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
      <Styled.Icon>
        {props.icon}
        <span>{props.text}</span>
      </Styled.Icon>
      <Styled.InputContainer>
        <Styled.Range min={1} type="range" onChange={onInputChange} />
        <Styled.Input min={1} value={props.value} onChange={onInputChange} />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default ConfigurationType;
