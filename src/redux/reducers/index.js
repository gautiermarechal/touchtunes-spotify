import { combineReducers } from "redux";
import authentificationReducer from "./AuthentificationReducer";
import searchResultsReducer from "./SearchResultsReducer";

const reducer = combineReducers({
  authentification: authentificationReducer,
  search: searchResultsReducer,
});

export default reducer;
