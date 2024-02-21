import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh; /* Make the container cover the full height of the viewport */
`;

const HoverEffectComponent = styled.div`
  width: 200px;
  height: 100px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: yellow;
  }
`;

function HoverEffect() {
  return (
    <CenteredContainer>
      <HoverEffectComponent>
        <p>Hover</p>
      </HoverEffectComponent>
    </CenteredContainer>
  );
}

export default HoverEffect;
