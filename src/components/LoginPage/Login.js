import React from "react";
import styled from "styled-components";
import { FaSpotify } from "react-icons/fa";

import { COLORS } from "../../constants";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const Login = () => {
  return (
    <>
      <MainContainer>
        <a
          href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}
        >
          <LoginButton>
            <Title>Login with Spotify</Title>
            <SpotifyIcon />
          </LoginButton>
        </a>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${COLORS.lightBlue};
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100px;
  height: 80px;
  width: 400px;
  background-color: ${COLORS.lightBlue};
  cursor: pointer;
  transition: 0.5s;
  outline: none;
  padding: 30px;

  &:hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.white};

    h1 {
      color: ${COLORS.white};
    }
  }

  @media (max-width: 408px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  transition: 0.5s;
  color: ${COLORS.black};
  @media (max-width: 408px) {
    font-size: 7vw;
  }
`;

const SpotifyIcon = styled(FaSpotify)`
  margin-left: 20px;
  font-size: 30px;
`;

export default Login;
