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
  }, []);
  return (
    <>
      {singleArtist.status === "received" ? (
        <>
          <HeaderContainer>
            <AuthorImage src={singleArtist.singleArtist.images[0].url} />
            <AuthorName>{singleArtist.singleArtist.name}</AuthorName>
            <AlbumsTitle>Albums</AlbumsTitle>
          </HeaderContainer>
          <AlbumsContainer>
            {singleArtist.singleArtist.albums && (
              <AlbumsGrid>
                {singleArtist.singleArtist.albums.items.map((album) => {
                  return (
                    <Album>
                      <AlbumCoverContainer>
                        <AlbumCover src={album.images[0].url} />
                      </AlbumCoverContainer>
                      <AlbumInfoContainer>
                        <AlbumTagsContainer>
                          <AlbumTitle>{album.name}</AlbumTitle>
                          <AlbumArtists>
                            {album.artists.map((artist) => (
                              <p>{artist.name}</p>
                            ))}
                          </AlbumArtists>
                          <AlbumDate>{album.release_date}</AlbumDate>
                          <AlbumNoOfTracks>
                            {album.total_tracks} tracks
                          </AlbumNoOfTracks>
                        </AlbumTagsContainer>
                      </AlbumInfoContainer>
                      <PreviewSpotify>Preview</PreviewSpotify>
                    </Album>
                  );
                })}
              </AlbumsGrid>
            )}
            ;
          </AlbumsContainer>
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
`;

const AuthorName = styled.h1`
  color: ${COLORS.pink};
`;

const AlbumsTitle = styled.h4`
  color: grey;
  margin: 0;
  font-style: italic;
`;

const AlbumsContainer = styled.div`
  display: flex;
  width: 80vw;
  background-color: ${COLORS.white};
  margin: 50px 100px 50px 100px;
  flex-direction: column;
`;

const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  margin: 0px 30px 30px 30px;
`;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 30px;
  cursor: pointer;
  padding: 20px;
  transition: 0.2s;

  &:hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
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

const AlbumArtists = styled.p`
  margin: 0;
`;

const AlbumDate = styled.p`
  display: flex;
`;

const AlbumNoOfTracks = styled.p`
  display: flex;
`;

const PreviewSpotify = styled.button``;

export default SingleArtist;
