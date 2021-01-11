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
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
