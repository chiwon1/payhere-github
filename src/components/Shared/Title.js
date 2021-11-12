import React from "react";
import styled from "styled-components";

function Title({ className, children }) {
  return <PageTitle className={className}>{children}</PageTitle>;
}

export default Title;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.color.brown};
  font-size: 60px;
  margin: 0;
`;
