import React from "react";
import ShadowStyledComponents from "./ShadowStyledComponents";
import ReactDOM from "react-dom";

interface IShadowProps {
  children?: any;
  onClick?: () => void;
}

const Shadow = (props: IShadowProps) => {
  const shadowContent = (
    <ShadowStyledComponents.Shadow onClick={props.onClick}>
      {props.children}
    </ShadowStyledComponents.Shadow>
  );

  return ReactDOM.createPortal(
    shadowContent,
    document.getElementById("shadow")
  );
};

export default Shadow;
