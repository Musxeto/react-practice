import React from "react";
import styled from "styled-components";

const HoverEffectCompnonent = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: blue;
  }
`;
function HoverEffect() {
  return (
    <HoverEffectComponent>
      <p>Hover over me</p>
    </HoverEffectComponent>
  );
}

export default HoverEffect;
