import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fullWidthAndHeight = css`
  width: 100%;
  height: 100%;
`;

export const buttonStyle = css`
  padding: 0 0.5rem;
  display: inline-flex;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
