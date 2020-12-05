import React from "react";
import styled from "styled-components";

export default function Image({ imgIndex, imgSrc }) {
  return (
    <ImgCont>
      <img alt={imgIndex} src={imgSrc} />
    </ImgCont>
  );
}

const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  > img {
    transition: all 1s ease-in-out;
    width: 100%;
  }
`;
