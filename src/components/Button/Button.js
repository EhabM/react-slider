import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles/mediaQueries";

export default function Button(props) {
  return <Btn {...props}>{props.children}</Btn>;
}

const Btn = styled.button`
  width: fit-content;
  font-size: ${(props) => props.theme.fontSizes.big + "rem"};

  background: ${(props) =>
    props.unSuccess ? props.theme.secondry : props.theme.primary};
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 1rem;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    border: none;
    outline: 0;
    transform: translateY(0.5rem);
  }
  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.secondry};
  }
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.fontSizes.small + "rem"};
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontSizes.big + "rem"};
  }
`;
