import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles/mediaQueries";

export default function Image(props) {
  return (
    <ImgCont>
      <Img alt={props.imageIndex} src={props.imageSrc} />
    </ImgCont>
  );
}

const ImgCont = styled.div`
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  width: 100%;
`;
