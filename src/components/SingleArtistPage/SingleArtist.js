import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { asyncReceiveSingleArtistInfo } from "../../redux/actions/SingleArtistActions";

const SingleArtist = () => {
  const id = useParams().id;
  const token = useSelector((state) => state.authentification.token);
  const dispatch = useDispatch();
  const singleArtist = useSelector((state) => state.singleArtist);
  useEffect(() => {
    dispatch(asyncReceiveSingleArtistInfo(id, token));
  }, [dispatch, id, token]);
  return (
    <>
      {singleArtist.status === "received" ? (
        <>
          <HeaderContainer>
            <AuthorImage src={singleArtist.singleArtist.images[0].url} />
            <AuthorName>{singleArtist.singleArtist.name}</AuthorName>
            <AlbumsTitle>Albums</AlbumsTitle>
          </HeaderContainer>
          <Wrapper>
            <AlbumsContainer>
              {singleArtist.singleArtist.albums && (
                <AlbumsGrid>
                  {singleArtist.singleArtist.albums.items.map((album) => {
                    return (
                      <LinkWrapper
                        target="_blank"
                        href={album.external_urls.spotify}
                        key={album.id}
                      >
                        <Album>
                          <AlbumCoverContainer>
                            <AlbumCover src={album.images[0].url} />
                          </AlbumCoverContainer>
                          <AlbumInfoContainer>
                            <AlbumTagsContainer>
                              <AlbumTitle>{album.name}</AlbumTitle>
                              <AlbumArtists>
                                {album.artists.map((artist) => (
                                  <ArtistName key={artist.id}>
                                    {artist.name}
                                  </ArtistName>
                                ))}
                              </AlbumArtists>
                              <AlbumDate>{album.release_date}</AlbumDate>
                              <AlbumNoOfTracks>
                                {album.total_tracks} tracks
                              </AlbumNoOfTracks>
                            </AlbumTagsContainer>
                          </AlbumInfoContainer>
                          <PreviewSpotify>
                            <ButtonLabel>Preview</ButtonLabel>
                          </PreviewSpotify>
                        </Album>
                      </LinkWrapper>
                    );
                  })}
                </AlbumsGrid>
              )}
            </AlbumsContainer>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.lightBlue};
`;

const AuthorImage = styled.img`
  height: auto;
  width: 300px;
  border-radius: 7px;
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const AuthorName = styled.h1`
  color: ${COLORS.pink};
`;

const AlbumsTitle = styled.h4`
  color: grey;
  margin: 0;
  font-style: italic;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const AlbumsContainer = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  flex-direction: column;
  margin: 50px 100px 50px 100px;

  @media (max-width: 600px) {
    margin: 20px;
  }
`;

const AlbumsGrid = styled.div`
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

const LinkWrapper = styled.a``;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 30px;
  cursor: pointer;
  padding: 20px 20px 0px 20px;
  transition: 0.2s;
  height: 90%;
  justify-content: space-between;

  &:hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
  }

  @media (max-width: 940px) {
    padding: 10px;
    margin: 20px;
  }
`;

const AlbumCoverContainer = styled.div``;

const AlbumCover = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 7px;
`;

const AlbumInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const AlbumTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlbumTitle = styled.h3`
  margin-bottom: 3px;
`;

const AlbumArtists = styled.div`
  margin: 0;
`;

const ArtistName = styled.p`
  margin-right: 5px;
`;

const AlbumDate = styled.p`
  display: flex;
`;

const AlbumNoOfTracks = styled.p`
  display: flex;
`;

const PreviewSpotify = styled.button`
  border: none;
  background-color: ${COLORS.lightBlue};
  color: ${COLORS.black};
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  bottom: 0;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 940px) {
    margin: 0px;
  }
`;

const ButtonLabel = styled.h4`
  color: ${COLORS.pink};
`;

export default SingleArtist;
