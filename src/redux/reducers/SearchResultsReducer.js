const initialState = { status: "idle", artists: {} };

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_ARTISTS_SEARCH":
      return { ...state, status: "requested" };
    case "RECEIVE_ARTISTS_SEARCH":
      return { ...state, status: "received", artists: action.data };
    case "ERROR_TOKEN":
      return { ...state, status: "error" };
    default:
      return { ...state };
  }
};

export default searchResultsReducer;
