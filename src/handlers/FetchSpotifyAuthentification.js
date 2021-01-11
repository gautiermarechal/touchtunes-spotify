const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const fetchSpotifyAuthentification = () => {
  fetch(
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000/artist-search?&response_type=token`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

export default fetchSpotifyAuthentification;
