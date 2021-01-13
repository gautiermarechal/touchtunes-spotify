import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../constants";
import {
  errorAccessToken,
  receiveAccessToken,
} from "../../redux/actions/AuthentificationActions";
import { recordURL } from "../../redux/actions/SearchResultsActions";
import SearchBar from "./SearchBar";

const ArtistSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const currentURL = new URL(window.location.href);
    //User denied access
    if (currentURL.search === "?error=access_denied") {
      dispatch(errorAccessToken());
    } else {
      //User accepts access => Retrieve access token from url
      let currentHash = window.location.hash;
      const endIndex = currentHash.indexOf("&");
      currentHash = currentHash.substring(14, endIndex);
      dispatch(receiveAccessToken(currentHash));
      dispatch(recordURL(window.location.hash));
    }
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
  flex-direction: column;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightBlue};
`;

export default ArtistSearch;
