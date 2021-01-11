import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const NavigationBar = () => {
  return (
    <>
      <MainContainer>
        <Title>Spotify Artist Search</Title>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${COLORS.green};
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const Title = styled.h1`
  color: ${COLORS.white};
`;

export default NavigationBar;
