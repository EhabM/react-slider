import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import { images } from "../../utilities/constants";
import { device } from "../../GlobalStyles/mediaQueries";

export default function Bullet(props) {
  const imgsNums = [...Array(images.length).keys()];
  const handleImg = (n) => {
    props.handleImg(n);
  };
  let bullets = imgsNums.map((num) => {
    return (
      <BulletBtn
        unSuccess={!(num === props.imgIndex)}
        onClick={() => handleImg(num)}
        key={num}
      >
        {num + 1}
      </BulletBtn>
    );
  });
  return <BulletsCont>{bullets}</BulletsCont>;
}
const btnWidth = 2;

const BulletsCont = styled.div`
  width: ${(props) => props.imgsNums * btnWidth} + "rem";
  background-color: transparent;

  position: relative;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(${images.length}, 1fr);
  @media ${device.mobileS} {
    width: ${(props) => props.imgsNums} + "rem";
  }
`;

const BulletBtn = styled(Button)`
  text-align: center;
  border-radius: 50%;

  @media ${device.mobileS} {
    width: ${(props) => (props.imgsNums <= 8 ? "1.8rem" : "1.5rem")};
    padding: 0.2rem 0;
    margin: 0.2rem;
  }

  @media ${device.tablet} {
    width: ${btnWidth + 1}rem;
    padding: 0.5rem 0;
    margin: 0.5rem;
  }
`;
