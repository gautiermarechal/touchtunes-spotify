import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { GoSearch } from "react-icons/go";

const NavigationBar = () => {
  const singleArtist = useSelector((state) => state.singleArtist);
  const searchUrl = useSelector((state) => state.search.url);
  const history = useHistory();
  return (
    <>
      <MainContainer>
        <Link to="/login">
          <Title>Spotify Artist Search</Title>
        </Link>
        <SearchButton
          show={singleArtist.status === "received"}
          onClick={() => {
            history.push(`/artist-search/${searchUrl}`);
          }}
        >
          <SearchIcon />
        </SearchButton>
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
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-left: 50px;
  color: ${COLORS.pink};
  @media (max-width: 405px) {
    font-size: 7vw;
    margin-left: 30px;
  }
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  display: ${(props) => (props.show ? "flex" : "none")};
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  height: 80px;
  width: 80px;
  cursor: pointer;
  @media (max-width: 405px) {
    margin-right: 30px;
  }
`;

const SearchIcon = styled(GoSearch)`
  height: 30px;
  width: 30px;
  color: ${COLORS.pink};
`;

export default NavigationBar;
