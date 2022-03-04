import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import Palette from "../../lib/Palette";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${({fontcolor}) => fontcolor ? fontcolor : "white"};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({hovercolor}) => !hovercolor && css`
    border: ${({fontcolor}) => `2px solid ${fontcolor}`};
    padding: 0.3rem 0.5rem 0.4rem 0.6rem;
  `}

  ${({fullWidth}) =>
    fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  &:hover{
    ${({hovercolor}) => hovercolor ? css`
      color: ${({hovercolor}) => hovercolor};
    ` : css`
      background-color: ${({fontcolor}) => fontcolor};
      color: white;
    `}
  }

    &:disabled {
    background: ${Palette.gray[3]};
    color: ${Palette.gray[5]};
    cursor: not-allowed;
  }
`;

const Button = styled.button.attrs(({to}) => ({
  as : to && NavLink
}))`
  ${buttonStyle}
  ${({to}) => to && css`
    &.active{
      color: ${({hovercolor}) => hovercolor}
    }
  `}
`;

export default Button;
