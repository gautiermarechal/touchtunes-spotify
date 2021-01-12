import {
  errorArtistsSearch,
  receiveArtistsSearch,
  requestArtistsSearch,
} from "../redux/actions/SearchResultsActions";

const fetchArtistSearch = (e, token, dispatch) => {
  const search = e.target.value;
  dispatch(requestArtistsSearch());
  fetch(`https://api.spotify.com/v1/search?q=${search}&type=artist`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      dispatch(receiveArtistsSearch(json.artists));
    })
    .catch((err) => dispatch(errorArtistsSearch()))
    .then(() => {
      if (search === "") {
        dispatch(receiveArtistsSearch({}));
      }
    });
};

export default fetchArtistSearch;
