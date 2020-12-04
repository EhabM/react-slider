import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles/mediaQueries";

export default function Container(props) {
  return <AppContainer>{props.children}</AppContainer>;
}

const AppContainer = styled.div`
  position: relative;
  margin: auto;
  @media ${device.mobileS} {
    width: 30.2rem;
  }

  @media ${device.mobileL} {
    width: 40.25rem;
  }

  @media ${device.tablet} {
    width: 70rem;
  }
  @media ${device.laptop} {
    width: 100rem;
  }

  @media ${device.desktop} {
    width: 140rem;
  }
`;
