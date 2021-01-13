import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../../constants";
import displayArtistPopularity from "../../handlers/displayArtistPopularity";

const Results = ({ search, resultRef }) => {
  const [showResults, setShowResults] = useState(false);
  const results = useSelector((state) => state.search.artists);

  useEffect(() => {
    if (!results) {
      return;
    }
    if (!results.items) {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  }, [results]);

  return (
    <>
      {results ? (
        results.items ? (
          <ResultContainer show={showResults} ref={resultRef}>
            <ResultsTitleContainer>
              <ResultsTitle>Results for "{search}"</ResultsTitle>
            </ResultsTitleContainer>
            <ResultList>
              {results.items.map(
                (artist) =>
                  artist.images[0] && (
                    <Link to={`/artist/${artist.id}`} key={artist.id}>
                      <ResultListItem>
                        <ArtistImageContainer>
                          <ArtistImage
                            src={
                              artist.images[0] ? artist.images[0].url : "image"
                            }
                          />
                        </ArtistImageContainer>
                        <ArtistInfoContainer>
                          <ArtistsTagsContainer>
                            <ArtistName>{artist.name}</ArtistName>
                            <ArtistFollowers>
                              {artist.followers.total} followers
                            </ArtistFollowers>
                          </ArtistsTagsContainer>
                          <ArtistRatings>
                            {displayArtistPopularity(artist.popularity)}
                          </ArtistRatings>
                        </ArtistInfoContainer>
                      </ResultListItem>
                    </Link>
                  )
              )}
            </ResultList>
          </ResultContainer>
        ) : null
      ) : null}
    </>
  );
};

const ResultContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 80vw;
  background-color: ${COLORS.white};
  margin: 50px 100px 50px 100px;
  flex-direction: column;
`;

const ResultList = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  margin: 0px 30px 30px 30px;

  @media (max-width: 600px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 427px) {
    grid-template-columns: 100%;
  }
`;

const ResultListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 30px;
  height: 300px;
  cursor: pointer;
  padding: 20px;
  transition: 0.2s;

  &:hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
  }

  @media (max-width: 780px) {
    padding: 0px;
    margin: 10px;
  }
`;

const ArtistImageContainer = styled.div`
  height: auto;
  overflow: hidden;
  max-height: 172px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;

  @media (max-width: 427px) {
    max-height: none;
  }
`;

const ArtistImage = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 7px;
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const ArtistsTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistName = styled.h3`
  margin-bottom: 3px;
`;

const ArtistFollowers = styled.p`
  margin: 0;
`;

const ArtistRatings = styled.div`
  display: flex;
`;

const ResultsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ResultsTitle = styled.h1`
  color: ${COLORS.pink};
  @media (max-width: 377px) {
    font-size: 7vw;
  }
`;
export default Results;
