const initialState = { status: "idle", token: "" };

const authentificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_TOKEN":
      return { ...state, status: "received", token: action.data };
    case "ERROR_TOKEN":
      return { ...state, status: "error" };
    default:
      return { ...state };
  }
};

export default authentificationReducer;
