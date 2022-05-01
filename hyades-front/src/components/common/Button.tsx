import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Palette from "../../lib/Palette";

type Props = {
  to: any;
  fontcolor: any;
  fullWidth: any;
  children: any;
};

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${(props: Props) => (props.fontcolor ? props.fontcolor : "black")};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem 0.5rem 0.4rem 0.6rem;

  &:hover {
    background-color: ${(props) => props.fontcolor};
    color: white;
  }

  &:disabled {
    background: ${Palette.gray[3]};
    color: ${Palette.gray[5]};
    cursor: not-allowed;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const BorderStyledButton = styled.button`
  ${buttonStyle}
  border: 2px solid;
  border-color: ${(props) => props.fontcolor};
`;

const BorderStyledLink = styled(Link)`
  ${buttonStyle}
  border: 2px solid;
  border-color: ${(props) => props.fontcolor};
`;

export const Button = (props: Props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export const BorderButton = (props: Props) => {
  return props.to ? (
    <BorderStyledLink {...props} />
  ) : (
    <BorderStyledButton {...props} />
  );
};
