const initialState = { status: "idle", singleArtist: { albums: {} } };

const singleArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SINGLE_ARTIST":
      return { ...state, status: "requested" };
    case "RECEIVE_SINGLE_ARTIST":
      return { ...state, status: "received", singleArtist: action.data };
    case "ERROR_SINGLE_ARTIST":
      return { ...state, status: "error" };

    case "REQUEST_ALBUMS":
      return { ...state, status: "requested" };
    case "RECEIVE_ALBUMS":
      return {
        ...state,
        status: "received",
        singleArtist: { ...state.singleArtist, albums: action.data },
      };
    case "ERROR_ALBUMS":
      return { ...state, status: "error" };
    default:
      return { ...state };
  }
};

export default singleArtistReducer;
