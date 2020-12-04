import React from "react";
import Button from "../Button/Button";
import Bullet from "./Bullet";
import styled from "styled-components";
import { device } from "../../GlobalStyles/mediaQueries";

export default function Controller(props) {
  return (
    <ControllerCont>
      <ControllerBtn disabled={props.prevDisabled} onClick={props.prevImage}>
        Previous
      </ControllerBtn>
      <Bullet imgIndex={props.imgIndex} handleImg={props.goToImg} />

      <ControllerBtn disabled={props.nextDisabled} onClick={props.nextImage}>
        Next
      </ControllerBtn>
    </ControllerCont>
  );
}

const ControllerCont = styled.div`
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 80%;
  }
`;

const ControllerBtn = styled(Button)`
  @media ${device.mobileS} {
    width: fit-content;
    padding: none;
  }

  @media ${device.tablet} {
    width: ${(props) => props.theme.sizes.small + "rem"};
  }
`;
