import React from "react";

import styled from "styled-components";
import { flexCenter, fullWidthAndHeight, buttonStyle } from "../../styles/mixin";

function Button({ children, className, handleClick }) {
  return (
    <DefaultButton onClick={handleClick} className={className}>
      {children}
    </DefaultButton>
  );
}

const DefaultButton = styled.button`
  ${flexCenter}
  ${fullWidthAndHeight}
  ${buttonStyle}

  color: ${({ theme }) => theme.color.brown};
`;

export default Button;
