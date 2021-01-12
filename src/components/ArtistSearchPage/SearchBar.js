import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SearchBar = () => {
  return (
    <>
      <Wrapper>
        <SearchInput placeholder="Search for an artist" />
        <ResultContainer>
          <ResultList>
            <ResultItem></ResultItem>
          </ResultList>
        </ResultContainer>
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

const ResultContainer = styled.div`
  width: 80vw;
  background-color: ${COLORS.white};
  margin: 50px 100px 50px 100px;
`;

const ResultList = styled.ul`
  padding: 20px;
  list-style-type: none;
`;

const ResultItem = styled.li``;

export default SearchBar;
