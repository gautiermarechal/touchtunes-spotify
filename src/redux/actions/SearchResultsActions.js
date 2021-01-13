export const requestArtistsSearch = () => ({
  type: "REQUEST_ARTISTS_SEARCH",
});

export const receiveArtistsSearch = (data) => ({
  type: "RECEIVE_ARTISTS_SEARCH",
  data: data,
});

export const errorArtistsSearch = () => ({
  type: "ERROR_ARTISTS_SEARCH",
});

export const recordURL = (data) => ({
  type: "RECORD_URL",
  data: data,
});
