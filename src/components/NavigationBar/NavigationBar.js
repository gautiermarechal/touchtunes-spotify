import React, { useState } from "react";
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
  height: 140px;
  background-color: ${COLORS.black};
  // border-bottom: solid 1px white;
  justify-content: center;
  align-items: center;
  position: sticky;
`;

const Title = styled.h1`
  color: ${COLORS.white};
  font-size: 50px;
`;

export default NavigationBar;
