import { combineReducers } from "redux";
import authentificationReducer from "./AuthentificationReducer";
import searchResultsReducer from "./SearchResultsReducer";
import singleArtistReducer from "./SingleArtistReducer";

const reducer = combineReducers({
  authentification: authentificationReducer,
  search: searchResultsReducer,
  singleArtist: singleArtistReducer,
});

export default reducer;
