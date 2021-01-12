import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import SearchBar from "./SearchBar";

const ArtistSearch = () => {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    //Retrieve access token from url
    let currentHash = window.location.hash;
    const endIndex = currentHash.indexOf("&");
    currentHash = currentHash.substring(14, endIndex);
    setAccessToken(currentHash);
  }, []);
  return (
    <>
      <MainContainer>
        <SearchBar />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightBlue};
`;

export default ArtistSearch;
