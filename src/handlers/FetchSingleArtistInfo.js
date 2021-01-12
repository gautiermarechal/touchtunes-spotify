import {
  errorSingleArtist,
  receiveSingleArtist,
  requestSingleArtist,
  requestAlbums,
  receiveAlbums,
  errorAlbums,
} from "../redux/actions/SingleArtistActions";

const fetchSingleArtistInfo = (id, token, dispatch) => {
  //Request artist info
  dispatch(requestSingleArtist());
  fetch(`	https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch(receiveSingleArtist(json));

      //Request albums
      dispatch(requestAlbums());
      fetch(`https://api.spotify.com/v1/artists/${id}/albums`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch(receiveAlbums(json));
        })
        .catch(() => dispatch(errorAlbums()));
    })
    .catch(() => dispatch(errorSingleArtist()));
};

export default fetchSingleArtistInfo;
