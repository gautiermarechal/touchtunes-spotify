import fetchSingleArtistInfo from "../../handlers/FetchSingleArtistInfo";

export const requestSingleArtist = () => ({
  type: "REQUEST_SINGLE_ARTIST",
});

export const receiveSingleArtist = (data) => ({
  type: "RECEIVE_SINGLE_ARTIST",
  data: data,
});

export const errorSingleArtist = () => ({
  type: "ERROR_SINGLE_ARTIST",
});

export const requestAlbums = () => ({
  type: "REQUEST_ALBUMS",
});

export const receiveAlbums = (data) => ({
  type: "RECEIVE_ALBUMS",
  data: data,
});

export const errorAlbums = () => ({
  type: "ERROR_ALBUMS",
});

export const asyncReceiveSingleArtistInfo = (id, token) => {
  return (dispatch) => {
    fetchSingleArtistInfo(id, token, dispatch);
  };
};
