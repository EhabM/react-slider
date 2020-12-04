import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { device } from "../../GlobalStyles/mediaQueries";

export default function ToogleTheme(props) {
  return (
    <Container>
      <Button unSuccess={props.unSuccessD} onClick={props.onClickD}>
        Dark
      </Button>
      <Button unSuccess={props.unSuccessL} onClick={props.onClickL}>
        Light
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: fit-content;
  position: absolute;
  z-index: 1000;
  display: inline-block;
  @media ${device.mobileS} {
    right: 0.2rem;
    top: 0.2rem;
    > button {
      padding: 0.2rem 0.5rem;
      margin: 0.2rem;
    }
  }

  @media ${device.tablet} {
    right: 1rem;
    top: 1rem;
    > button {
      padding: 0.5rem 1rem;
      margin: 0.5rem;
    }
  }
`;
