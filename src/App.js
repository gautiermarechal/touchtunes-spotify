import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalStyles from "./components/GlobalStyles";
import Login from "./components/LoginPage/Login";
import SearchBar from "./components/ArtistSearchPage/SearchBar";
import ArtistSearch from "./components/ArtistSearchPage/ArtistSearch";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/">
          <NavigationBar />
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/artist-search">
              <ArtistSearch />
            </Route>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
