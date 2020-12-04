import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles/mediaQueries";

export default function SlideNumber(props) {
  return (
    <SlideNumberCont themeMode={props.themeMode}>
      Slide # {props.imgNumb} of {props.imgsLength}
    </SlideNumberCont>
  );
}

const SlideNumberCont = styled.div`
  width: fit-content;
  background: ${(props) => props.theme.primary};

  position: absolute;
  text-align: center;

  letter-spacing: ${(props) => (props.themeMode === "light" ? "0" : "0.1rem")};

  z-index: 1000;
  @media ${device.mobileS} {
    font-size: ${(props) => props.theme.fontSizes.small + "rem"};
    letter-spacing: 0;
    left: 0.2rem;
    top: 0.2rem;
    padding: 0.2rem;
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.theme.fontSizes.big + "rem"};
    left: 1rem;
    top: 1rem;
    padding: 0.5rem;
  }
`;
