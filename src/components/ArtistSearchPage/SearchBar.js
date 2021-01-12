import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../../constants";
import fetchArtistSearch from "../../handlers/FetchArtistSearch";
import Results from "./Results";

const SearchBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentification.token);
  const [search, setSearch] = useState("");
  const resultRef = useRef(null);
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        window.scrollTo(0, resultRef.current.focus());
        console.log("entered");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [search]);
  return (
    <>
      <Wrapper>
        <SearchInput
          placeholder="Search for an artist"
          onChange={(e) => {
            fetchArtistSearch(e, token, dispatch);
            setSearch(e.target.value);
          }}
        />
        <Results search={search} ref={resultRef} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SearchInput = styled.input`
  background: transparent;
  border-style: none;
  border-bottom: solid 5px ${COLORS.pink};
  width: 500px;
  height: 70px;
  display: flex;
  outline: none;
  vertical-align: bottom;
  color: ${COLORS.pink};
  font-size: 50px;
  padding: 0px 20px 0px 0px;
  ::placeholder {
    color: ${COLORS.pink};
    font-size: 50px;
    font-family: "Chivo", sans-serif;
  }
`;

export default SearchBar;
