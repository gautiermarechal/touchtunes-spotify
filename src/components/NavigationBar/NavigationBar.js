import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

const NavigationBar = () => {
  return (
    <>
      <MainContainer>
        <Link to="/login">
          <Title>Spotify Artist Search</Title>
        </Link>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  background-color: ${COLORS.lightBlue};
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 50px;
  color: ${COLORS.pink};
`;

export default NavigationBar;
