import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Components Imports
import NavigationBar from "./components/NavigationBar/NavigationBar";
import GlobalStyles from "./components/GlobalStyles";
import Login from "./components/LoginPage/Login";
import ArtistSearch from "./components/ArtistSearchPage/ArtistSearch";
import SingleArtist from "./components/SingleArtistPage/SingleArtist";

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
            <Route path="/artist/:id">
              <SingleArtist />
            </Route>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
