import { combineReducers } from "redux";
import authentificationReducer from "./AuthentificationReducer";

const reducer = combineReducers({
  authentification: authentificationReducer,
});

export default reducer;
